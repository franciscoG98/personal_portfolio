const publicationQuery = `
  query Publication {
    publication(host: "franciscog98.hashnode.dev") {
      posts(first: 4) {
        edges {
          node {
            title
            id
            url
            brief
            updatedAt
            coverImage {
              url
            }
          }
        }
        totalDocuments
      }
    }
  }
`;

const hashnodeHandler = async () => {

  try {
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: publicationQuery,
      }),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: result,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data' }),
    };
  }
};

export { hashnodeHandler as default };
