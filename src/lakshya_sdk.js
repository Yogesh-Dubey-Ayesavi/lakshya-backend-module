"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_user_info_1 = require("./methods/user/get_user_info");
var update_user_1 = require("./methods/user/update_user");
var get_events_1 = require("./methods/events/get_events");
var get_my_events_1 = require("./methods/events/get_my_events");
var get_tickets_1 = require("./methods/events/get_tickets");
var register_in_event_1 = require("./methods/events/register_in_event");
var request_payment_1 = require("./methods/payment/request_payment");
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
var LakshyaSDK = /** @class */ (function () {
    function LakshyaSDK() {
    }
    /**
     * Initialize the LakshyaSDK with a SupabaseClient instance.
     * @param supabase - A SupabaseClient instance for database interactions.
     * @returns The initialized LakshyaSDK instance.
     */
    LakshyaSDK.initialize = function (supabase) {
        if (!LakshyaSDK.instance) {
            this.supabase = supabase;
            LakshyaSDK.instance = new LakshyaSDK();
        }
        return LakshyaSDK.instance;
    };
    /**
     * Retrieve user information from the database by user ID.
     * @param userId - The unique identifier of the user.
     * @returns A Promise that resolves with a User object containing the retrieved user data.
     */
    LakshyaSDK.prototype.getUserInfo = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, get_user_info_1.default)(userId, LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update user information in the database.
     * @param updatedUser - An instance of the User class with updated user data.
     * @returns A Promise indicating the success or failure of the update operation.
     */
    LakshyaSDK.prototype.updateUser = function (updatedUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, update_user_1.default)(updatedUser, LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetch a list of events from the database.
     * @returns A Promise that resolves to an array of LakshyaEvent objects.
     * @throws Error if there is an issue with the database query.
     */
    LakshyaSDK.prototype.getEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, get_events_1.default)(LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get events associated with a specific user.
     * @param userId - The user's ID for whom you want to retrieve events.
     * @returns A Promise that resolves to an array of LakshyaEvent objects.
     * @throws Error if there is an issue with the database query.
     */
    LakshyaSDK.prototype.getMyEvents = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, get_my_events_1.default)(userId, LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves a list of Event Tickets from the database.
     * One can fetch tickets that only belong to him
     * @returns A Promise that resolves to an array of EventTicket instances if successful, or rejects with an error.
     * @throws An error if there is an issue with the database operation or if the supplied errorHandler is triggered.
     */
    LakshyaSDK.prototype.getTickets = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, get_tickets_1.default)(LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Registers the authenticated user in multiple LakshyaEvents.
     * @param events - An array of LakshyaEvent instances to register for.
     * @returns A Promise that resolves to a boolean, indicating the success of the registration process.
     * @throws An error if there is an issue with user authentication or the database operation.
     */
    LakshyaSDK.prototype.registerEvent = function (events) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, register_in_event_1.default)(events, LakshyaSDK.supabase)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends a payment request to a specified endpoint for a list of events.
     * @param events - An array containing event objects for which payment is requested.
     * @param headers - HTTP headers to be included in the request.
     * @param endpoint - The endpoint URL to which the payment request will be sent.
     * @returns A Promise that resolves to a RequestPaymentResponse object representing the response from the payment request.
     */
    LakshyaSDK.prototype.requestPayment = function (events, headers, endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, request_payment_1.default)(events, headers, endpoint)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LakshyaSDK;
}());
exports.default = LakshyaSDK;
