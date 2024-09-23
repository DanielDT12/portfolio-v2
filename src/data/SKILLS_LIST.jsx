import { PiFileHtmlDuotone, PiFileCssDuotone } from "react-icons/pi";
import { BsFiletypeScss } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";

export const SKILLS_LIST = [
	{
		name: "html",
		icon: <PiFileHtmlDuotone className={"skills-list__icon"} />,
	},
	{
		name: "css",
		icon: <PiFileCssDuotone className={"skills-list__icon"} />,
	},
	{
		name: "scss",
		icon: <BsFiletypeScss className={"skills-list__icon"} />,
	},
	{
		name: "js",
		icon: <SiJavascript className={"skills-list__icon"} />,
	},
	{
		name: "react",
		icon: <FaReact className={"skills-list__icon"} />,
	},
	{
		name: "git",
		icon: <FaGitAlt className={"skills-list__icon"} />,
	},
];
