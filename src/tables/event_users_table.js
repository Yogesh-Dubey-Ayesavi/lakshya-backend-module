"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a utility class for defining field names and table information in an "event_users" database table.
 */
var EventUsersTable = /** @class */ (function () {
    function EventUsersTable() {
    }
    /**
     * Represents the name of the "id" field in the "event_users" table.
     * This field is often used as a unique identifier for each event-user relationship.
     */
    EventUsersTable.id = "id";
    /**
     * Represents the name of the "created_at" field in the "event_users" table.
     * This field is used to store the date and time when an event-user relationship was created.
     */
    EventUsersTable.created_at = "created_at";
    /**
     * Represents the name of the "user_id" field in the "event_users" table.
     * This field typically stores the identifier of the user associated with an event.
     */
    EventUsersTable.userId = "user_id";
    /**
     * Represents the name of the "event_id" field in the "event_users" table.
     * This field typically stores the identifier of the event associated with a user.
     */
    EventUsersTable.eventId = "event_id";
    /**
     * Represents the name of the "event_users" table in the database.
     */
    EventUsersTable.tableName = "event_users";
    return EventUsersTable;
}());
exports.default = EventUsersTable;
