import { Link } from "react-router-dom";
import MENU_LIST from "../../data/MENU_LIST";

export const PrimaryNav = ({
	navClass,
	ulClass,
	liClass,
	linkClass,
	linkOnClick,
}) => {
	return (
		<nav className={navClass}>
			<ul className={ulClass}>
				{MENU_LIST.map((link, index) => (
					<li key={link.name + index} className={liClass}>
						<Link className={linkClass} to={link.href} onClick={linkOnClick}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
