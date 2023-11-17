"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(error) {
    var _a;
    console.error(error);
    return Error((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "An error occured");
}
exports.errorHandler = errorHandler;
