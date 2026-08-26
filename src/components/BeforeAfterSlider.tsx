import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Eye } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
  heightClass?: string;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80';

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  beforeLabel = 'Antes / Proceso',
  afterLabel = 'Resultado Final',
  heightClass = 'h-72 sm:h-96'
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const [beforeSrc, setBeforeSrc] = useState<string>(beforeImage);
  const [afterSrc, setAfterSrc] = useState<string>(afterImage);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBeforeSrc(beforeImage);
  }, [beforeImage]);

  useEffect(() => {
    setAfterSrc(afterImage);
  }, [afterImage]);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      if (width > 0) {
        setContainerWidth(width);
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();

    const container = containerRef.current;
    if (!container) return;

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(container);
    }

    window.addEventListener('resize', updateDimensions);
    return () => {
      if (resizeObserver && container) {
        resizeObserver.unobserve(container);
      }
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      setIsDragging(true);
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-900 border border-slate-700 shadow-xl group touch-none`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* After Image (Full Background) */}
      <img
        src={afterSrc}
        alt={`Resultado final - ${title}`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={() => setAfterSrc(FALLBACK_IMAGE)}
      />

      {/* Before Image (Clipped with precise container width) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeSrc}
          alt={`Antes - ${title}`}
          className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none"
          style={{
            width: `${containerWidth}px`,
            minWidth: `${containerWidth}px`
          }}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setBeforeSrc(FALLBACK_IMAGE)}
        />
        {/* Subtle contrast mask */}
        <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
      </div>

      {/* Badges for Labels */}
      <div className="absolute top-4 left-4 pointer-events-none z-10">
        <span className="px-2.5 py-1 rounded bg-[#0F172A]/90 text-white backdrop-blur-md text-[11px] font-bold tracking-wider uppercase border border-slate-700 shadow">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none z-10">
        <span className="px-2.5 py-1 rounded bg-[#F97316]/95 text-white backdrop-blur-md text-[11px] font-bold tracking-wider uppercase shadow">
          {afterLabel}
        </span>
      </div>

      {/* Vertical Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#0F172A] shadow-2xl flex items-center justify-center border-2 border-[#F97316] transform group-hover:scale-110 transition-transform">
          <MoveHorizontal className="w-4 h-4 text-[#0F172A]" />
        </div>
      </div>

      {/* Instruction Helper (fades on hover) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0F172A]/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity border border-slate-700">
        <Eye className="w-3.5 h-3.5 text-[#F97316]" />
        <span>Desliza para comparar Antes / Después</span>
      </div>
    </div>
  );
};
