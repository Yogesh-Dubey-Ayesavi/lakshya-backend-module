import { PostgrestError } from "@supabase/supabase-js";

export function errorHandler(error: any): Error {
  console.error(error);
  return Error(error?.message ?? "An error occured");
}
