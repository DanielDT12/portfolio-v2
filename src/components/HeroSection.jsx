import { IoLogoGithub } from "react-icons/io";
import { PrimaryNav } from "./UI/PrimaryNav";

export const HeroSection = () => {
	return (
		<main className="hero-section flex-center">
			<section className="hero-section__wrapper">
				<div className="hero-section__intro-text flex-col">
					<p className="hero-section__special-text">
						Hi, welcome to my portfolio
					</p>
					<h1 className="hero-section__title">My name is Daniel</h1>
					<p className="">
						I am currently working towards becoming a web developer. While my
						skills are mostly focused on frontend development, I am eager to
						learn backend as well. I find learning to be the most enjoyable
						aspect of this field and I strive to create efficient and creative
						solutions.
					</p>
					<a
						className="hero-section__github-link"
						href="https://github.com/danieldt12"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="visually-hidden">Github profile</p>
						<IoLogoGithub className="hero-section__github-icon" />
					</a>
				</div>
				<PrimaryNav
					navClass={"primary-nav"}
					ulClass={"primary-nav__list flex-col"}
					liClass={"primary-nav__list-item"}
					linkClass={"primary-nav__link"}
				/>
			</section>
		</main>
	);
};
