import Header from "../components/header";
import SideBar from "../components/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="flex">
            <div className="fixed">
                <aside>
                    <SideBar/>
                </aside>
            </div>
            <div className="flex-1 flex flex-col ml-55">
                <header className="fixed w-screen">
                    <Header/>
                </header>
                <main className="mt-12">{children}</main>
            </div>
        </div>
    )
}