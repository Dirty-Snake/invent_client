import { useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAssayToOrder, addLocation } from "../api/index";

export const useAddLocation = () => {

  const queryClient = useQueryClient();

  const { mutateAsync, ...options } = useMutation<any, Error, { idOrder: string, idAssay: string }>({
    mutationFn: addLocation,
    onError: error => new Error(error?.message)
  });

  const handleAdd = useCallback(
    async(data: string) => {

      await mutateAsync(data);
      await queryClient?.invalidateQueries({ queryKey: ['LOCATION_DATA'] });
    },
    [mutateAsync]
  );

  return {
    handleAdd,
    ...options,
  };
};
