import {LitElement, html, css } from "card-tools/src/lit-element";
import {subscribeRenderTemplate, hasTemplate} from "card-tools/src/templates";
import { bindActionHandler } from "card-tools/src/action";

const OPTIONS = [
  "name",
  "input_name",
  "icon",
  "state"
]

class ButtonEntityRow extends LitElement {

  static get properties() {
    return {
      hass: {},
      state: {},
    };
  }

  setConfig(config) {
    this._config = {...config};
    this.state = {...this._config};

    let entity_ids = this._config.entity_ids;
    if(!entity_ids && this._config.entity && !hasTemplate(this._config.entity))
      entity_ids = [this._config.entity];
    for(const k of OPTIONS) {
      if(this._config[k] && hasTemplate(this._config[k])) {
        subscribeRenderTemplate(null, (res) => {
          this.state[k] = res;
          this.requestUpdate();
        }, {
          template: this._config[k],
          variables: {config: this._config},
          entity_ids,
        });
      }
    }
  }

  render() {
    if (this.state.condition !== undefined && String(this.state.condition).toLowerCase() !== "true")
      return html``;

    const base = this.hass.states[this.state.entity];
    const entity = base && JSON.parse(JSON.stringify(base)) || {
      entity_id: "light.",
      attributes: {icon: "no:icon"},
    };

    const icon = this.state.icon !== undefined
      ? this.state.icon || "no:icon"
      : undefined;
    ;
    const image = this.state.image;
    const name = this.state.name !== undefined
      ? this.state.name
      : base ? base.attributes.friendly_name || base.entity_id : undefined
    ;
    const secondary = this.state.secondary;
    const state = this.state.state !== undefined
      ? this.state.state
      : entity ? entity.state : undefined
    ;
    const active = this.state.active !== undefined
      ? String(this.state.active).toLowerCase() === "true"
      : undefined
    ;

    if(active !== undefined) {
      entity.attributes.brightness = 255;
      entity.attributes.hs_color = this.state.color !== undefined && !hasTemplate(this.state.color)
      ? JSON.parse(this.state.color)
      : [0,0];
    }

    return html`
      <div id="wrapper">
        <state-badge
          .hass=${this.hass}
          .stateObj=${entity}
          style=${active !== undefined
              ? active
                ? "--paper-item-icon-color: var(--paper-item-icon-active-color, #fdd835);"
                : "--paper-item-icon-active-color: var(--paper-item-icon-color, #44739e);"
              : ""
          }
          .overrideIcon=${icon}
          .overrideImage=${image}
        ></state-badge>
        <div class="flex">
          <div
            class="info"
          >
            ${name}
            <div class="secondary">
              ${secondary}
            </div>
          </div>
          <div class="state">
          ${state}
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    const HuiGenericEntityRow = customElements.get('hui-generic-entity-row');
    let style = HuiGenericEntityRow.styles;
    style.cssText = style.cssText
      .replace(":host", "#wrapper")
      + `
      .state {
        text-align: right;
      }
      #wrapper {
        min-height: 40px;
      }
      `;
    return style;
  }
}

if(!customElements.get("button-entity-row")) {
  customElements.define("button-entity-row", ButtonEntityRow);
  const pjson = require('../package.json');
  console.info(`%cbutton-ENTITY-ROW ${pjson.version} IS INSTALLED`,
  "color: green; font-weight: bold",
  "");
}