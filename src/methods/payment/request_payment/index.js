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
var request_payment_response_1 = require("../../../models/request_payment_response");
var error_handler_1 = require("../../../error_handler/error_handler");
var axios_1 = require("axios");
var blobUtil = require("blob-util");
/**
 * Sends a payment request to a specified endpoint for a list of events.
 *
 * @param events - An array containing event objects for which payment is requested.
 * @param headers - HTTP headers to be included in the request.
 * @param endpoint - The endpoint URL to which the payment request will be sent.
 * @returns A Promise that resolves to a RequestPaymentResponse object representing the response from the payment request.
 */
function requestPayment(events, headers, endpoint) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __awaiter(this, void 0, void 0, function () {
        var idsList, response, qrCodes, error_1;
        var _this = this;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 5, , 6]);
                    idsList = events.map(function (e) { return e.id; });
                    return [4 /*yield*/, axios_1.default.post(endpoint, { event_ids: idsList }, { headers: headers })];
                case 1:
                    response = _k.sent();
                    if (!(response.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all((_a = response.data) === null || _a === void 0 ? void 0 : _a.qr_codes.map(function (e) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, blobUtil.base64StringToBlob(e, 'image/png')];
                        }); }); }))];
                case 2:
                    qrCodes = (_b = _k.sent()) !== null && _b !== void 0 ? _b : [];
                    // Constructs a RequestPaymentResponse object.
                    return [2 /*return*/, new request_payment_response_1.default({
                            payment_links: (_d = (_c = response.data) === null || _c === void 0 ? void 0 : _c.payment_links) !== null && _d !== void 0 ? _d : [],
                            qr_codes: qrCodes,
                            request_id: (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.request_id) !== null && _f !== void 0 ? _f : "",
                            amount: (_g = response.data) === null || _g === void 0 ? void 0 : _g.amount,
                            already_registered_in: (_h = response.data) === null || _h === void 0 ? void 0 : _h.already_registered_in,
                            registering_for: (_j = response.data) === null || _j === void 0 ? void 0 : _j.registering_for,
                        })];
                case 3: 
                // If the response status is not 200, an error is thrown with the response data.
                throw { message: response.data };
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _k.sent();
                    // Any errors that occur during the process are caught and handled using the errorHandler function.
                    throw (0, error_handler_1.errorHandler)(error_1);
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.default = requestPayment;
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
