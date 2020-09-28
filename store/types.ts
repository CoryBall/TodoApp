// export interface TodoItem {
//     id: number,
//     title: string,
//     isComplete: boolean,
//     isDeleted: boolean,
//     createdOn: Date,
//     completedOn: Date | undefined,
//     deletedOn: Date | undefined
// }

interface AppError {
  name: string;
  description: string;
}

export interface globalState {
  userEmail: string | undefined;
  isLoggedIn: boolean;
  isOnline: boolean;
  setUserEmail?(email: string): void;
  setIsLoggedIn?(isLoggedIn: boolean): void;
  setIsOnline?(isLoggedIn: boolean): void;

  // todoList : TodoItem[]
  // error? : AppError | undefined
  // addTodoItem? (value : TodoItem) : void,
  // editTodoItem? (value : TodoItem) : void,
  // deleteTodoItem? (value : number) : void,
  // completeTodoItem? (value : number) : void,
}
