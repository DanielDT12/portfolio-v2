import { Link } from "react-router-dom";
import MENU_LIST from "../../data/MENU_LIST";

export const PrimaryNav = () => {
	return (
		<nav className="primary-nav">
			<ul className="primary-nav__list flex-col">
				{MENU_LIST.map((link, index) => (
					<li key={link.name + index} className="primary-nav__list-item">
						<Link className="primary-nav__link" to={link.href}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
