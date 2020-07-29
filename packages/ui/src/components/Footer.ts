import { FunctionalComponent } from "preact";
import { html } from 'htm/preact';

const Footer: FunctionalComponent = () => {
  return html`
    <div style="flex: 0; padding: 0 0.5em; border-top: 1px solid #EFF4F7; display: flex; justify-content: space-between;">
      <span class="is-size-7">
        ${'\u00A9'} 2020 PureStake
      </span>
      <span class="is-size-7">
        BETA
      </span>
      <span class="is-size-7">
        Not intended for production use!
      </span>
    </div>
  `;
};

export default Footer;