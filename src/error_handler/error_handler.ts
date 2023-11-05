import { PostgrestError } from '@supabase/supabase-js';

export function errorHandler(error: any):Error {
  return Error(error?.message ?? "An error occured");
}
