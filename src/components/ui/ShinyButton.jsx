const ShinyButton = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "4s",
  bg = "bg-black",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-md ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={`relative z-1 ${bg} border border-gray-800 text-white text-center text-[16px] py-[12px] px-[26px] rounded-md`}
      >
        {children}
      </div>
    </Component>
  );
};

export default ShinyButton;
