import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2 text-lg font-medium transition-all duration-300 w-fit cursor-pointer flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-white border border-primary hover:bg-primary/90",
    outlineWhite: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
    outlinePrimary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
