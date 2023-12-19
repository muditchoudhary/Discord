import React from "react";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className=" bg-red-800 h-full flex justify-center items-center">{children}</div>
			</body>
		</html>
	);
}
