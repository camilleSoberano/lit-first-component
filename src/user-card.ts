import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'



@customElement('user-card')
export class UserCard extends LitElement {

  @property() name = ''
  @property() header = 'Hello'
  @property() subHeader = 'My name is:'
  @property({type:Boolean, attribute:'has-logo'}) hasLogo = false;

  render() {
    return html`
    <header>
      <h1>${this.header}</h1>
      <h2>${this.subHeader}</h2>
    </header>
    ${this.hasLogo ? html`<slot name='logo' part="logo-bg"></slot>` :''}
    <!-- <slot></slot> -->
    <main>
      <span>${this.name}</span>
    </main>
    `

}

static styles = css`
:host {
  display:flex;
  flex-direction:column;
  width:500px;
  height:300px;
  border:1px solid var(--primary-color);
  border-radius:32px;
  overflow:hidden;
  position:relative;

}
slot {
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      background-color: var(--primary-text-color, white);
      border-radius: 50%;
      inset-block-start: 16px;
      inset-inline-start: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    ::slotted(*) {
      width: 62.5%;
      height: 62.5%;
    }

    header {
      background-color: var(--primary-color, #324fff);
      color: var(--on-primary-color, white);
      padding: 16px;
      text-align: center;
      text-transform: uppercase;
      font-family: sans-serif;
      letter-spacing: 4px;
    }

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 3em;
    }

    h2 {
      margin-block-start: 8px;
      font-weight: normal;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      color: var(--primary-color, black);
    }

    span {
      font-size: 6em;
      font-family: 'Permanent Marker', cursive;
      text-align: center;
      text-transform: uppercase;
      font-weight:700;
    }
`
}

declare global {
  interface HTMLElementTagNameMap {
    'user-card': UserCard
  }
}
