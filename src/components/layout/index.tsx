interface LayoutProps  { 
	children: React.ReactNode;
	title?: string;
}

const Layout:React.FC<LayoutProps> = (props:LayoutProps) => {
	return (
		<>
			<div className="mx-20 mt-10 flex flex-wrap">
				<div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 flex-wrap">
				{props.title && <h1 className="text-2xl font-semibold">{props.title}</h1>}
				</div>
			<div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 justify-center flex-wrap">
				{props.children}
			</div>
		</div>
		</>
)
}
export default Layout;