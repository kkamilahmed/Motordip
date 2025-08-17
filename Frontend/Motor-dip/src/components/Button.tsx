interface buttonProps {
  text: string;
  on: () => void;
}

export function Button({text,on} : buttonProps) { 
    return <div className="bg-red-500 flex justify-center items-center w-90 h-13 text-4xl p-5 shadow-2xl cursor-pointer" onClick={on}>
        {text}
        
    </div>
}