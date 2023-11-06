import { SupabaseClient } from "@supabase/supabase-js";
import LakshyaEvent from "../../../models/event_model";
import EventUsersTable from "../../../tables/event_users_table";
import { errorHandler } from "../../../error_handler/error_handler";

type LakshyaEvents = Promise<LakshyaEvent[]>;

/**
 * Get events associated with a specific user.
 *
 * @param userId - The user's ID for whom you want to retrieve events.
 * @returns A Promise that resolves to an array of LakshyaEvent objects.
 * @throws Error if there is an issue with the database query.
 */
export default async function getMyEvents(
  userId: string,
  supabase: SupabaseClient,
): Promise<LakshyaEvents> {
  try {
    const { data, error } = await supabase
      .from(EventUsersTable.tableName)
      .select(
        `*,event:event_id(*,coordinator:coordinator_id(*),co_coordinator:co_coordinator_id(*),rsvp_handler:rsvp_handler_id(*))`,
      )
      .eq(EventUsersTable.userId, userId);

    if (error) {
      console.log(error);
      throw new Error(`Supabase query error: ${error.message}`);
    }

    if (!data) {
      return [];
    }

    return data.map<LakshyaEvent>((element) =>
      LakshyaEvent.fromJSON(element.event),
    );
  } catch (error) {
    throw errorHandler(error);
  }
}
