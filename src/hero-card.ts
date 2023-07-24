import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import 'lit-icon';
import 'lit-icon/pkg/dist-src/lit-icon.js';




@customElement('hero-card')
export class HeroCard extends LitElement {

  // @property() name = ''
  // @property() header = 'Hello'
  // @property() subHeader = 'My name is:'
  // @property({type:Boolean, attribute:'has-logo'}) hasLogo = false;

  @property() heroName = ''
  @property() imgSrc = '/melissa.png'
  @property({type:Boolean,attribute:'is-fave'}) isFavorite = false;



render() {
  return html `
   <div class='container'>
    <div class='img-wrapper'>
      <img class='hero-img' src=${this.imgSrc}/>
   
    </div>
    <div class='hero-name-is-fave'>
      <p>${this.heroName}</p>
      ${this.isFavorite ? html`<img class='fave' src='/star-fave.svg'/>` :html`<img class='not-fave' src='/star-outline.svg'/>`}
    <!-- ${this.isFavorite ? html`<p>Favorite</p>`:'NULL'} -->
    </div>
   </div>
  `
}

static styles = css`
:host {
  display:flex;
  flex-direction:column;
  width:260px;
  height:300px;
  border:1px solid var(--gen-color);
  border-radius:0.8rem;
  overflow:hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* position:relative; */

}

.img-wrapper{
  width:100%;
  height:100%;
  position:relative;


}
.hero-img {
  position:absolute;
  width:100%;
  height:100%;
  object-fit:cover;
}


.hero-name-is-fave{
  padding:0 0.5rem;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:23%;
  
  /* background-color:#283747; */


}
.fave, .not-fave{
  padding:0.8rem;
}

p{
 margin-top:1rem;
  font-weight:700;
  font-size:1.3rem;
  color:var(--primary-text-color);
}

`
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-card': HeroCard
  }
}
