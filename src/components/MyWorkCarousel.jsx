import { useState } from "react";
import { WORK_CARD_LIST } from "../data/WORK_CARD_LIST";
import { MyWorkCard } from "./MyWorkCard";

export default function MyWorkCarousel() {
	const [index, setIndex] = useState(0);

	return (
		<div className="my-work-carousel">
			<div className="my-work-carousel__content-wrapper">
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
			<button className="my-work-carousel__button left-button">&larr;</button>
			<button className="my-work-carousel__button right-button">&rarr;</button>
		</div>
	);
}
