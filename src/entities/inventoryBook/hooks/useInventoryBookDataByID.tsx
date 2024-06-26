import { useQuery } from "@tanstack/react-query";
import { geInventoryBookById } from "../api/index";

export default function useInventoryBookDataByID(id: string): {
  locationDataById: any | undefined;
  isLoading: boolean;
  isPending: boolean;
}{

  const { data: locationDataById, isLoading, isPending } = useQuery({
    queryKey: ['INVENTORY_BOOK_DATA_BY_ID', id],
    queryFn: async(id: any) => await geInventoryBookById(id),
    retryOnMount: false
  });

  return {
    locationDataById,
    isLoading,
    isPending
  };
}
