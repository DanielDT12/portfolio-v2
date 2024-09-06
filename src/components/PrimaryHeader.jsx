import { DarkLightModeToggle } from "./smallComponents/DarkLightModeToggle";

export const PrimaryHeader = ({ headerClass }) => {
	return (
		<header className={headerClass}>
			<DarkLightModeToggle
				wrapperClass={"theme-switcher flex"}
				labelClass={"theme-switcher__label"}
				inputClass={"theme-switcher__input"}
			/>
		</header>
	);
};
