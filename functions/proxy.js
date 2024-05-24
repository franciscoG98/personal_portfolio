// exports.handler = async (event) => {
//   const API_URL = 'https://api.hashnode.com/';
//   const TOKEN = import.meta.env.VITE_HASHNODE_AUTH_TOKEN;

//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${TOKEN}`,
//       },
//       body: event.body,
//     });

//     if (!response.ok) {
//       return {
//         statusCode: response.status,
//         body: JSON.stringify({ error: `Failed to fetch data: ${response.statusText}` }),
//       };
//     }

//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: `Internal Server Error: ${error.message}` }),
//     };
//   }
// };
