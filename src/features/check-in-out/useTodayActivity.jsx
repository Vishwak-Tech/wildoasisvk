import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings"; // Adjust the path as needed

export function useTodayActivity() {
    const {isLoading, data: activities} = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ["today-activity"],
    })

    return {isLoading, activities}
}