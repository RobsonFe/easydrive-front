interface LayoutProps  { 
	children: React.ReactNode;
	title?: string;
}

const Layout:React.FC<LayoutProps> = (props:LayoutProps) => {
	return (
		<>
			<div className="rounded-xl border-2 border-gray-100 mx-20 mt-10">
				<div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
				{props.title && <h1 className="text-2xl font-semibold">{props.title}</h1>}
				</div>
			<div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 justify-center">
				{props.children}
			</div>
		</div>
		</>
)
}
export default Layout;