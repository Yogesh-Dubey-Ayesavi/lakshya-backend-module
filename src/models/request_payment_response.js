"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the response object for a payment request.
 * @class RequestPaymentResponse
 */
var RequestPaymentResponse = /** @class */ (function () {
    /**
     * Creates an instance of RequestPaymentResponse.
     * @constructor
     * @param {RequestPaymentResponseInterface} rpri - Object containing payment response information.
     */
    function RequestPaymentResponse(rpri) {
        /**
         * List of events the user is already registered for.
         * @type {string[]}
         */
        this.already_registered_in = [];
        /**
         * List of event IDs for which the QR has been provided, and the user is registering for.
         * @type {string[]}
         */
        this.registering_for = [];
        // Assigning values from the provided object to class properties
        this.payment_links = rpri.payment_links;
        this.qr_codes = rpri.qr_codes;
        this.request_id = rpri.request_id;
        this.amount = rpri.amount;
        this.already_registered_in = rpri.already_registered_in || [];
        this.registering_for = rpri.registering_for || [];
    }
    return RequestPaymentResponse;
}());
exports.default = RequestPaymentResponse;
