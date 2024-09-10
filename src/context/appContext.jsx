import { createContext, useState } from "react";

export const AppContext = createContext({
	open: false,
});

export default function AppContextProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	return <AppContext.Provider value={{ open }}>{children}</AppContext.Provider>;
}
