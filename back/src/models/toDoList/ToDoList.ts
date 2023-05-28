import { UnitTask } from "../unitTask/UnitTask";
import { User } from "../user/User";

interface toDoList {
    id: string;
    name:string;
    owner:User;
    referenceId: string | null;
    UnitTasks:UnitTask[];
    created_at:Date;
    updated_at:Date;
    deleted_at?:Date;
}
  
  export { toDoList,
    UnitTask,}