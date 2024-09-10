import { Link } from "react-router-dom";

export const MyWork = () => {
	return (
		<main className="main my-work">
			<div className="my-work__nav"></div>
			<div className="my-work__content">
				<p>content</p>
			</div>
			<Link to={"/"}>&larr; Back</Link>
		</main>
	);
};
