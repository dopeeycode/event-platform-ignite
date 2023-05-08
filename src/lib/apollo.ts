import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clhdz6at831st01t7fk4khn15/master',
  cache: new InMemoryCache()
})