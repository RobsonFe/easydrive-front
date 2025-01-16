'use client'
import { ThemeProvider } from "@/provider/theme-provider";
import Footer from "../footer";
import Navbar from "../navbar";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> { 
  children: React.ReactNode;
  title?: string;
}

const Layout:React.FC<LayoutProps> = (props:LayoutProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <Navbar/>
        <div className="relative flex py-20 flex-1 flex-col overflow-hidden">
          <div className="items-center flex justify-center gap-4 sm:p-6 lg:p-8 flex-wrap">
            {props.title && <h1 className="flex 2xsm:text-[30px] md:text-[35px] font-semibold">{props.title}</h1>}
          </div>
          <main className="w-full flex-1 overflow-y-auto">
            <div className="mx-auto max-w-screen-2xl p-4 md:px-2 md:py-6 xl:p-6 2xl:p-10">
            {props.children}
            </div>
          </main>
        </div>
        <Footer/>
    </ThemeProvider>
  )
}

export default Layout;