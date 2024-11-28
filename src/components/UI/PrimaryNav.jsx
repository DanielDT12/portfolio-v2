import { Link, useLocation } from "react-router-dom";
import MENU_LIST from "../../data/MENU_LIST";

export const PrimaryNav = ({
	navClass,
	ulClass,
	liClass,
	linkClass,
	linkOnClick,
}) => {
	const location = useLocation();
	const pathName = location.pathname;

	return (
		<nav className={navClass}>
			<ul className={ulClass}>
				{MENU_LIST.map((link, index) => (
					<li key={link.name + index} className={liClass}>
						<Link
							className={linkClass}
							to={link.href === pathName ? "/" : link.href}
							onClick={linkOnClick}
						>
							{link.href === pathName ? "Home" : link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
