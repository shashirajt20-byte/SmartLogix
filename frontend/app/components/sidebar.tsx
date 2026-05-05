import { Bell, Car, ChartLine, File, House, Mail, MapPin, Settings, Truck, User, Users, Van, Warehouse } from "lucide-react";

export default function SideBar(){
    return(
        <div className="bg-gray-950 px-2 py-2 flex flex-col gap-4 w-55 h-screen">
            <div className="flex gap-2">
                <div>
                    <img className="h-12 w-12" src="https://cdn.vectorstock.com/i/500p/29/72/truck-logo-design-template-vector-27222972.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <p className="text-white font-bold">Smart</p>
                        <p className="text-blue-700 font-bold">Logix</p>
                    </div>
                    <div className="text-xs">
                        <p>Supply Chain Optimization</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-white gap-3.5">
                <div className="flex gap-2">
                    <House/>
                    <p>Dashboard</p>
                </div>
                <div className="flex gap-2">
                    <Truck/>
                    <p>Shipments</p>
                </div>
                <div className="flex gap-2">
                    <Mail/>
                    <p>Route Planner</p>
                </div>
                <div className="flex gap-2">
                    <MapPin/>
                    <p>Tracking</p>
                </div>
                <div className="flex gap-2">
                    <Van/>
                    <p>Loads / Dispatch</p>
                </div>
                <div className="flex gap-2">
                    <Car/>
                    <p>Vehicles</p>
                </div>
                <div className="flex gap-2">
                    <User/>
                    <p>Drivers</p>
                </div>
                <div className="flex gap-2">
                    <Warehouse/>
                    <p>Warehouse</p>
                </div>
                <div className="flex gap-2">
                    <Users/>
                    <p>customers</p>
                </div>
                <div className="flex gap-2">
                    <ChartLine/>
                    <p>Analytics</p>
                </div>
                <div className="flex gap-2">
                    <File/>
                    <p>Documents</p>
                </div>
                <div className="flex gap-2">
                    <Bell/>
                    <p>Alerts</p>
                </div>
                <div className="flex gap-2">
                    <Users/>
                    <p>Users & Roles</p>
                </div>
                <div className="flex gap-2">
                    <Settings/>
                    <p>Settings</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}