import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: checkin, isloading: isCheckingIn} = useMutation({
        mutationFn: ({bookingId, breakfast}) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
            ...breakfast,
        }),

        onSuccess: (data) => {
            toast.success(`Booking 3${data.id} successfully checked in`);
            queryClient.invalidateQueries({active: true});  //Refectchs the New Updated Data
            navigate("/");
        },

        onError: () => toast.error("There was an Error while Checking in")
    });

    return {checkin, isCheckingIn};
}