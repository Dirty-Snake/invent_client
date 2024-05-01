import {useCallback} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInventoryBook } from "../api/index";

export const useDeleteInventoryBook = () => {

  const queryClient = useQueryClient();

  const { mutateAsync, ...options } = useMutation<any, Error, string>({
    mutationFn: deleteInventoryBook,
    onError: error => new Error(error?.message)
  });

  const handleDelete = useCallback(
    async (id: string) => {

      await mutateAsync(id);
      await queryClient.invalidateQueries({ queryKey: ['INVENTORY_BOOK_DATA'] });
    },
    [mutateAsync]
  );

  return {
    handleDelete,
    ...options,
  };
};
