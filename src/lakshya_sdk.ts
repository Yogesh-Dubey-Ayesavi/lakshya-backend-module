import { SupabaseClient } from "@supabase/supabase-js";
import User from "./models/user";
import getUserInfo from "./methods/user/get_user_info";
import updateUser from "./methods/user/update_user";
import getEvents from "./methods/events/get_events";
import LakshyaEvent from "./models/event_model";
import getMyEvents from "./methods/events/get_my_events";
import getTickets from "./methods/events/get_tickets";
import EventTicket from "./models/event_ticket";
import registerInEvent from "./methods/events/register_in_event";
import requestPayment from "./methods/payment/request_payment";
import RequestPaymentResponse from "./models/request_payment_response";
import getUnregisteredEvents from "./methods/events/get_unregistered_event";

/**
 * LakshyaSDK is a class that provides methods for interacting with the Lakshya SDK.
 * ```typescript
 * import { createClient } from "@supabase/supabase-js"; // Import the Supabase client library
 * import LakshyaSDK from "lakshya-sdk"; // Replace with the actual path to your LakshyaSDK module
 *
 * // Initialize a Supabase client
 * const supabase = createClient("your-supabase-url", "your-supabase-api-key");
 *
 * // Initialize the LakshyaSDK using the Supabase client
 * const lakshya = LakshyaSDK.initialize(supabase);
 *
 * // Now you can use the LakshyaSDK methods
 *
 * const userId = "123"; // Replace with the user's ID
 *
 * // Retrieve user information
 * const user = await lakshya.getUserInfo(userId);
 * console.log("User Information:", user);
 *
 * // Update user information
 * const updatedUser = await lakshya.updateUser(updatedUser);
 * console.log("User updated successfully");
 *
 * // Fetch a list of events
 * const events = await lakshya.getEvents();
 * console.log("List of Events:", events);
 *
 * // Get events associated with a specific user
 * const myEvents = await lakshya.getMyEvents(userId);
 * console.log("User's Events:", myEvents);
 *
 * // Retrieve event tickets
 * const tickets = await lakshya.getTickets();
 * console.log("Event Tickets:", tickets);
 *
 * // Register the user for multiple events
 * const eventsToRegister =  [] // List of [LaksyaEvent] to register ;
 * const registrationSuccess = await lakshya.registerEvent(eventsToRegister);
 * if (registrationSuccess) {
 *   console.log("User registered for events successfully");
 * }
 *
 * // Request payment for events
 * const paymentEvents = [...]; // List of [LakshyaEvent] for payment
 * const paymentHeaders = {...}; // HTTP headers for payment request
 * const paymentEndpoint = 'https://example.com/payment'; // Payment endpoint
 * try {
 *   const paymentResponse = await lakshya.requestPayment(paymentEvents, paymentHeaders, paymentEndpoint);
 *   console.log("Payment Response:", paymentResponse);
 * } catch (error) {
 *   console.error("Payment Error:", error.message);
 * }
 * ```
 */
class LakshyaSDK {
  private static instance: LakshyaSDK;
  static supabase: SupabaseClient;

  private constructor() {}

  /**
   * Initialize the LakshyaSDK with a SupabaseClient instance.
   * @param supabase - A SupabaseClient instance for database interactions.
   * @returns The initialized LakshyaSDK instance.
   */
  public static initialize(supabase: SupabaseClient): LakshyaSDK {
    if (!LakshyaSDK.instance) {
      this.supabase = supabase;
      LakshyaSDK.instance = new LakshyaSDK();
    }
    return LakshyaSDK.instance;
  }

  /**
   * Retrieve user information from the database by user ID.
   * @param userId - The unique identifier of the user.
   * @returns A Promise that resolves with a User object containing the retrieved user data.
   */
  async getUserInfo(userId: string): Promise<User> {
    return await getUserInfo(userId, LakshyaSDK.supabase);
  }

  /**
   * Update user information in the database.
   * @param updatedUser - An instance of the User class with updated user data.
   * @returns A Promise indicating the success or failure of the update operation.
   */
  async updateUser(updatedUser: User): Promise<void> {
    return await updateUser(updatedUser, LakshyaSDK.supabase);
  }

  /**
   * Fetch a list of events from the database.
   * @returns A Promise that resolves to an array of LakshyaEvent objects.
   * @throws Error if there is an issue with the database query.
   */
  async getEvents(): Promise<LakshyaEvent[]> {
    return await getEvents(LakshyaSDK.supabase);
  }

  /**
   * Get events associated with a specific user.
   * @param userId - The user's ID for whom you want to retrieve events.
   * @returns A Promise that resolves to an array of LakshyaEvent objects.
   * @throws Error if there is an issue with the database query.
   */
  async getMyEvents(userId: string): Promise<LakshyaEvent[]> {
    return await getMyEvents(userId, LakshyaSDK.supabase);
  }

  /**
   * Retrieves a list of Event Tickets from the database.
   * One can fetch tickets that only belong to him
   * @returns A Promise that resolves to an array of EventTicket instances if successful, or rejects with an error.
   * @throws An error if there is an issue with the database operation or if the supplied errorHandler is triggered.
   */
  async getTickets(): Promise<EventTicket[]> {
    return await getTickets(LakshyaSDK.supabase);
  }

  /**
   * Registers the authenticated user in multiple LakshyaEvents.
   * @param events - An array of LakshyaEvent instances to register for.
   * @returns A Promise that resolves to a boolean, indicating the success of the registration process.
   * @throws An error if there is an issue with user authentication or the database operation.
   */
  async registerEvent(events: LakshyaEvent[]): Promise<boolean> {
    return await registerInEvent(events, LakshyaSDK.supabase);
  }


  /**
   * Sends a payment request to a specified endpoint for a list of events.
   * @param events - An array containing event objects for which payment is requested.
   * @param headers - HTTP headers to be included in the request.
   * @param endpoint - The endpoint URL to which the payment request will be sent.
   * @returns A Promise that resolves to a RequestPaymentResponse object representing the response from the payment request.
   */
  async requestPayment(
    events: LakshyaEvent[],
    headers: any,
    endpoint: string
  ): Promise<RequestPaymentResponse> {
    return await requestPayment(events, headers, endpoint);
  }

      
  /**
   * Fetches a list of unregistered events using a Supabase stored procedure.
   * @param {SupabaseClient} supabase - The Supabase client instance used for making API requests.
   * @returns {Promise<LakshyaEvent[]>} A promise that resolves to an array of LakshyaEvent instances representing unregistered events.
   * @throws {Error} If there is an error fetching the unregistered events.
   */
  async  getUnregisteredEvents(supabase: SupabaseClient): Promise<LakshyaEvent[]> {
    return await getUnregisteredEvents(supabase);
  }


}

export default LakshyaSDK;
