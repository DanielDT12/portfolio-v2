import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";

export default function TestPage() {
	return (
		<div style={{ display: "grid", placeContent: "center", height: "94vh" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<div style={{ display: "flex", gap: "1rem" }}>
					<CiPhone style={{ width: "2rem", height: "2rem" }} />
					<p>+4747901426</p>
				</div>

				<div style={{ display: "flex", gap: "1rem" }}>
					<CiMail style={{ width: "2rem", height: "2rem" }} />
					<a href="mailto:danielsolheim@live.no">Test mail link</a>
				</div>

				<div style={{ display: "flex", gap: "1rem" }}>
					<IoLogoGithub style={{ width: "2rem", height: "2rem" }} />
					<a
						href="https://github.com/danieldt12"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
}
