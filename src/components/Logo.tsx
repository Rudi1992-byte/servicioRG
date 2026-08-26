import React, { useState } from 'react';
import logoImg from '../assets/images/logo_rg_1787609997607.jpg';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showText = true
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const isLight = variant === 'light' || variant === 'white';
  const textColorPrimary = isLight ? 'text-white' : 'text-[#0F172A]';
  const textColorSecondary = isLight ? 'text-[#94A3B8]' : 'text-[#64748B]';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Brand Logo Mark */}
      <div className={`${sizeClasses[size]} rounded-lg bg-white p-0.5 shadow-sm border border-slate-200/80 flex items-center justify-center overflow-hidden shrink-0`}>
        {!imgError ? (
          <img
            src={logoImg}
            alt="Construcciones & Servicios RG"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#0F172A] flex items-center justify-center rounded text-white font-black text-xs">
            RG
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-black text-sm sm:text-base tracking-tight leading-none uppercase font-heading ${textColorPrimary}`}>
              CONSTRUCCIONES
            </span>
          </div>
          <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-0.5 ${isLight ? 'text-[#F97316]' : 'text-[#EA580C]'}`}>
            & SERVICIOS RG
          </span>
        </div>
      )}
    </div>
  );
};
