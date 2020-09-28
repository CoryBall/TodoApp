import React from 'react';
import {ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider} from "@apollo/client";
import QueueLink from "apollo-link-queue";
import SerializingLink from "apollo-link-serialize";
import {RetryLink} from "apollo-link-retry";
import {TodoItem} from "../../generated/graphql";


const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies: {
            TodoItemQueries: {
                fields: {
                    TodoItems: {
                        merge: true,
                    }
                }
            }
        }
    }),
    link: ApolloLink.from([
        new QueueLink(),
        // @ts-ignore
        new SerializingLink(),
        // @ts-ignore
        new RetryLink(),
        new HttpLink({uri: 'http://localhost:5000/graphql'})
    ]),
});

export const ApolloHOC: React.FC = ({children}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
