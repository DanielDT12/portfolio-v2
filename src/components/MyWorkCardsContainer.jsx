import { WORK_CARD_LIST } from "../data/WORK_CARD_LIST";
import { MyWorkCard } from "./MyWorkCard";
import { useRef, useEffect } from "react";

export default function MyWorkCardsContainer() {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const handleScroll = (e) => {
			e.preventDefault();
			const SCROLL_SPEED = 0.5;
			container.scrollLeft += e.deltaY * SCROLL_SPEED;
		};

		container.addEventListener("wheel", handleScroll);

		return () => {
			container.removeEventListener("wheel", handleScroll);
		};
	}, []);

	return (
		<div className="my-work-cards-container" ref={containerRef}>
			<div className="my-work-cards-container__content-wrapper">
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
	);
}
