export const InputField = ({
	name,
	type,
	placeholder,
	value,
	children,
	onChange,
	inputWrapperClass,
	labelClass,
	inputFieldClass,
}) => {
	const InputComponent = type === "textarea" ? "textarea" : "input";
	return (
		<div className={inputWrapperClass}>
			<label className={labelClass} htmlFor={name}>
				{children}
			</label>
			<InputComponent
				type={type === "textarea" ? undefined : type}
				name={name}
				className={inputFieldClass}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required
				rows={type === "textarea" ? 4 : undefined}
			/>
		</div>
	);
};
