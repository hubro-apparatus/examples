import { html } from 'lit';



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
