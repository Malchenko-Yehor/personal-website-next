import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  cache: new InMemoryCache()
});

const queryApi = async (queryString: string) => {
  try {
    const { data } = await apolloClient.query({
      query: gql`${queryString}`
    });

    return data;
  } catch {
    console.log('\x1b[31m', `There is an error in query: ${queryString}`);
  }
};

export default queryApi;