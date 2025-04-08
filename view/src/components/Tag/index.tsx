interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function Tag({ className, children, ...props }: TagProps) {
	return (
		<div
			{...props}
			className={`bg-dark-1000 text-light-100 rounded-lg px-2 py-1 font-poppins text-sm md:text-base w-fit ${className}`}
		>
			{children}
		</div>
	);
}