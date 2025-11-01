

export default function RootLayout({
  	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<main className="bg-[#121d20] min-h-screen flex flex-col items-center justify-center">
			{children}
		</main>
	)
}
