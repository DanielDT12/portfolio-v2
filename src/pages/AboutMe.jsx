import { Link } from "react-router-dom";
import HamburgerMenu from "../components/UI/HamburgerMenu";
import { SkillsList } from "../components/UI/SkillsList";

export const AboutMe = () => {
	return (
		<main className="main">
			<HamburgerMenu
				wrapperClass={"hamburger-menu"}
				buttonClass={"hamburger-menu__button"}
				iconClass={"hamburger-menu__icon"}
			/>
			<div className="about-me">
				<div className="about-me__info">
					<h2 className="about-me__title">About Me</h2>
					<p>
						My name is Daniel and i have been a fan of PC and gaming since 1999
						when my mom bought a super nintendo from our neighbour. In 2009 i
						bought my first PC, an Acer laptop and in 2012 i built my own PC
						from parts i ordered myself.
					</p>
					<p>
						Since i built my first PC i have continued on my path in PC and
						gaming and in 2020 i started to build my own keyboards. Building
						keyboards eventually lead me into web development and coding, so
						this is the current culmination of my skills.
					</p>
				</div>
				<SkillsList
					ulClass={"skills-list"}
					listItemClass={"skills-list__list-item"}
				/>
			</div>
			<Link className={"home-link"} to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
