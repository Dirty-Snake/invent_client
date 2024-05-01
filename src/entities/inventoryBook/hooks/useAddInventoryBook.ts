import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addInventoryBook } from "../api/index";

export const useAddInventoryBook = () => {

  const queryClient = useQueryClient();

  const { mutateAsync, ...options } = useMutation<any, Error, any>({
    mutationFn: addInventoryBook,
    onError: error => new Error(error?.message)
  });

  const handleAdd = useCallback(
    async(data: string) => {

      await mutateAsync(data);
      await queryClient?.invalidateQueries({ queryKey: ['INVENTORY_BOOK_DATA'] });
    },
    [mutateAsync]
  );

  return {
    handleAdd,
    ...options,
  };
};
