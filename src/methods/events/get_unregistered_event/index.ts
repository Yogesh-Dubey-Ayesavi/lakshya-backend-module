import { SupabaseClient, PostgrestResponse } from "@supabase/supabase-js";
import LakshyaEvent from "../../../models/event_model";

/**
 * Fetches a list of unregistered events using a Supabase stored procedure.
 *
 * @param {SupabaseClient} supabase - The Supabase client instance used for making API requests.
 *
 * @returns {Promise<LakshyaEvent[]>} A promise that resolves to an array of LakshyaEvent instances representing unregistered events.
 *
 * @throws {Error} If there is an error fetching the unregistered events.
 */
async function getUnregisteredEvents(supabase: SupabaseClient): Promise<LakshyaEvent[]> {
    try {
        // Call the Supabase stored procedure "get_unregistered_events" to fetch unregistered events
        const { data, error }: PostgrestResponse<LakshyaEvent> = await supabase
            .rpc("get_unregistered_events")
            .select();

        // Throw an error if the Supabase API request returns an error
        if (error) {
            throw error;
        }

        // Map the response data to LakshyaEvent instances and return the array
        return data?.map((e) => LakshyaEvent.fromJSON(e)) ?? [];
    } catch (error) {
        // Re-throw any caught errors for handling at a higher level
        throw error;
    }
}

export default getUnregisteredEvents;
