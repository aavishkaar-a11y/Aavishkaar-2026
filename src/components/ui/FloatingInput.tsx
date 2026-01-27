interface FloatingInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
}: FloatingInputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="
          peer w-full rounded-xl
          bg-black/40 text-white
          border border-white/10
          px-4 pt-6 pb-2
          focus:outline-none
          focus:border-yellow-400
          transition-all
        "
      />

      <label
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          text-gray-400 text-sm
          transition-all
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-yellow-400
          peer-valid:top-2 peer-valid:text-xs peer-valid:text-yellow-400
        "
      >
        {label}
      </label>
    </div>
  );
}
