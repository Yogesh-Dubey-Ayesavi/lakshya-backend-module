import { SupabaseClient } from "@supabase/supabase-js";
import LakshyaEvent from "../../../models/event_model";
import { errorHandler } from "../../../error_handler/error_handler";

/**
 * Fetches a list of events from the database.
 *
 * @returns A Promise that resolves to an array of LakshyaEvent objects.
 * @throws Error if there is an issue with the database query.
 */
export default async function getEvents(supabase :SupabaseClient): Promise<LakshyaEvent[]> {
  try {
    const { data, error } = await supabase.from("events").select(`*,coordinator:coordinator_id(*)`);

    if (error) {
      throw error;
    }

    // Ensure data is an array before mapping
    if (!Array.isArray(data)) {
      throw new Error("Invalid data received from the database.");
    }

    // Map the retrieved data to LakshyaEvent objects
    const events = data.map<LakshyaEvent>((element) => LakshyaEvent.fromJSON(element));

    return events;
  } catch (error) {
   throw errorHandler(error);
  }
}
