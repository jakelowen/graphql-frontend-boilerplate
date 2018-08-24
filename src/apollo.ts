import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  // eslint-disable-next-line no-console
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  credentials: "include",
  uri: process.env.REACT_APP_SERVER_URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null
    }
  };
});

const link = ApolloLink.from([authLink, errorLink, httpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
