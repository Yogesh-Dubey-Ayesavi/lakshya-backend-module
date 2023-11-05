import EventUsersTable from "./event_users_table";
import EventsTable from "./events_table";

export default class Tables{
    static events : EventsTable = new EventsTable();
    static eventUsers : EventUsersTable = new EventUsersTable();
}