export const middleware = async ({ request, response }) => {
    console.log('ROUTE LEVEL MIDDLEWARE');
    console.log(response);

    const { slug } = response.context;

    console.log(slug);

    return {
      slug: `prefix-${slug}`,
    };
};