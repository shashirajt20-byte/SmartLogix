-- AlterTable
ALTER TABLE "shipments" ADD COLUMN     "cargo_type" VARCHAR(50),
ADD COLUMN     "insurance" BOOLEAN,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "payment_terms" VARCHAR(50),
ADD COLUMN     "priority" VARCHAR(20),
ADD COLUMN     "reference_number" VARCHAR(100),
ADD COLUMN     "service_type" VARCHAR(50),
ADD COLUMN     "shipment_type" VARCHAR(50),
ADD COLUMN     "special_requirements" TEXT,
ADD COLUMN     "total_packages" INTEGER,
ADD COLUMN     "total_volume" DECIMAL(10,2),
ADD COLUMN     "warehouse_id" INTEGER;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "warehouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
