import UsersTable from "../../../tables/users_table";
import User from "../../../models/user";
import { errorHandler } from "../../../error_handler/error_handler";
import { SupabaseClient } from "@supabase/supabase-js";

/**
 * @deprecated
 * Update user information in the database.
 * @param {User} updatedUser - An instance of the User class with updated user data.
 * @returns {Promise<void>} - A Promise indicating the success or failure of the update operation.
 */
export default async function updateUser(
  updatedUser: User,
  supabase: SupabaseClient,
): Promise<void> {
  try {
    // Use Supabase client to update the user data in the database.
    await supabase
      .from(UsersTable.tableName)
      .update(updatedUser.toJSON())
      .eq(UsersTable.id, updatedUser.id);
  } catch (error) {
    // Handle any errors and throw them using the errorHandler function.
    throw errorHandler(error);
  }
}
