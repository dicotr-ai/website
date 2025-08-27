type ButtonProps = {
  label: string; 
  onClick?: () => void; 
};

const Button = ({label,onClick}:ButtonProps) => {
  return (
    <div className="relative mt-12 w-[293px] h-[78px]">
      <button
        className="relative w-full h-full rounded-full 
                   bg-gradient-to-tr from-[#98AA28] to-[#D6FF7E] 
                   shadow-lg border border-white 
                   text-white text-lg font-rubik font-semibold tracking-wider
                   cursor-pointer transition-all duration-300
                   hover:from-[#7a8b20] hover:to-[#b5e85f]"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
