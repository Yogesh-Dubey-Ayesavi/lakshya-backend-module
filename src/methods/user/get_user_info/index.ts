import UsersTable from "../../../tables/users_table";
import { errorHandler } from "../../../error_handler/error_handler";
import User from "../../../models/user";
import { SupabaseClient } from "@supabase/supabase-js";

/**
 * Retrieve user information from the database by user ID.
 * @param {string} userId - The unique identifier of the userw.
 * @returns {Promise<User>} - A Promise that resolves with a User object containing the retrieved user data.
 */
export default async function getUserInfo(userId: string,supabase :SupabaseClient): Promise<User> {
    try {
        // Use Supabase client to retrieve user data from the database.
        let { data, error } = await supabase
            .from(UsersTable.tableName)
            .select()
            .eq(UsersTable.id, userId)
            .single();

        
        
        if (error){
            throw error ; // Throw an error if data is not found.
        }

        return User.fromJSON(data);

        
    } catch (error) {
        // Handle any errors and throw them using the errorHandler function.
        throw errorHandler(error);
    }
}
