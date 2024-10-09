import { Link } from "react-router-dom";
import HamburgerMenu from "../components/UI/HamburgerMenu";
import { MyWorkCard } from "../components/MyWorkCard";
import { WORK_CARD_LIST } from "../data/WORK_CARD_LIST";

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
				<div className="my-work__card-wrapper">
					{WORK_CARD_LIST.map((card, index) => (
						<MyWorkCard
							key={card.title + index}
							cardClass={"my-work-card"}
							imgClass={"my-work-card__image"}
							imgSrc={card.imgSrc}
							titleClass={"my-work-card__title"}
							cardTextClass={"my-work-card__text"}
							hrefCode={card.hrefCode}
							hrefPreview={card.hrefPreview}
							titleText={card.title}
							cardText={card.infoText}
						/>
					))}
				</div>
			</div>
			<Link className={"home-link"} to={"/"}>
				&larr; Home
			</Link>
		</main>
	);
};
