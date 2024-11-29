import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
	const [localStorageValue, setLocalStorageValue] = useState(() => {
		try {
			const value = localStorage.getItem(key);

			if (value) {
				return JSON.parse(value);
			} else {
				localStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (error) {
			console.error("Failed to read from localStorage: ", error);
			return defaultValue;
		}
	});

	const setLocalStorageStateValue = (valueOrFn) => {
		let newValue;

		if (typeof valueOrFn === "function") {
			const fn = valueOrFn;
			newValue = fn(localStorageValue);
		} else {
			newValue = valueOrFn;
		}

		try {
			localStorage.setItem(key, JSON.stringify(newValue));
			setLocalStorageValue(newValue);
		} catch (error) {
			console.error("Failed to save to localStorage: ", error);
		}
	};

	useEffect(() => {
		const handleStorageChange = (e) => {
			if (e.key === key && e.newValue) {
				setLocalStorageValue(JSON.parse(e.newValue));
			}
		};

		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, [key]);

	return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
