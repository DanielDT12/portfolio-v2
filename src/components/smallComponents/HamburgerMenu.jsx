import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { PrimaryNav } from "./PrimaryNav";
import { AppContext } from "../../context/appContext";

export default function HamburgerMenu({
	wrapperClass,
	buttonClass,
	iconClass,
}) {
	const { isOpen, setIsOpen } = useContext(AppContext);

	const handleChange = () => {
		return setIsOpen(!isOpen);
	};

	console.log(isOpen);
	return (
		<div className={wrapperClass}>
			<button
				className={buttonClass}
				onClick={() => {
					handleChange();
				}}
			>
				{isOpen ? (
					<IoCloseSharp className={iconClass} />
				) : (
					<GiHamburgerMenu className={iconClass} />
				)}
			</button>
			{isOpen === true && <PrimaryNav navClass={"hamburger-menu__nav"} />}
		</div>
	);
}
