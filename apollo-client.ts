import { ApolloClient, InMemoryCache } from '@apollo/client';

// let client: ApolloClient<any> | null = null

export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
    },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  })
  return client
}