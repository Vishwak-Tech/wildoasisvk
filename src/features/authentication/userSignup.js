import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "./apiAuth";
import { toast } from "react-hot-toast";

export function useSignUp(){
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user);
            toast.success("Account successfully created! Please Veify the New account from user Email address");
        },
    });
    return {signUp, isLoading};
}