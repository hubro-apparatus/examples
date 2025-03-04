import { html } from '@lit-labs/ssr';

export const middleware = ({ server, request, response }) => {
  server.log.info('Reading value in page level middleware');

  return {
    port: server.config.serverPort,
    text: server.db.get('say'),
  }
};

export default ({ text, port } = {}) => {
  return html`
      <h1>Adapter says: ${text}</h1>
      <p>The port of this server is: ${port}</p>
  `;
};
