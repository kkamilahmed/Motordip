import { type LucideIcon } from "lucide-react";

interface TextBoxProps {
  placeholder: string;
  icon?: LucideIcon;
}

export function TextBox({ placeholder, icon: Icon }: TextBoxProps) {
  return (
    <div className="relative flex items-center border-2 border-red-500 gap-2 p-3 rounded">
      {Icon && <Icon className="w-5 h-5 text-gray-600" />}

      <label className="relative flex-1 cursor-text">
        <input
          type="text"
          placeholder=" "
          className="peer w-full outline-none bg-transparent pl-1 font-BeVietnam text-sm"
        />
        <span
          className="
        absolute left-1 -top-2 text-gray-500 text-base text-[9px] font-bold
        peer-placeholder-shown:-top-0.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-red-500
        transition-all
      "
        >
          {placeholder}
        </span>
      </label>
    </div>
  );
}
