interface InputTextProps {
	name: string;
	placeholder: string;
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
}

export function InputText({ name, placeholder, type, onChange, label }: InputTextProps) {
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
				className="bg-dark-900 rounded-lg px-3.5 py-4 text-light-500 focus:border-2 focus:border-none"
			/>
		</div>
	);
}
