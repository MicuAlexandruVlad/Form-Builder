import { Suspense } from "react"
import FormBuilderHeader from "./components/formBuilderHeader/FormBuilderHeader"

export default function RootLayout({
  	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<main className="bg-[#232a2f] h-screen flex flex-col">
			<FormBuilderHeader />
			<Suspense fallback={<span>Loading...</span>}>
				{ children }
			</Suspense>
		</main>
	)
}
