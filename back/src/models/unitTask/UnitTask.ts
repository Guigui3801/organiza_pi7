import { toDoList } from "../toDoList/ToDoList";
import { User } from "../user/User";

interface UnitTask {
    id:         string;
    name:       string;
    created_at: Date;
    updated_at: Date;
    deleted_at?:Date;
    reference:  toDoList;
    referenceId:string;
    completed:  boolean;
    postponed:  boolean;
    forgot:     boolean;
    abandonned: boolean;
    forbidden:  boolean;
  }
  
  export { UnitTask };