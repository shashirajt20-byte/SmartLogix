import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="flex">
            <div className="">
                <aside>
                    <SideBar/>
                </aside>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="">
                    <header>
                        <Header/>
                    </header>
                </div>
                <div className="">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}