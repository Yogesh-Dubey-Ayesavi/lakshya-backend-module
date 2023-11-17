"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
/**
 * Represents a LakshyaEvent, which is an event with various properties.

*/
/**
 * Represents a LakshyaEvent, which is an event with various properties.
  
```typescript
const randomLakshyaEvent = {
    id:"5c4130c6-b9fb-4e4e-a618-5d72e988917f",
    created_at: new Date().toISOString(),
    name: 'Random Event',
    description: 'This is a random LakshyaEvent description.',
    datetime: new Date().toISOString(),
    amount:50,
    picture: 'https://example.com/random-image.jpg',
    coordinator:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    co_cordinator:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    rsvp_handler:new User(
      {
        id: '561641a8-a2d0-45de-8545-55b8d96ddaa5',
        created_at: new Date().toISOString(),
        phone_number: '+1234567890',
        email_id: 'coordinator@example.com',
        sem: 3,
        avatar_url: 'https://example.com/coordinator-avatar.jpg',
        name: 'John Doe',
      }
    ),
    support: {
      contact:["+91XXXXXXXXX"]
    }, // You can customize this property as needed
  };
```
**/
var LakshyaEvent = /** @class */ (function () {
    /**
     * Constructs a new LakshyaEvent instance.
     *
     * @param props - An object containing the properties of the LakshyaEvent.
     */
    function LakshyaEvent(props) {
        this.id = props.id;
        this.created_at = props.created_at;
        this.name = props.name;
        this.description = props.description;
        this.datetime = props.datetime;
        this.picture = props.picture;
        this.rsvp_handler = props.rsvp_handler;
        this.support = props.support;
        this.coordinator = props.coordinator;
        this.co_cordinator = props.co_cordinator;
        this.amount = props.amount;
    }
    /**
     * Converts a JSON object to a LakshyaEvent instance.
     *
     * @param json - The JSON representation of the LakshyaEvent.
     * @returns A new LakshyaEvent instance.
     */
    LakshyaEvent.fromJSON = function (json) {
        return new LakshyaEvent({
            id: json.id,
            created_at: json.created_at,
            name: json.name,
            description: json.description,
            datetime: json.datetime,
            picture: json.picture,
            rsvp_handler: json.rsvp_handler ? user_1.default.fromJSON(json.rsvp_handler) : null,
            support: json.support,
            coordinator: json.coordinator ? user_1.default.fromJSON(json.coordinator) : null,
            co_cordinator: json.co_cordinator
                ? user_1.default.fromJSON(json.co_cordinator)
                : null,
            amount: json.amount,
        });
    };
    /**
     * Converts a LakshyaEvent instance to a JSON object.
     *
     * @returns A JSON representation of the LakshyaEvent.
     */
    LakshyaEvent.prototype.toJSON = function () {
        return {
            id: this.id,
            created_at: this.created_at,
            name: this.name,
            description: this.description,
            datetime: this.datetime,
            picture: this.picture,
            rsvp_handler: this.rsvp_handler ? this.rsvp_handler.toJSON() : null,
            support: this.support,
            coordinator: this.coordinator ? this.coordinator.toJSON() : null,
            co_cordinator: this.co_cordinator ? this.co_cordinator.toJSON() : null,
            amount: this.amount,
        };
    };
    return LakshyaEvent;
}());
exports.default = LakshyaEvent;
