import { useState } from "react";

export default function Clock() {
	let time = new Date().toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});

	const [currentTime, setCurrentTime] = useState(time);

	const updateTime = () => {
		time = new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		});
		setCurrentTime(time);
	};

	setInterval(updateTime, 1000);

	return <p className="clock">{currentTime}</p>;
}
