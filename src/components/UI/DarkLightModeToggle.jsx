import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

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

	const [colorTheme, setColorTheme] = useLocalStorage("theme", initialTheme());

	useEffect(() => {
		document.documentElement.setAttribute("data-color-theme", colorTheme);
	}, [colorTheme]);

	const handleDarkToggle = () => {
		setColorTheme("dark");
	};

	const handleLightToggle = () => {
		setColorTheme("light");
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
