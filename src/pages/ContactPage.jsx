import { Link } from "react-router-dom";
import ContactInfo from "../components/ContactInfo";
import HamburgerMenu from "../components/UI/HamburgerMenu";

export const ContactPage = () => {
	return (
		<main className="main contact-page">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<ContactInfo />
			<Link className="home-link" to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
