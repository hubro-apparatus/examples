import { html } from 'lit';
import alpacaMap from '@purplebugs/alpaca-map';


export const metadata = () => {
  return {
    title: 'A page title',
  };
};

export default (props = {}) => {
  return html`
    <h1>Hello world</h1>
  `;
};
