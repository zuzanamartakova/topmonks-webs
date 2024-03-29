import { html } from "https://unpkg.com/lit-html@1.1.1/lit-html.js?module";

export function installationGuide() {
  return html`
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <h3>Hlídač shopů pro mobilní zařízení Android</h3>
      <p>
        Rozšíření Hlídač shopů funguje zatím pouze ve
        <a
          href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&amp;hl=cs"
          >Firefoxu pro Android</a
        >.
      </p>
    </div>
  `;
}
