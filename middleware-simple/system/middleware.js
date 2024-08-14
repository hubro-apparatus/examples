export const middleware = async (request, response) => {
  console.log('GLOBAL LEVEL MIDDLEWARE');
    const { slug } = request.urlParams;

    response.status = 200;

    return {
      slug,
    };
};