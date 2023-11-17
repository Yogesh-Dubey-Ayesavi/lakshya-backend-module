import { errorHandler } from "../../../error_handler/error_handler";
import EventTicket from "../../../models/event_ticket";
import EventTicketTable from "../../../tables/event_ticket";
import { SupabaseClient } from "@supabase/supabase-js";
/**
 * Retrieves a list of Event Tickets from the database.
 *
 * This function fetches event tickets from the database and returns them as an array of EventTicket instances.
 *
 * @returns A Promise that resolves to an array of EventTicket instances if successful, or rejects with an error.
 * @throws An error if there is an issue with the database operation or if the supplied errorHandler is triggered.
 */

export default async function getTickets(
  supabase: SupabaseClient,
): Promise<EventTicket[]> {
  try {
    // Fetch event tickets from the database, including related event details.
    const { data, error } = await supabase
      .from(EventTicketTable.tableName)
      .select(
        `*,event:event_id(*,coordinator:coordinator_id(*),co_coordinator:co_coordinator_id(*),rsvp_handler:rsvp_handler_id(*))`,
      );

    if (error) {
      // If there is an error, throw it to handle it through the errorHandler.
      throw error;
    }

    // If successful, map the retrieved data to EventTicket instances and return them as an array.
    return data?.map((ticket) => EventTicket.fromJSON(ticket.event)) ?? [];
  } catch (error) {
    // Handle any errors that occur during the database operation or error handling.
    throw errorHandler(error);
  }
}
