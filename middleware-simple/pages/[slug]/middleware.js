export const middleware = async (request, response) => {
    console.log('ROUTE LEVEL MIDDLEWARE');

    const { slug } = response.context;

    return {
      slug: `prefix-${slug}`,
    };
};