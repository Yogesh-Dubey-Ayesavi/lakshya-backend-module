import EventUsersTable from "../../../tables/event_users_table";
import LakshyaEvent from "../../../models/event_model";
import { errorHandler } from "../../../error_handler/error_handler";
import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Registers the authenticated user in multiple LakshyaEvents.
 *
 * This function registers the authenticated user in a list of LakshyaEvents by creating corresponding records
 * in the EventUsersTable.
 *
 * @param events - An array of LakshyaEvent instances to register for.
 * @returns A Promise that resolves to a boolean, indicating the success of the registration process.
 * @throws An error if there is an issue with user authentication or the database operation.
 */
export default async function registerInEvent(
  events: LakshyaEvent[],
  supabase: SupabaseClient,
): Promise<boolean> {
  try {
    // Get the authenticated user's ID, or use a default value if not available
    const authId: string = "271a38f7-49d6-4230-8523-350516c2deee";
    // Firstly done payment then work with it
    // Insert new records into the EventUsersTable for each event
    const { data, error } = await supabase
      .from(EventUsersTable.tableName)
      .insert(
        events.map((event) => {
          return { event_id: event.id, user_id: authId };
        }),
      )
      .select();

    if (error) {
      throw error;
    }

    // Registration was successful
    return true;
  } catch (error) {
    throw errorHandler(error);
  }
}
