import { useQuery } from "@tanstack/react-query";
import { getInventoryBookData } from "../api/index";

export default function useInventoryBookData(): {
  inventoryBookData: any | undefined;
  isLoading?: boolean;
} {

  const { data: inventoryBookData, isLoading } = useQuery({
    queryKey: ['INVENTORY_BOOK_DATA'],
    queryFn: async () => await getInventoryBookData(),
  });

  return {
    inventoryBookData,
    isLoading,
  };
}
