import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "./apiAuth";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const {mutate: updateUser, isloading: isUpdating} = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({user}) => {
      toast.success("User account Successfully updated");

      queryClient.setQueryData(['user'], user);
      // queryClient.invalidateQueries({ queryKey: ["user"]});
    },
    onError: (err) => toast.error(err.message),
  });
  return {isUpdating, updateUser};
}