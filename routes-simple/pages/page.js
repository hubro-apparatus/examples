import { html } from 'hubro/ssr';

export const metadata = () => {
  return {
    title: 'A page title',
  };
};

export default (props = {}) => {
  return html`
    <h1>Hello form</h1>
    <form action="/submit" method="POST">
      <input name="firstName">
      <button>Submit</button>
    </form>
  `;
};
