import { html } from '../../node_modules/lit-html/lit-html.js'
import { editShoe, getShoeById } from '../api/data.js';


const editTemplate = (onSubmit, shoe) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoe.brand} >
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoe.model}>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoe.imageUrl}/>
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoe.release}>
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoe.designer}>
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoe.value}>

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

export async function editPage(ctx) {
    const shoe = await getShoeById(ctx.params.id);
    ctx.render(editTemplate(onSubmit, shoe));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const brand = formData.get('brand').trim();
        const model = formData.get('model').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const release = formData.get('release').trim();
        const designer = formData.get('designer').trim();
        const value = formData.get('value').trim();

        if (!brand || !model || !imageUrl || !release || !designer || !value) {
            return alert('All fields must be filled!');
        }

        await editShoe(ctx.params.id, { brand, model, imageUrl, release, designer, value });
        ev.target.reset();
        ctx.page.redirect(`/details/${shoe._id}`);
    }
}
