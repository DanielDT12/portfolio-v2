import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<main
			style={{
				display: "grid",
				placeContent: "center",
				minHeight: "100vh",
				fontFamily: "var(--ff-special)",
				lineHeight: "1.3",
			}}
		>
			<div style={{ maxWidth: "30rem", margin: "1rem" }}>
				<h1 style={{ marginBlockEnd: "1rem" }}>
					Hey, this page is out of bounds of the website.
				</h1>
				<p>
					If you would like to navigate back to the main page{" "}
					<Link to={"/"} style={{ color: "var(--clr-rose)" }}>
						here
					</Link>{" "}
					is a link.
				</p>
			</div>
		</main>
	);
}
