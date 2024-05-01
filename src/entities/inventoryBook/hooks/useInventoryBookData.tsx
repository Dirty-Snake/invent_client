import { useQuery } from "@tanstack/react-query";
import { getInventoryBookData } from "../api/index";
import { useState } from "react";

export default function useInventoryBookData(): {
  inventoryBookData: any | undefined;
  currentPage: number,
  locationId?: string,
  setCurrentPage: (page: number) =>void,
  setLocationId: (page: any) =>void,
  isLoading?: boolean;
} {

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [locationId, setLocationId] = useState<any>(null)


  const { data: inventoryBookData, isLoading } = useQuery({
    queryKey: ['INVENTORY_BOOK_DATA', currentPage, locationId],
    queryFn: async () => await getInventoryBookData(currentPage, locationId),
    retryOnMount: false
  });

  return {
    inventoryBookData,
    currentPage,
    setCurrentPage,
    locationId,
    setLocationId,
    isLoading,
  };
}
