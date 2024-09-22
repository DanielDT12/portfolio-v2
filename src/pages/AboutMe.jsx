import { Link } from "react-router-dom";
import HamburgerMenu from "../components/UI/HamburgerMenu";

export const AboutMe = () => {
	return (
		<main className="main">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<Link className={"home-link"} to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
