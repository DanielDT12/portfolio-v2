import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { HeroSection } from "./components/HeroSection.jsx";

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
				element: <div className="test">My Work page</div>,
			},
			{
				path: "/contact",
				element: <div className="test">contact page</div>,
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
