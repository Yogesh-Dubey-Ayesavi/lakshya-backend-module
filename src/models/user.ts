class User {
  id: string;
  created_at: string;
  phone_number: string | null;
  email_id: string | null;
  sem: number | null;
  avatar_url: string | null;
  name: string | null;

  constructor(ui: UserInterface) {
    this.id = ui.id;
    this.created_at = ui.created_at;
    this.phone_number = ui.phone_number;
    this.email_id = ui.email_id;
    this.sem = ui.sem;
    this.avatar_url = ui.avatar_url;
    this.name = ui.name;
  }

  // Convert a JSON object to a User instance
  static fromJSON(json: any): User {
    return new User({
      id: json.id,
      created_at: json.created_at,
      phone_number: json.phone_number,
      email_id: json.email_id,
      sem: json.sem,
      avatar_url: json.avatar_url,
      name: json.name,
    });
  }

  // Convert a User instance to a JSON object
  toJSON(): UserInterface {
    return {
      id: this.id,
      created_at: this.created_at,
      phone_number: this.phone_number,
      email_id: this.email_id,
      sem: this.sem,
      avatar_url: this.avatar_url,
      name: this.name,
    };
  }
}

/**
 * UserInterface
 *
 * Defines the structure of user data in the [User].
 */
export interface UserInterface {
  /**
   * A unique identifier for the user.
   */
  id: string;

  /**
   * The date and time when the user was created, represented as a string.
   */
  created_at: string;

  /**
   * The user's phone number, which can be either a valid string or `null` if not provided.
   */
  phone_number: string | null;

  /**
   * The user's email address, which can be either a valid string or `null` if not provided.
   */
  email_id: string | null;

  /**
   * The user's semester or academic level, represented as a number or `null` if not applicable.
   */
  sem: number | null;

  /**
   * The URL to the user's avatar image, which can be either a valid string or `null` if not provided.
   */
  avatar_url: string | null;

  /**
   * The user's name, which can be either a valid string or `null` if not provided.
   */
  name: string | null;
}

export default User;
