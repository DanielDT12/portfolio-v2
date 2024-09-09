import { useEffect } from "react";
import { useState } from "react";

export const DarkLightModeToggle = ({
	wrapperClass,
	labelClass,
	inputClass,
}) => {
	const initialTheme = () => {
		const preferDarkMode =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		return preferDarkMode ? "dark" : "light";
	};

	const [colorTheme, setColorTheme] = useState(initialTheme());

	console.log(colorTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-color-theme", colorTheme);
	}, [colorTheme]);

	const handleDarkToggle = () => {
		setColorTheme("dark");
		console.log(colorTheme);
	};

	const handleLightToggle = () => {
		setColorTheme("light");
		console.log(colorTheme);
	};

	return (
		<div className={wrapperClass}>
			<label className={labelClass} htmlFor="dark">
				Dark
			</label>
			<input
				className={inputClass}
				type="radio"
				name="theme"
				id="dark"
				checked={colorTheme === "dark"}
				onChange={handleDarkToggle}
			/>
			<input
				className={inputClass}
				type="radio"
				name="theme"
				id="light"
				checked={colorTheme === "light"}
				onChange={handleLightToggle}
			/>
			<label className={labelClass} htmlFor="light">
				Light
			</label>
		</div>
	);
};
