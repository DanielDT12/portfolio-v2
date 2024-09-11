import { Outlet } from "react-router-dom";
import { PrimaryHeader } from "./components/PrimaryHeader";
import { PrimaryFooter } from "./components/PrimaryFooter";
import AppContextProvider from "./context/appContext";

function App() {
	return (
		<AppContextProvider>
			<div className="app-wrapper">
				<PrimaryHeader
					headerClass={"primary-header flex"}
					themeSwitcherClass={"primary-header__theme-switcher"}
				/>
				<Outlet />
				<PrimaryFooter footerClass={"primary-footer flex"} />
			</div>
		</AppContextProvider>
	);
}

export default App;
