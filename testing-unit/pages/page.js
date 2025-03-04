import { html } from 'hubro/ssr';

import button from '#components/button.js';

export const metadata = () => {
  return {
    title: 'A page title',
  };
};

export default () => {
  return html`
    <h1>Hello World</h1>
    <w-button></w-button>
  `;
};
