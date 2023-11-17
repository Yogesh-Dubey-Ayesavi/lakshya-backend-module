/**
 * Represents the response object for a payment request.
 * @class RequestPaymentResponse
 */
export default class RequestPaymentResponse {
  /**
   * Array of payment links associated with the payment request.
   * @type {string[]|[]}
   */
  payment_links: string[] | [];

  /**
   * Array of QR codes associated with the payment request.
   * @type {Blob[]|[]}
   */
  qr_codes: Blob[] | [];

  /**
   * Unique identifier for the payment request.
   * @type {string}
   */
  request_id: string;

  /**
   * Amount associated with the payment request.
   * @type {number}
   */
  amount: number;

  /**
   * List of events the user is already registered for.
   * @type {string[]}
   */
  already_registered_in: string[] = [];

  /**
   * List of event IDs for which the QR has been provided, and the user is registering for.
   * @type {string[]}
   */
  registering_for: string[] = [];

  /**
   * Creates an instance of RequestPaymentResponse.
   * @constructor
   * @param {RequestPaymentResponseInterface} rpri - Object containing payment response information.
   */
  constructor(rpri: RequestPaymentResponseInterface) {
    // Assigning values from the provided object to class properties
    this.payment_links = rpri.payment_links;
    this.qr_codes = rpri.qr_codes;
    this.request_id = rpri.request_id;
    this.amount = rpri.amount;
    this.already_registered_in = rpri.already_registered_in || [];
    this.registering_for = rpri.registering_for || [];
  }
}

/**
 * Interface representing the response object for a payment request.
 * @interface RequestPaymentResponseInterface
 */
export interface RequestPaymentResponseInterface {
  /**
   * Array of payment links associated with the payment request.
   * @type {string[]}
   */
  payment_links: string[];

  /**
   * Array of QR codes associated with the payment request.
   * @type {Blob[]}
   */
  qr_codes: Blob[];

  /**
   * Unique identifier for the payment request.
   * @type {string}
   */
  request_id: string;

  /**
   * Amount associated with the payment request.
   * @type {number}
   */
  amount: number;

  /**
   * List of events the user is already registered for.
   * @type {string[]}
   */
  already_registered_in?: string[];

  /**
   * List of event IDs for which the QR has been provided, and the user is registering for.
   * @type {string[]}
   */
  registering_for?: string[];
}
