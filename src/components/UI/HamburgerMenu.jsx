import { useContext, useState } from "react";
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
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={wrapperClass}>
			<button
				className={buttonClass}
				onClick={() => {
					handleChange();
				}}
				aria-expanded={isOpen}
				aria-controls="nav-menu"
			>
				{isOpen ? (
					<IoCloseSharp className={iconClass} />
				) : (
					<GiHamburgerMenu className={iconClass} />
				)}
			</button>
			<PrimaryNav
				navClass={`hamburger-menu__nav ${isOpen ? "is-open" : "is-closed"}`}
				ulClass={"hamburger-menu__list"}
				liClass={"hamburger-menu__list-item"}
				linkClass={"hamburger-menu__link"}
				linkOnClick={() => handleChange()}
				id="nav-menu"
			/>
		</div>
	);
}
