import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import HamburgerMenu from "../components/smallComponents/HamburgerMenu";

export const ContactPage = () => {
	return (
		<main className="main contact-page">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<ContactForm
				formWrapperClass={"contact-form"}
				formTitleClass={"contact-form__title"}
				formSumbitBtnClass={"contact-form__submit-btn"}
			/>
			<Link className="contact-page__home-link" to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
