"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_model_1 = require("./event_model");
/**
 * Represents an event ticket with various properties.
 */
var EventTicket = /** @class */ (function () {
    /**
     * Constructs a new EventTicket instance.
     *
     * @param props - An object containing the properties of the EventTicket.
     */
    function EventTicket(props) {
        this.user_id = props.user_id;
        this.created_at = props.created_at;
        this.ticket_id = props.ticket_id;
        this.expired = props.expired;
        this.event = props.event;
        this.expired_at = props.expired_at;
    }
    /**
     * Converts a JSON object to an EventTicket instance.
     *
     * @param json - The JSON representation of the EventTicket.
     * @returns A new EventTicket instance.
     */
    EventTicket.fromJSON = function (json) {
        return new EventTicket({
            user_id: json.user_id,
            created_at: new Date(json.created_at),
            ticket_id: json.ticket_id,
            expired: json.expired,
            event: event_model_1.default.fromJSON(json.event),
            expired_at: json.expired_at ? new Date(json.expired_at) : null,
        });
    };
    /**
     * Converts an EventTicket instance to a JSON object.
     *
     * @returns A JSON representation of the EventTicket.
     */
    EventTicket.prototype.toJSON = function () {
        return {
            user_id: this.user_id,
            created_at: this.created_at,
            ticket_id: this.ticket_id,
            expired: this.expired,
            event: this.event.toJSON(),
            expired_at: this.expired_at,
        };
    };
    return EventTicket;
}());
exports.default = EventTicket;
