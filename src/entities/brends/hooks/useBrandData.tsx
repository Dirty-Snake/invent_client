import { useQuery } from "@tanstack/react-query";
import { getBrandsData } from "../api/index";
import { useState } from "react";

export default function useBrandData(): {
  brandsData: any | undefined;
  currentPage: number,
  setCurrentPage: (page: number) =>void,
  isLoading?: boolean;
} {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const { data: brandsData, isLoading } = useQuery({
    queryKey: ['BRANDS_DATA', currentPage],
    queryFn: async () => await getBrandsData(currentPage),
  });

  return {
    brandsData,
    currentPage,
    setCurrentPage,
    isLoading,
  };
}
