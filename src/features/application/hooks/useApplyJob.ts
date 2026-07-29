import { useState } from "react";
import { applyJob } from "../services/applicationService";

export function useApplyJob() {
    const [ loading, setLoading ] = useState(false);

    async function apply(jobId: number) {
        try {
            setLoading(true);
            const response =  await applyJob({jobId});
            return {success: true, data: response};
        } catch (error: any) {
            return{success: false, message: error?.response?.data?.message?? "Failed to apply for the Job.",};
        } finally {
            setLoading(false);
        }
    }
    return {apply, loading};
}