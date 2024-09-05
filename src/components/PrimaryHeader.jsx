import { DarkLightModeToggle } from "./smallComponents/DarkLightModeToggle";

export const PrimaryHeader = ({ headerClass, themeSwitcherClass }) => {
	return (
		<header className={headerClass}>
			<DarkLightModeToggle
				className={themeSwitcherClass}
				wrapperClass={"theme-switcher"}
				labelClass={"theme-switcher__label"}
				inputClass={"theme-switcher__input"}
			/>
		</header>
	);
};
