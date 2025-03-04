export const middleware = async ({ server, request, response }) => {
    server.log.info('Setting value in global level middleware');
    server.db.set('say', 'Hello world');
};