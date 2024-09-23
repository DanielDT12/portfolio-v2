import { SKILLS_LIST } from "../../data/SKILLS_LIST";

export const SkillsList = ({ ulClass, listItemClass }) => {
	return (
		<ul className={ulClass}>
			{SKILLS_LIST.map((skill, index) => (
				<li className={listItemClass} key={skill.name + index}>
					<p className="visually-hidden">{skill.name}</p>{" "}
					{/** SCREEN READER ONLY TEXT FOR SVG */}
					{skill.icon} {/** RENDERS SVG FROM REACT ICONS */}
				</li>
			))}
		</ul>
	);
};
