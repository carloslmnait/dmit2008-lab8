export const metadata = {
	title: 'Next Starter Kit',
	description: 'blank starter kit for next.js applications',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
