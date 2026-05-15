import { ChevronDown, Funnel, Maximize2 } from "lucide-react";

export default function LiveTracking(){
    return(
        <div className="bg-white flex flex-col p-2.5 px-5 gap-2.5">
            <div>
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-black font-bold">Live Tracking</h1>
                        <p className="text-black text-xs">Home  Tracking</p>
                    </div>
                    <div className="flex gap-1.5">
                        <div className=" px-2.5 place-content-center">
                            <select name="" id="" className="outline-none text-black border border-gray-200 rounded-md px-2.5 py-1.5">
                                <option value="">1</option>
                                <option value="">1</option>
                                <option value="">1</option>
                            </select>
                        </div>
                        <div className=" px-2.5 place-content-center">
                            <button className="flex gap-2.5 text-black border border-gray-200 rounded-md place-items-center px-2.5 py-1 hover:bg-gray-200 active:scale-95"><Funnel className="size-4"/>Filters</button>
                        </div>
                        <div className=" place-content-center">
                            <button className="flex gap-2.5 text-black place-items-center px-2.5 border border-gray-200 rounded-md py-1 hover:bg-gray-200 active:scale-95"><Maximize2 className="size-4"/>Full Screen</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3.5 w-full">
                    <div className="flex-1 flex justify-between p-2 border border-gray-200 rounded-md">
                        <div className="text-black">
                            <p className="text-sm">Active Vehicle</p>
                            <h1 className="font-bold">18</h1>
                            <p className="text-xs ">Live on map</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-1 flex justify-between p-2 border border-gray-200 rounded-md">
                        <div className="text-black">
                            <p className="text-sm">Active Vehicle</p>
                            <h1 className="font-bold">18</h1>
                            <p className="text-xs ">Live on map</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-1 flex justify-between p-2 border border-gray-200 rounded-md">
                        <div className="text-black">
                            <p className="text-sm">Active Vehicle</p>
                            <h1 className="font-bold">18</h1>
                            <p className="text-xs ">Live on map</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-1 flex justify-between p-2 border border-gray-200 rounded-md">
                        <div className="text-black">
                            <p className="text-sm">Active Vehicle</p>
                            <h1 className="font-bold">18</h1>
                            <p className="text-xs ">Live on map</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                {/*<LiveTracking/>*/}
            </div>
            <div className="border border-gray-200 rounded-md">
                <div className="flex justify-between place-items-center px-2.5 text-black ">
                    <h1>Live Shipment{}</h1>
                    <p><ChevronDown className="size-4"/></p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}