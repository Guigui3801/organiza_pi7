import { Board } from "../board/Board";

interface Task {
    id: string;
    name:        string;
    completed:   Boolean;
    due_to?:      Date;
    reference:   Board;
    referenceId: string;
    created_at:  Date;
    updated_at: Date;
    deleted_at?: Date;
  }
  
  export { Task };
  