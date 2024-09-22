import { Link } from "react-router-dom";
import HamburgerMenu from "../components/UI/HamburgerMenu";

export const MyWork = () => {
	return (
		<main className="main my-work">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<div className="my-work__content">
				<p>content</p>
			</div>
			<Link className={"home-link"} to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
