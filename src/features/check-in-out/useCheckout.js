import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
    const queryClient = useQueryClient();

    const {mutate: checkout, isLoading: isCheckingOut} = useMutation({
        mutationFn: ({bookingId}) => {
            if (bookingId === undefined) {
                throw new Error("bookingId is undefined in useCheckout");
            }
            return updateBooking(bookingId, {
                status: "checked-out",
            });
        },

        onSuccess: (data) => {
            toast.success(`Booking 3${data.id} successfully checked out`);
            queryClient.invalidateQueries({active: true});  //Refectchs the New Updated Data
        },

        onError: () => toast.error("There was an Error while Checking out")
    });

    return {checkout, isCheckingOut};
}