import Breadcrumb from "./UI/Breadcrumb";
import { DarkLightModeToggle } from "./UI/DarkLightModeToggle";

export const PrimaryHeader = ({ headerClass }) => {
	return (
		<header className={headerClass}>
			<Breadcrumb />
			<DarkLightModeToggle
				wrapperClass={"theme-switcher flex"}
				labelClass={"theme-switcher__label"}
				inputClass={"theme-switcher__input"}
			/>
		</header>
	);
};
