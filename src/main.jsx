import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { HeroSection } from "./components/HeroSection.jsx";
import { MyWork } from "./pages/MyWork.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { AboutMe } from "./pages/AboutMe.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HeroSection />,
			},
			{
				path: "/about",
				element: <AboutMe />,
			},
			{
				path: "/work",
				element: <MyWork />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
		],
		errorElement: <div>Error element</div>,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
