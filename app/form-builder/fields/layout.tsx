
export default function RootLayout({
  	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<div className="bg-[#232a2f] h-full">
			{children}
		</div>
	)
}
