'use client'
import { Save, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function NewShipment(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
    async function fetchCustomers() {
      try {
        const res = await fetch("http://localhost:4000/shipment/getCustomers");
        const data = await res.json();
        if (data.success) {
          setCustomers(data.data);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCustomers(); 
  }, []);

    return(
        <div className="bg-white h-full"> 
            <div className="flex justify-between p-4">
                <div className="text-black">
                    <h1 className="font-bold text-xl">New Shipment</h1>
                    <p className="text-xs">Home  Shipments  New Shipment</p>
                </div>
                <div className="flex gap-7">
                    <button className="flex px-2 rounded place-items-center border"><X className="size-4 gap-x-1.5 text-black"/><p className="text-sm p-1 text-black">Cancel</p></button>
                    <button  className="flex bg-blue-700 px-6 rounded place-items-center"><Save className="size-4 gap-x-1.5"/><p className="text-sm p-1">Save Shipment</p></button>
                </div>
            </div>
            <div className="flex flex-col gap-3.5 p-3">
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black font-bold">1. Pickup & Delivery Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Customer</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                <option value="">Select Customer</option>
                                {
                                    customers.map((c) =>(
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Location</label>
                            <div>
                                <div className="border rounded"><input className="text-black outline-none px-2.5 text-xs" type="text" placeholder="Enter pickup location"/></div>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Location</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="text" placeholder="Enter delivery location"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Date</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="date" name="" id="" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Pickup Time</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="time" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Date</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="date" name="" id="" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Delivery Time</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="time" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black font-bold">2. Shipment Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Shipment Type</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                    <option value="Standard Delivery">Standard Delivery</option>
                                        <option value="Express Delivery">Express Delivery</option>
                                        <option value="Same Day Delivery">Same Day Delivery</option>
                                        <option value="Next Day Delivery">Next Day Delivery</option>
                                        <option value="International Shipping">International Shipping</option>
                                        <option value="Domestic Shipping">Domestic Shipping</option>
                                        <option value="Bulk Freight">Bulk Freight</option>
                                        <option value="Heavy Cargo">Heavy Cargo</option>
                                        <option value="Cold Chain Delivery">Cold Chain Delivery</option>
                                        <option value="Perishable Goods Delivery">Perishable Goods Delivery</option>
                                        <option value="Fragile Goods Delivery">Fragile Goods Delivery</option>
                                        <option value="Hazardous Materials Shipping">Hazardous Materials Shipping</option>
                                        <option value="E-commerce Delivery">E-commerce Delivery</option>
                                        <option value="Warehouse Transfer">Warehouse Transfer</option>
                                        <option value="Reverse Logistics / Return Shipment">Reverse Logistics / Return Shipment</option>
                                        <option value="Partial Load Shipment">Partial Load Shipment</option>
                                        <option value="Full Truck Load (FTL)">Full Truck Load (FTL)</option>
                                        <option value="Less Than Truck Load (LTL)">Less Than Truck Load (LTL)</option>
                                        <option value="Air Freight">Air Freight</option>
                                        <option value="Sea Freight">Sea Freight</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Weight (kg)</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="number" placeholder="Enter weight"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Volume</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="number" placeholder="Enter volume"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">No. of Packages</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="number" placeholder="Enter no. of package"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label className="text-xs text-black" htmlFor="">Cargo Type</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                    <option value="General Goods">General Goods</option>
                                        <option value="Fragile Goods">Fragile Goods</option>
                                        <option value="Perishable Goods">Perishable Goods</option>
                                        <option value="Hazardous Materials">Hazardous Materials</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Automobile Parts">Automobile Parts</option>
                                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                                        <option value="Industrial Equipment">Industrial Equipment</option>
                                        <option value="Textiles & Apparel">Textiles & Apparel</option>
                                        <option value="Food & Beverages">Food & Beverages</option>
                                        <option value="Chemicals">Chemicals</option>
                                        <option value="Construction Materials">Construction Materials</option>
                                        <option value="Machinery">Machinery</option>
                                        <option value="Documents & Parcels">Documents & Parcels</option>
                                        <option value="Medical Supplies">Medical Supplies</option>
                                        <option value="Retail Products">Retail Products</option>
                                        <option value="Luxury Goods">Luxury Goods</option>
                                        <option value="Agricultural Products">Agricultural Products</option>
                                        <option value="Oversized Cargo">Oversized Cargo</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Special Requirement</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="text" placeholder="Handle with care"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Reference / PO Number</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="text" name="" id="" placeholder="PO-2025-1248"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black font-bold">3. Additional Information</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Priority</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                    <option value="Low">Low</option>
                                    <option value="Normal">Normal</option>
                                    <option value="High">High</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Service Type</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                    <option value="Standard">Standard</option>
                                    <option value="Economy">Economy</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Express">Express</option>
                                    <option value="Same Day">Same Day</option>
                                    <option value="Next Day">Next Day</option>
                                    <option value="Scheduled Delivery">Scheduled Delivery</option>
                                    <option value="Door to Door">Door to Door</option>
                                    <option value="Warehouse to Warehouse">Warehouse to Warehouse</option>
                                    <option value="White Glove Service">White Glove Service</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Payment Terms</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                    <option value="Prepaid">Prepaid</option>
                                    <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                                    <option value="Net Banking">Net Banking</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="UPI Payment">UPI Payment</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="Credit Account">Credit Account</option>
                                    <option value="Partial Advance">Partial Advance</option>
                                    <option value="Postpaid">Postpaid</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-black" htmlFor="">Insurance</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        
                        <div>
                            <label className="text-xs text-black" htmlFor="">Notes</label>
                            <div className="border rounded">
                                <input className="text-black outline-none px-2.5 text-xs" type="text" placeholder="Enter your additional notes..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border  rounded-xl p-3.5 gap-5">
                    <div><h2 className="text-black font-bold">4. Assignments</h2></div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <label  className="text-xs text-black" htmlFor="">Assign Vehicle</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-noned" name="" id="">
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
                            <label className="text-xs text-black" htmlFor="">Assign Driver</label>
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
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
                            <div className="border rounded">
                                <select className="w-full text-black rounded text-xs px-2.5 outline-none" name="" id="">
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