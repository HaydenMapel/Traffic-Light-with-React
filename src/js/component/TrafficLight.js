import React, { useState } from "react";

export function TrafficLight() {
	const [color, setColor] = useState(null);
	let redExtraClass = " ";
	if (color == "red") {
		redExtraClass = "selected";
	}
	let yellowExtraClass = " ";
	if (color == "yellow") {
		yellowExtraClass = "selected";
	}
	let greenExtraClass = " ";
	if (color == "green") {
		greenExtraClass = "selected";
	}
	return (
		<div className="container text-center">
			<div className="mx-auto row bg-dark" id="toppole" />
			<div className="mx-auto rounded bg-dark py-3" id="lightcontainer">
				<div
					className={"mx-auto light rounded-circle " + redExtraClass}
					id="redlight"
					onClick={() => setColor("red")}
				/>
				<div
					className={
						"mx-auto light rounded-circle " + yellowExtraClass
					}
					id="yellowlight"
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						"mx-auto light rounded-circle " + greenExtraClass
					}
					id="greenlight"
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}
