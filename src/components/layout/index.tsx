'use client'
import Footer from "../footer";
import Navbar from "../navbar";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> { 
	children: React.ReactNode;
	title?: string;
}

const Layout:React.FC<LayoutProps> = (props:LayoutProps) => {
	return (
		<>
			<div className="m-40 flex flex-col">
				<Navbar/>
				<div className="flex items-start gap-4 sm:p-6 lg:p-8 flex-wrap">
				{props.title && <h1 className="text-[35px] font-semibold">{props.title}</h1>}
				</div>
			<div className="flex items-start gap-4 xl:p-5 xl:mx-10 sm:p-6 lg:p-8 justify-center flex-wrap">
				{props.children}
				</div>
			</div>
		<Footer/>
		</>
)
}
export default Layout;