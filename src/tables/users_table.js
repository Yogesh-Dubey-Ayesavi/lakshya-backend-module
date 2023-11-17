"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a utility class for defining field names in a user-related database table.
 */
var UsersTable = /** @class */ (function () {
    function UsersTable() {
    }
    /**
     * Represents the name of the "name" field in the user table.
     * This field typically stores the user's full name.
     */
    UsersTable.nameField = "name";
    /**
     * Represents the name of the "avatar_url" field in the user table.
     * This field is used to store the URL of the user's profile picture or avatar.
     */
    UsersTable.avatarUrl = "avatar_url";
    /**
     * Represents the name of the "sem" field in the user table.
     * This field might be used to store the user's semester or academic term information.
     */
    UsersTable.sem = "sem";
    /**
     * Represents the name of the "email_id" field in the user table.
     * This field typically stores the user's email address.
     */
    UsersTable.emailId = "email_id";
    /**
     * Represents the name of the "phone_number" field in the user table.
     * This field is used to store the user's phone number.
     */
    UsersTable.phoneNumber = "phone_number";
    /**
     * Represents the name of the "id" field in the user table.
     * This field is often used as a unique identifier for each user.
     */
    UsersTable.id = "id";
    /**
     * Represents the name of the "created_at" field in the user table.
     * This field is used to store the date and time when a user record was created.
     */
    UsersTable.createdAt = "created_at";
    /** Table name of the users table  */
    UsersTable.tableName = "users";
    return UsersTable;
}());
exports.default = UsersTable;
