export const DarkLightModeToggle = ({
	wrapperClass,
	labelClass,
	inputClass,
}) => {
	return (
		<div className={wrapperClass}>
			<label className={labelClass} for="dark">
				Dark
			</label>
			<input className={inputClass} type="radio" name="theme" id="dark" />
			<input className={inputClass} type="radio" name="theme" id="light" />
			<label className={labelClass} for="light">
				Light
			</label>
		</div>
	);
};
