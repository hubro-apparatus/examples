import { html } from 'hubro/ssr';

export default (props = {}) => {
  return html`
    <h1>Hello world</h1>
    <p>Path: /${props?.slug}/</p>
  `;
};
