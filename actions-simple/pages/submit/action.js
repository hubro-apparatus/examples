export default async ({ server, request, response }) => {
  // console.log('ACTION', request.body);
  response.headers.append('x-hubro', 'owl');
};