export interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ text, type = 'button' }: ButtonProps) {
  return (
    <button className='border-2 border-solid border-slate-800 rounded hover:border-dashed min-w-fit shadow-lg text-center cursor-pointer bg-zinc-800 text-zinc-50 hover:bg-zinc-50 hover:text-slate-800' type={type}>
      {text && <div className='h-full m-2 text-center '>{text}</div>}
    </button>
  );
}
