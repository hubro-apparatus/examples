import { html } from 'lit';

export default (props = {}) => {
  
  console.log(props.context.slug)
  return html`
    <h1>Hello world</h1>
    <p>Path: /${props?.slug}/</p>
  `;
};
