import Clock from "./UI/Clock";

export const PrimaryFooter = ({ footerClass }) => {
	return (
		<footer className={footerClass}>
			<div className="detail-text" aria-hidden="true">
				<p className="detail-text__text">
					font-family<span className="detail-text__symbol-span">:</span>
					<span className="detail-text__span"> 'Jetbrains-Mono'</span>
					<span className="detail-text__symbol-span">;</span>
				</p>
			</div>
			<Clock />
		</footer>
	);
};
