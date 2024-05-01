import { useQuery } from "@tanstack/react-query";
import { getLocationData } from "../api/index";
import { useState } from "react";

export default function useLocationData(): {
  locationData: any | undefined;
  currentPage: number,
  setCurrentPage: (page: number) =>void,
  isLoading?: boolean;
} {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: locationData, isLoading } = useQuery({
    queryKey: ['LOCATION_DATA', currentPage],
    queryFn: async () => await getLocationData(currentPage),
  });

  return {
    locationData,
    currentPage,
    setCurrentPage,
    isLoading,
  };
}
