export async function optimizeRoute(source, destination) {
  
  const routes = await prisma.roadNetwork.findMany({
      where: {
      roadStatus: {
            not : "blocked"
          }
      }
  });
  
  const updatedRoutes = routes.map((route) => {
  
      let updatedCost = route.cost;
  
      if(route.trafficLevel === "high"){
          updatedCost *= 3;
      }
  
      if(route.trafficLevel === "medium"){
          updatedCost *= 2;
      }
  
      return {
          source: route.sourceCity,
          destination: route.destinationCity,
          cost: updatedCost
      };
  });
  
  const warehouse = await prisma.Warehouse.findMany({
    include: {
      stock: true
    }
  });

  const availableWarehouses = warehouse.filter(
    (warehouse) => warehouse.stock.length > 0
  );

  let bestWarehouse = null;
  let minimumCost = Infinity;

  for(const warehouse of availableWarehouses){
  
      const optimized = await optimizeRoute(
          warehouse.location,
          shipment.destinationAddress,
          shipment.totalWeight,
          shipment.totalVolume,
          "medium"
      );
  
      if(optimized.cost < minimumCost){
  
          minimumCost = optimized.cost;
  
          bestWarehouse = warehouse;
      }
  }
  await prisma.shipment.update({
      where: {
          id: shipment.id
      },
  
      data: {
          warehouseId: bestWarehouse.id
      }
  });
  
  
  const response = await fetch("http://localhost:8080/opitimze-route", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(source,
      destination,
      weight,
      volume,
      trafficLevel,
      routes : updatedRoutes
    )
  });
  
  return await response.json();
}
