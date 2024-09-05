import { Outlet } from "react-router-dom";
import { PrimaryHeader } from "./components/PrimaryHeader";
import { PrimaryFooter } from "./components/PrimaryFooter";

function App() {
	return (
		<div className="app-wrapper">
			<PrimaryHeader
				headerClass={"primary-header flex"}
				themeSwitcherClass={"primary-header__theme-switcher"}
			/>
			<Outlet />
			<PrimaryFooter footerClass={"primary-footer flex"} />
		</div>
	);
}

export default App;
