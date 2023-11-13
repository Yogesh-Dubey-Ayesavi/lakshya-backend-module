/**
 * Represents the response object for a payment request.
 * @class RequestPaymentResponse
 */
class RequestPaymentResponse {
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
}

export default RequestPaymentResponse;
