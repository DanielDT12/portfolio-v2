import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
	const location = useLocation();

	const pathName = location.pathname.slice(1, location.pathname.length);

	return (
		<div className="breadcrumb">
			<Link className="breadcrumb__link" to={"/"}>
				{`home / `}
			</Link>
			{location.pathname !== "/" && (
				<Link
					className="breadcrumb__link breadcrumb__link--active-page"
					to={`${location.pathname}`}
				>
					{pathName}
				</Link>
			)}
		</div>
	);
}
