import { AnchorTag } from "./UI/AnchorTag";

export const MyWorkCard = ({
	cardClass,
	imgClass,
	cardTextClass,
	titleClass,
	imgSrc,
	href,
	titleText,
	cardText,
}) => {
	return (
		<div className={cardClass}>
			<img className={imgClass} src={imgSrc} />
			<div className="flex-col" style={{ gap: ".5rem" }}>
				<h3 className={titleClass}>{titleText}</h3>
				<p className={cardTextClass}>{cardText}</p>
			</div>
			<div className="flex-between">
				<AnchorTag
					anchorClass={"my-work-card__link"}
					href={href}
					target={"_blank"}
					rel={"noopener noreferrer"}
				>
					Code
				</AnchorTag>
				<AnchorTag
					anchorClass={"my-work-card__link"}
					href={href}
					target={"_blank"}
					rel={"noopener noreferrer"}
				>
					Live Preview
				</AnchorTag>
			</div>
		</div>
	);
};
