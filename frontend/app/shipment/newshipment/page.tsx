import { Save, X } from "lucide-react";

export default function NewShipment(){
    return(
        <div className="bg-white h-full"> 
            <div className="flex justify-between p-4">
                <div className="text-black">
                    <h1 className="font-bold">New Shipment</h1>
                    <p className="text-xs">Home  Shipments  New Shipment</p>
                </div>
                <div className="flex gap-7">
                    <button className="flex px-2 rounded place-items-center border"><X className="size-4 gap-x-1.5 text-black"/><p className="text-sm p-1 text-black">Cancel</p></button>
                    <button  className="flex bg-blue-700 px-6 rounded place-items-center"><Save className="size-4 gap-x-1.5"/><p className="text-sm p-1">Save Shipment</p></button>
                </div>
            </div>
            <div className="flex flex-col gap-3.5 p-3">
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black">1. Pickup & Delivery Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Customer</label>
                            <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Location</label>
                            <div>
                                <input className="border rounded" type="text" placeholder="Enter pickup location"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Location</label>
                            <div>
                                <input className="border rounded" type="text" placeholder="Enter delivery location"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Date</label>
                            <div>
                                <input className="border rounded text-black" type="date" name="" id="" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Time</label>
                            <div>
                                <input className="border rounded text-black" type="time" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Date</label>
                            <div>
                                <input className="border rounded text-black" type="date" name="" id="" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Time</label>
                            <div>
                                <input className="border rounded text-black" type="time" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black">2. Shipment Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Shipment Type</label>
                            <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Weight (kg)</label>
                            <div>
                                <input className="border rounded" type="number" placeholder="Enter weight"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Volume</label>
                            <div>
                                <input className="border rounded" type="number" placeholder="Enter volume"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">No. of Packages</label>
                            <div>
                                <input className="border rounded" type="number" placeholder="Enter no. of package"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label className="text-xs text-black" htmlFor="">Cargo Type</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Special Requirement</label>
                            <div>
                                <input className="border rounded" type="text" placeholder="Handle with care"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Reference / PO Number</label>
                            <div>
                                <input className="border rounded" type="text" name="" id="" placeholder="PO-2025-1248"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black">3. Additional Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Priority</label>
                            <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Service Type</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Payment Terms</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Insurance</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        
                        <div>
                            <label className="text-xs text-black" htmlFor="">Notes</label>
                            <div>
                                <input className="border rounded" type="text" placeholder="Enter your additional notes..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black">4. Assignments</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Assign Vehicle</label>
                            <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Assign Driver</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Assign Warehouse</label>
                            <div>
                                <select className="border rounded" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-black">Send notification to customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}