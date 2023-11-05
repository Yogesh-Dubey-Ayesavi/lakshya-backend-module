import LakshyaEvent from "./event_model";
/**
 * Represents an event ticket with various properties.
 */
class EventTicket {
  /**
   * The user ID associated with the ticket.
   */
  user_id: string;

  /**
   * The timestamp when the ticket was created.
   */
  created_at: Date;

  /**
   * The unique identifier of the ticket.
   */
  ticket_id: string;

  /**
   * Indicates whether the ticket has expired.
   */
  expired: boolean;

  /**
   * The event associated with the ticket.
   */
  event: LakshyaEvent;

  /**
   * The timestamp when the ticket expired, if applicable (nullable).
   */
  expired_at: Date | null;

  /**
   * Constructs a new EventTicket instance.
   *
   * @param props - An object containing the properties of the EventTicket.
   */
  constructor(props: EventTicketInterface) {
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
  static fromJSON(json: any): EventTicket {
    return new EventTicket({
      user_id: json.user_id,
      created_at: new Date(json.created_at),
      ticket_id: json.ticket_id,
      expired: json.expired,
      event: LakshyaEvent.fromJSON(json.event),
      expired_at: json.expired_at ? new Date(json.expired_at) : null,
    });
  }

  /**
   * Converts an EventTicket instance to a JSON object.
   *
   * @returns A JSON representation of the EventTicket.
   */
  toJSON(): EventTicketInterface {
    return {
      user_id: this.user_id,
      created_at: this.created_at, // Format date as ISO string
      ticket_id: this.ticket_id,
      expired: this.expired,
      event: this.event.toJSON(), // Assuming LakshyaEvent has a toJSON method
      expired_at: this.expired_at,
    };
  }
}

/**
 * Interface representing the expected properties of an EventTicket.
 */
interface EventTicketInterface {
  user_id: string;
  created_at: Date;
  ticket_id: string;
  expired: boolean;
  event: LakshyaEvent;
  expired_at: Date | null;
}

export default EventTicket;
