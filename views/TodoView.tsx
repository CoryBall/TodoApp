import React, {useContext} from 'react';
import {Text} from 'react-native';
import {TodoList} from '../components/todoList';
import {StateContext} from '../store';
import {Maybe, TodoItem, useAllItemsQuery, Scalars, useEditTodoItemMutation, TodoItemInput, useDeleteTodoItemMutation} from '../generated/graphql';

interface TodoViewProps {}

export const TodoView: React.FC<TodoViewProps> = ({}) => {
  const {userEmail, isLoggedIn, isOnline} = useContext(StateContext);
  const [ editItem, {loading : editLoading, data: MutationData }] = useEditTodoItemMutation();
  const [ deleteItem, {loading : deleteLoading, data: DeleteData }] = useDeleteTodoItemMutation();

  const {data : QueryData} = useAllItemsQuery({pollInterval: 2000});
  const activeTodoDo = QueryData?.todoItems?.filter(
    (item: Maybe<TodoItem>) => !item?.isCompleted && !item?.isDeleted,
  );
  function markTodo (todoItem : TodoItem) {
    console.log(typeof todoItem);
    const editedItemObject = {...todoItem} as TodoItemInput;
    editedItemObject.isCompleted = true;

    console.log(typeof editedItemObject);
    editItem({variables : {editedItem : editedItemObject}});
  }

  function deleteTodo (itemId : Scalars['Uuid']) {
    deleteItem({variables: {id : itemId}});
  }

  return (
      <>
        <TodoList title="Todo" listData={activeTodoDo} complete={markTodo} delete={deleteTodo} variant='todo'/>
      </>
  );
};
