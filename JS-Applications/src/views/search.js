import { html } from '../../node_modules/lit-html/lit-html.js'
import { searchShoe } from '../api/data.js';


const searchTemplate = (onSubmit, shoes) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSubmit} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${shoes.length > 0
        ? html`${shoes.map(shoeTemplate)}`
        : html`<h2>There are no results found.</h2>`}
    </div>
</section>
`
const shoeTemplate = (shoe, user) => html`
<ul class="card-wrapper">
    <li class="card">
        <img src=${shoe.imageUrl} alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        ${user}

    </li>
</ul>
`

export function searchPage(ctx) {
    const user = JSON.parse(localStorage.getItem('user'));
    debugger;
    if(user){
        html`<a class="details-btn" href="/details/${ctx.params.id}">Details</a>`
   }else{
       null
   }

    ctx.render(searchTemplate(onSubmit, [], user));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const search = formData.get('search');
        const shoes = await searchShoe(search);

        ctx.render(searchTemplate(onSubmit, shoes));
    }
}
