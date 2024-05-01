import { useQuery } from "@tanstack/react-query";
import { getInventoryBookData } from "../api/index";
import { useState } from "react";

export default function useInventoryBookData(): {
  inventoryBookData: any | undefined;
  currentPage: number,
  setCurrentPage: (page: number) =>void,
  isLoading?: boolean;
} {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: inventoryBookData, isLoading } = useQuery({
    queryKey: ['INVENTORY_BOOK_DATA', currentPage],
    queryFn: async () => await getInventoryBookData(currentPage),
    retryOnMount: false
  });

  return {
    inventoryBookData,
    currentPage,
    setCurrentPage,
    isLoading,
  };
}
