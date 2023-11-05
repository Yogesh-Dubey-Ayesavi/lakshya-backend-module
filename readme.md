
 
# LakshyaSDK Documentation

LakshyaSDK is a TypeScript class that provides methods for interacting with the Lakshya SDK, enabling you to manage user information, events, event tickets, and event registrations. It is designed to work with a Supabase database instance and is intended for use in JavaScript or TypeScript applications.

## Table of Contents

- [LakshyaSDK Documentation](#lakshyasdk-documentation)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Initialization](#initialization)
  - [Class Methods](#class-methods)
    - [getUserInfo](#getuserinfo)
    - [updateUser](#updateuser)
    - [getEvents](#getevents)
    - [getMyEvents](#getmyevents)
    - [getTickets](#gettickets)
    - [registerEvent](#registerevent)

## Installation

To use the LakshyaSDK in your project, you'll need to install the required dependencies. First, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as your package manager

To install LakshyaSDK, you can use npm or yarn:

```bash
npm install @supabase/supabase-js
npm install @supabase/supabase-js
```

or



## Initialization

Before using the LakshyaSDK, you need to initialize it with a SupabaseClient instance. Here's how you can do it:

```typescript
import { createClient } from "@supabase/supabase-js";
import LakshyaSDK from "lakshya-sdk";

// Initialize a Supabase client
const supabase = createClient("your-supabase-url", "your-supabase-api-key");

// Initialize the LakshyaSDK using the Supabase client
const lakshya = LakshyaSDK.initialize(supabase);
```

Replace `"your-supabase-url"` and `"your-supabase-api-key"` with your actual Supabase URL and API key.

Now you have an instance of LakshyaSDK ready to use.

## Class Methods

### getUserInfo

**Method Signature:**

```typescript
async getUserInfo(userId: string): Promise<User>
```

- Retrieves user information from the database by user ID.

**Parameters:**

- `userId` (string): The unique identifier of the user you want to retrieve information for.

**Returns:**

- A Promise that resolves with a `User` object containing the retrieved user data.

**Example:**

```typescript
const user = await lakshya.getUserInfo(userId);
console.log("User Information:", user);
```

### updateUser

**Method Signature:**

```typescript
async updateUser(updatedUser: User): Promise<void>
```

- Updates user information in the database.

**Parameters:**

- `updatedUser` (User): An instance of the `User` class with updated user data.

**Returns:**

- A Promise indicating the success or failure of the update operation.

**Example:**

```typescript
const updatedUser = await lakshya.updateUser(updatedUser);
console.log("User updated successfully");
```

### getEvents

**Method Signature:**

```typescript
async getEvents(): Promise<LakshyaEvent[]>
```

- Fetches a list of events from the database.

**Returns:**

- A Promise that resolves to an array of `LakshyaEvent` objects.

**Throws:**

- An error if there is an issue with the database query.

**Example:**

```typescript
const events = await lakshya.getEvents();
console.log("List of Events:", events);
```

### getMyEvents

**Method Signature:**

```typescript
async getMyEvents(userId: string): Promise<LakshyaEvent[]>
```

- Gets events associated with a specific user.

**Parameters:**

- `userId` (string): The user's ID for whom you want to retrieve events.

**Returns:**

- A Promise that resolves to an array of `LakshyaEvent` objects.

**Throws:**

- An error if there is an issue with the database query.

**Example:**

```typescript
const myEvents = await lakshya.getMyEvents(userId);
console.log("User's Events:", myEvents);
```

### getTickets

**Method Signature:**

```typescript
async getTickets(): Promise<EventTicket[]>
```****

- Retrieves a list of event tickets from the database.

**Returns:**

- A Promise that resolves to an array of `EventTicket` instances if successful, or rejects with an error.

**Throws:**

- An error if there is an issue with the database operation or if the supplied error handler is triggered.

**Example:**

```typescript
const tickets = await lakshya.getTickets();
console.log("Event Tickets:", tickets);
```

### registerEvent

**Method Signature:**

```typescript
async registerEvent(events: LakshyaEvent[]): Promise<boolean>
```

- Registers the authenticated user for multiple `LakshyaEvent` instances.

**Parameters:**

- `events` (LakshyaEvent[]): An array of `LakshyaEvent` instances to register for.

**Returns:**

- A Promise that resolves to a boolean, indicating the success of the registration process.

**Throws:**

- An error if there is an issue with user authentication or the database operation.

**Example:**

```typescript
const eventsToRegister = []; // List of LakshyaEvent instances to register 
const registrationSuccess = await lakshya.registerEvent(eventsToRegister);

if (registrationSuccess) {
  console.log("User registered for events successfully");
}
```

---

That's the complete documentation for the LakshyaSDK class. You can use these methods to interact with your Supabase database and manage user information, events, event tickets, and event registrations within your Lakshya-based application.


