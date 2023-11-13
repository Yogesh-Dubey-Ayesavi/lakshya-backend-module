import { SupabaseClient } from "@supabase/supabase-js";
import LakshyaEvent from "../../../models/event_model";
import RequestPaymentResponse from "../../../models/request_payment_response";
import { errorHandler } from "../../../error_handler/error_handler";
import axios, { AxiosResponse, AxiosError } from 'axios';
import * as blobUtil from 'blob-util';

/**
 * Sends a payment request to a specified endpoint for a list of events.
 *
 * @param events - An array containing event objects for which payment is requested.
 * @param headers - HTTP headers to be included in the request.
 * @param endpoint - The endpoint URL to which the payment request will be sent.
 * @returns A Promise that resolves to a RequestPaymentResponse object representing the response from the payment request.
 */
async function requestPayment(
  events: LakshyaEvent[],
  headers: any,
  endpoint: string
): Promise<RequestPaymentResponse> {
  try {
    // Extracts event IDs from the provided list of events.
    let idsList = events.map((e) => e.id);

    // Sends a POST request to the specified endpoint with the event IDs and headers.
    let response = await axios.post(endpoint, { event_ids: idsList }, { headers: headers });

    // Processes the response
    if (response.status === 200) {
      // Converts base64-encoded QR codes to Blobs using blobUtil.
      const qrCodes = await Promise.all(response.data?.qr_codes.map(async (e: string) => blobUtil.base64StringToBlob(e, 'image/png'))) ?? [];

      // Constructs a RequestPaymentResponse object.
      return new RequestPaymentResponse({
        payment_links: response.data?.payment_links ?? [],
        qr_codes: qrCodes,
        request_id: response.data?.request_id ?? "",
        amount:response.data?.amount,
      });
    } else {
      // If the response status is not 200, an error is thrown with the response data.
      throw { message: response.data };
    }
  } catch (error) {
    // Any errors that occur during the process are caught and handled using the errorHandler function.
    throw errorHandler(error);
  }
}

export default requestPayment;

/**
 * Example Usage:
 *
 * const events = [...]; // An array of LakshyaEvent objects
 * const headers = {...}; // HTTP headers
 * const endpoint = 'https://example.com/payment';
 *
 * try {
 *   const paymentResponse = await requestPayment(events, headers, endpoint);
 *   console.log(paymentResponse);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
