import LocationPicker from "@/app/components/locationPicker";
import { Save, Sparkles } from "lucide-react";

export default function RoutePlanner(){
    return(
        <div className="bg-white">
            <div >
                <div className="flex justify-between px-6">
                    <div className="flex flex-col text-black">
                        <h1 className="font-bold">Route Planner</h1>
                        <p className="text-xs">Home - Route Planner</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="border rounded place-content-center">
                            <button className="text-black  px-5">Reset</button>
                        </div>
                        <div className="border rounded place-content-center">
                            <button className="text-black px-5 flex gap-2"><Save className="size-5"/>Save Route</button>
                        </div>
                        <div className="border rounded bg-blue-800 place-content-center">
                            <button className="text-white px-5 flex gap-2"><Sparkles className="size-5" />Optimize Route</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="Select Vehicle"></label>
                        <div>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Select Driver"></label>
                        <div>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <LocationPicker/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>stops and map</div>
            <div>route summary</div>
        </div>
    )
}