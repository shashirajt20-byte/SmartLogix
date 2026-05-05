import { Bell, ChevronDown, CircleQuestionMark, Menu, Search } from "lucide-react";

export default function Header(){
    return(
        <div className="flex justify-between bg-white  border-2  place-items-center px-3.5 h-12">
            <div className="text-black">
                <Menu />
            </div>
            <div className="flex border rounded px-2 py-0.5">
                <Search/>
                <input className="border-none px-2.5" type="text" placeholder="Search anything..."/>
            </div>
            <div className="flex gap-6 place-items-center text-black">
                <Bell/>
                <CircleQuestionMark/>
                <img className="h-8 w-8 rounded-4xl" src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="" />
                <div className="flex flex-col gap-0">
                    <p className="text-sm">Arjun Mehta</p>
                    <p className="text-xs">Admin</p>
                </div>
                <ChevronDown />
            </div>
        </div>
    )
}