import { html } from '@lit-labs/ssr';

import layout from '#layouts/layout.js';

import button from '#components/button.js';
import card from '#components/card.js';

export const metadata = () => {
  return {
    title: 'A page title',
  };
};

export const middleware = ({ server, request, response }) => {
  return {
    random: Math.random(),
  }
};

export default (context = {}) => {
  return html`
    <k-layout>
      <h1 slot="header">Simple Header </h1>

      <p>Hello from my template.</p>
      <w-card>
        <span slot="header">Slotted Header</span>
        Slotted content
        <span slot="footer">Slotted Footer</span>
      </w-card>

      <w-card>
        <w-button></w-button>
      </w-card>

      <p slot="footer">Footer</p>
    </k-layout>
  `;
};
