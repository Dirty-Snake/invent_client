import {useCallback} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLocation } from "../api/index";

export const useDeleteLocation = () => {

  const queryClient = useQueryClient();

  const { mutateAsync, ...options } = useMutation<any, Error, string>({
    mutationFn: deleteLocation,
    onError: error => new Error(error?.message)
  });

  const handleDelete = useCallback(
    async (id: string) => {

      await mutateAsync(id);
      await queryClient.invalidateQueries({ queryKey: ['LOCATION_DATA'] });
    },
    [mutateAsync]
  );

  return {
    handleDelete,
    ...options,
  };
};
