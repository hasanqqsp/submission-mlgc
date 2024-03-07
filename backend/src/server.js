'use strict';

const Hapi = require('@hapi/hapi');
const {loadModel} = require('./services/inference');
const routes = require('./routes');

const init = async () => {
    // const model = await loadModel()
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.app.model = model
    server.route(routes)
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();