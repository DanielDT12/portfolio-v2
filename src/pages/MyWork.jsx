import { Link } from "react-router-dom";
import HamburgerMenu from "../components/UI/HamburgerMenu";
import MyWorkCardsContainer from "../components/MyWorkCarousel";

export const MyWork = () => {
	return (
		<main className="main">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<div className="my-work">
				<h2 className="my-work__title">My Work</h2>
				<p>Here are some projects i have worked on.</p>
				<MyWorkCardsContainer />
			</div>
			<Link className={"home-link"} to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
