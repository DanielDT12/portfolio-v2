import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { HeroSection } from "./components/HeroSection.jsx";
import { MyWork } from "./pages/MyWork.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

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
				element: (
					<div className="test">
						<p>About page</p>
					</div>
				),
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
