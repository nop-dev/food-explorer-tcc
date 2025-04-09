interface InputProps {
	name: string;
	placeholder: string;
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	className?: string;
}

export function Input({ name, placeholder, type, onChange, label, className }: InputProps) {
	return (
		<div className="flex flex-col gap-2 font-roboto w-full">
			<label htmlFor={name} className="text-light-400">
				{label}		
			</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				className="bg-dark-800 rounded-lg px-3.5 py-3 text-light-500 focus:border-2 focus:border-none ${className}"
			/>
		</div>
	);
}
