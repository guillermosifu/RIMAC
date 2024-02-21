export const MainLayout = ({ children, className, ...props }) => (
  <div className={`max-w-[1500px] mx-auto ${className}`} {...props}>
    {children}
  </div>
);
