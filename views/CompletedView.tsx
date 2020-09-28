import React, {useContext} from 'react';
import {StateContext} from '../store';
import {TodoList} from '../components/todoList';
import {Maybe, TodoItem, useAllItemsQuery} from '../generated/graphql';

interface CompletedViewProps {}

export const CompletedView: React.FC<CompletedViewProps> = ({}) => {
  const {userEmail, isLoggedIn, isOnline} = useContext(StateContext);
  const {data} = useAllItemsQuery({pollInterval: 2000});

  const completedTodoDo = data?.todoItems?.filter(
    (item: Maybe<TodoItem>) => item?.isCompleted && !item?.isDeleted,
  );

  return <TodoList title="Completed" listData={completedTodoDo} variant='complete'/>;
};
