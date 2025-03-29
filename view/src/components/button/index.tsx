interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ className, children, ...props }: ButtonProps) {
	return <button {...props} className={`bg-tomato-100 text-light-100 rounded-lg px-4 py-3 font-poppins text-sm md:text-base ${className}`}>{children}</button>;
}

