/**
 * Represents a utility class for defining field names and table information in an "event_users" database table.
 */
export default class EventUsersTable {
  /**
   * Represents the name of the "id" field in the "event_users" table.
   * This field is often used as a unique identifier for each event-user relationship.
   */
  static id: string = "id";

  /**
   * Represents the name of the "created_at" field in the "event_users" table.
   * This field is used to store the date and time when an event-user relationship was created.
   */
  static created_at: string = "created_at";

  /**
   * Represents the name of the "user_id" field in the "event_users" table.
   * This field typically stores the identifier of the user associated with an event.
   */
  static userId: string = "user_id";

  /**
   * Represents the name of the "event_id" field in the "event_users" table.
   * This field typically stores the identifier of the event associated with a user.
   */
  static eventId: string = "event_id";

  /**
   * Represents the name of the "event_users" table in the database.
   */
  static tableName: string = "event_users";
}
