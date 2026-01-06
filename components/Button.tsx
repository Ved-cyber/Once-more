import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 ease-out transform hover:-translate-y-1 focus:outline-none";
  
  const variants = {
    primary: "bg-[#D4AF37] text-black border border-[#D4AF37] hover:bg-white hover:border-white shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]",
    outline: "bg-transparent text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;