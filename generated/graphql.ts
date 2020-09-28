import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  Uuid: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type TodoItemQueries = {
  __typename?: 'TodoItemQueries';
  todoItem?: Maybe<TodoItem>;
  todoItems?: Maybe<Array<Maybe<TodoItem>>>;
};


export type TodoItemQueriesTodoItemArgs = {
  id: Scalars['Uuid'];
};


export type TodoItemQueriesTodoItemsArgs = {
  where?: Maybe<TodoItemFilter>;
};

export type TodoItemMutations = {
  __typename?: 'TodoItemMutations';
  addTodoItem?: Maybe<TodoItem>;
  deleteTodoItem: Scalars['Boolean'];
  editTodoItem?: Maybe<TodoItem>;
};


export type TodoItemMutationsAddTodoItemArgs = {
  title: Scalars['String'];
};


export type TodoItemMutationsDeleteTodoItemArgs = {
  id: Scalars['Uuid'];
};


export type TodoItemMutationsEditTodoItemArgs = {
  editedItem: TodoItemInput;
};


export type TodoItemFilter = {
  AND?: Maybe<Array<TodoItemFilter>>;
  completedOn?: Maybe<Scalars['DateTime']>;
  completedOn_gt?: Maybe<Scalars['DateTime']>;
  completedOn_gte?: Maybe<Scalars['DateTime']>;
  completedOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  completedOn_lt?: Maybe<Scalars['DateTime']>;
  completedOn_lte?: Maybe<Scalars['DateTime']>;
  completedOn_not?: Maybe<Scalars['DateTime']>;
  completedOn_not_gt?: Maybe<Scalars['DateTime']>;
  completedOn_not_gte?: Maybe<Scalars['DateTime']>;
  completedOn_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  completedOn_not_lt?: Maybe<Scalars['DateTime']>;
  completedOn_not_lte?: Maybe<Scalars['DateTime']>;
  createdOn?: Maybe<Scalars['DateTime']>;
  createdOn_gt?: Maybe<Scalars['DateTime']>;
  createdOn_gte?: Maybe<Scalars['DateTime']>;
  createdOn_in?: Maybe<Array<Scalars['DateTime']>>;
  createdOn_lt?: Maybe<Scalars['DateTime']>;
  createdOn_lte?: Maybe<Scalars['DateTime']>;
  createdOn_not?: Maybe<Scalars['DateTime']>;
  createdOn_not_gt?: Maybe<Scalars['DateTime']>;
  createdOn_not_gte?: Maybe<Scalars['DateTime']>;
  createdOn_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdOn_not_lt?: Maybe<Scalars['DateTime']>;
  createdOn_not_lte?: Maybe<Scalars['DateTime']>;
  deletedOn?: Maybe<Scalars['DateTime']>;
  deletedOn_gt?: Maybe<Scalars['DateTime']>;
  deletedOn_gte?: Maybe<Scalars['DateTime']>;
  deletedOn_in?: Maybe<Array<Scalars['DateTime']>>;
  deletedOn_lt?: Maybe<Scalars['DateTime']>;
  deletedOn_lte?: Maybe<Scalars['DateTime']>;
  deletedOn_not?: Maybe<Scalars['DateTime']>;
  deletedOn_not_gt?: Maybe<Scalars['DateTime']>;
  deletedOn_not_gte?: Maybe<Scalars['DateTime']>;
  deletedOn_not_in?: Maybe<Array<Scalars['DateTime']>>;
  deletedOn_not_lt?: Maybe<Scalars['DateTime']>;
  deletedOn_not_lte?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Uuid']>;
  id_gt?: Maybe<Scalars['Uuid']>;
  id_gte?: Maybe<Scalars['Uuid']>;
  id_in?: Maybe<Array<Scalars['Uuid']>>;
  id_lt?: Maybe<Scalars['Uuid']>;
  id_lte?: Maybe<Scalars['Uuid']>;
  id_not?: Maybe<Scalars['Uuid']>;
  id_not_gt?: Maybe<Scalars['Uuid']>;
  id_not_gte?: Maybe<Scalars['Uuid']>;
  id_not_in?: Maybe<Array<Scalars['Uuid']>>;
  id_not_lt?: Maybe<Scalars['Uuid']>;
  id_not_lte?: Maybe<Scalars['Uuid']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  isCompleted_not?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isDeleted_not?: Maybe<Scalars['Boolean']>;
  modifiedOn?: Maybe<Scalars['DateTime']>;
  modifiedOn_gt?: Maybe<Scalars['DateTime']>;
  modifiedOn_gte?: Maybe<Scalars['DateTime']>;
  modifiedOn_in?: Maybe<Array<Scalars['DateTime']>>;
  modifiedOn_lt?: Maybe<Scalars['DateTime']>;
  modifiedOn_lte?: Maybe<Scalars['DateTime']>;
  modifiedOn_not?: Maybe<Scalars['DateTime']>;
  modifiedOn_not_gt?: Maybe<Scalars['DateTime']>;
  modifiedOn_not_gte?: Maybe<Scalars['DateTime']>;
  modifiedOn_not_in?: Maybe<Array<Scalars['DateTime']>>;
  modifiedOn_not_lt?: Maybe<Scalars['DateTime']>;
  modifiedOn_not_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<TodoItemFilter>>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  completedOn?: Maybe<Scalars['DateTime']>;
  createdOn: Scalars['DateTime'];
  deletedOn: Scalars['DateTime'];
  id: Scalars['Uuid'];
  isCompleted: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  modifiedOn: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
};


export type TodoItemInput = {
  completedOn?: Maybe<Scalars['DateTime']>;
  createdOn: Scalars['DateTime'];
  deletedOn: Scalars['DateTime'];
  id: Scalars['Uuid'];
  isCompleted: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  modifiedOn: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
};


export type CreateTodoItemMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoItemMutation = (
  { __typename?: 'TodoItemMutations' }
  & { addTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'createdOn' | 'modifiedOn' | 'isCompleted' | 'completedOn'>
  )> }
);

export type AllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllItemsQuery = (
  { __typename?: 'TodoItemQueries' }
  & { todoItems?: Maybe<Array<Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'createdOn' | 'modifiedOn' | 'isCompleted' | 'completedOn'>
  )>>> }
);

export type DeleteTodoItemMutationVariables = Exact<{
  id: Scalars['Uuid'];
}>;


export type DeleteTodoItemMutation = (
  { __typename?: 'TodoItemMutations' }
  & Pick<TodoItemMutations, 'deleteTodoItem'>
);

export type EditTodoItemMutationVariables = Exact<{
  editedItem: TodoItemInput;
}>;


export type EditTodoItemMutation = (
  { __typename?: 'TodoItemMutations' }
  & { editTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'createdOn' | 'modifiedOn' | 'isCompleted' | 'completedOn'>
  )> }
);


export const CreateTodoItemDocument = gql`
    mutation CreateTodoItem($title: String!) {
  addTodoItem(title: $title) {
    id
    title
    createdOn
    modifiedOn
    isCompleted
    completedOn
  }
}
    `;
export type CreateTodoItemMutationFn = Apollo.MutationFunction<CreateTodoItemMutation, CreateTodoItemMutationVariables>;

/**
 * __useCreateTodoItemMutation__
 *
 * To run a mutation, you first call `useCreateTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoItemMutation, { data, loading, error }] = useCreateTodoItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>) {
        return Apollo.useMutation<CreateTodoItemMutation, CreateTodoItemMutationVariables>(CreateTodoItemDocument, baseOptions);
      }
export type CreateTodoItemMutationHookResult = ReturnType<typeof useCreateTodoItemMutation>;
export type CreateTodoItemMutationResult = Apollo.MutationResult<CreateTodoItemMutation>;
export type CreateTodoItemMutationOptions = Apollo.BaseMutationOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>;
export const AllItemsDocument = gql`
    query allItems {
  todoItems {
    id
    title
    createdOn
    modifiedOn
    isCompleted
    completedOn
  }
}
    `;

/**
 * __useAllItemsQuery__
 *
 * To run a query within a React component, call `useAllItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllItemsQuery(baseOptions?: Apollo.QueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
        return Apollo.useQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
      }
export function useAllItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllItemsQuery, AllItemsQueryVariables>) {
          return Apollo.useLazyQuery<AllItemsQuery, AllItemsQueryVariables>(AllItemsDocument, baseOptions);
        }
export type AllItemsQueryHookResult = ReturnType<typeof useAllItemsQuery>;
export type AllItemsLazyQueryHookResult = ReturnType<typeof useAllItemsLazyQuery>;
export type AllItemsQueryResult = Apollo.QueryResult<AllItemsQuery, AllItemsQueryVariables>;
export const DeleteTodoItemDocument = gql`
    mutation DeleteTodoItem($id: Uuid!) {
  deleteTodoItem(id: $id)
}
    `;
export type DeleteTodoItemMutationFn = Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;

/**
 * __useDeleteTodoItemMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemMutation, { data, loading, error }] = useDeleteTodoItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>) {
        return Apollo.useMutation<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>(DeleteTodoItemDocument, baseOptions);
      }
export type DeleteTodoItemMutationHookResult = ReturnType<typeof useDeleteTodoItemMutation>;
export type DeleteTodoItemMutationResult = Apollo.MutationResult<DeleteTodoItemMutation>;
export type DeleteTodoItemMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
export const EditTodoItemDocument = gql`
    mutation EditTodoItem($editedItem: TodoItemInput!) {
  editTodoItem(editedItem: $editedItem) {
    id
    title
    createdOn
    modifiedOn
    isCompleted
    completedOn
  }
}
    `;
export type EditTodoItemMutationFn = Apollo.MutationFunction<EditTodoItemMutation, EditTodoItemMutationVariables>;

/**
 * __useEditTodoItemMutation__
 *
 * To run a mutation, you first call `useEditTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoItemMutation, { data, loading, error }] = useEditTodoItemMutation({
 *   variables: {
 *      editedItem: // value for 'editedItem'
 *   },
 * });
 */
export function useEditTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<EditTodoItemMutation, EditTodoItemMutationVariables>) {
        return Apollo.useMutation<EditTodoItemMutation, EditTodoItemMutationVariables>(EditTodoItemDocument, baseOptions);
      }
export type EditTodoItemMutationHookResult = ReturnType<typeof useEditTodoItemMutation>;
export type EditTodoItemMutationResult = Apollo.MutationResult<EditTodoItemMutation>;
export type EditTodoItemMutationOptions = Apollo.BaseMutationOptions<EditTodoItemMutation, EditTodoItemMutationVariables>;