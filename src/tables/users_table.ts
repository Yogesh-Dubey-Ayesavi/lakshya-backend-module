/**
 * Represents a utility class for defining field names in a user-related database table.
 */
class UsersTable {
    /**
     * Represents the name of the "name" field in the user table.
     * This field typically stores the user's full name.
     */
    static nameField: string = "name";

    /**
     * Represents the name of the "avatar_url" field in the user table.
     * This field is used to store the URL of the user's profile picture or avatar.
     */
    static avatarUrl: string = "avatar_url";

    /**
     * Represents the name of the "sem" field in the user table.
     * This field might be used to store the user's semester or academic term information.
     */
    static sem: string = "sem";

    /**
     * Represents the name of the "email_id" field in the user table.
     * This field typically stores the user's email address.
     */
    static emailId: string = "email_id";

    /**
     * Represents the name of the "phone_number" field in the user table.
     * This field is used to store the user's phone number.
     */
    static phoneNumber: string = "phone_number";

    /**
     * Represents the name of the "id" field in the user table.
     * This field is often used as a unique identifier for each user.
     */
    static id: string = "id";

    /**
     * Represents the name of the "created_at" field in the user table.
     * This field is used to store the date and time when a user record was created.
     */
    static createdAt: string = "created_at";

    /** Table name of the users table  */
    static tableName:string = "users";
}

export default UsersTable;
