import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteShoe, getShoeById } from '../api/data.js';


const detailsTemplate = (shoe, isOwner, delShoe) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${isOwnerTemplate(shoe, isOwner, delShoe)}
    </div>
</section>
`

const isOwnerTemplate = (offer, isOwner, delShoe) => {
    if (isOwner) {
        return html`
            <div id="action-buttons">
                <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a @click=${delShoe} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
        `
    } else {
        null;
    }
}

export async function detailsPage(ctx) {
    const shoe = await getShoeById(ctx.params.id);

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == shoe._ownerId;

    ctx.render(detailsTemplate(shoe, isOwner, delShoe));

    async function delShoe() {
        const choice = confirm(`Are you sure you want to delete ${shoe.model}?`);

        if (choice) {
            await deleteShoe(ctx.params.id);
            ctx.page.redirect('/dashboard');
        }
    }
}