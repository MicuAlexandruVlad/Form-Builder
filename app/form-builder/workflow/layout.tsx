
export default function RootLayout({
  	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<main className="bg-[#232a2f] flex flex-col">
			{children}
		</main>
	)
}
