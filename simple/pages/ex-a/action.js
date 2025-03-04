export default async ({ server, request, response }) => {
  console.log('BODY', request.body);
  response.headers.append('x-hubro', 'owl');
};
