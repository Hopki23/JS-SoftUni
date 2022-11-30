import { html } from '../../node_modules/lit-html/lit-html.js'
import { createShoe } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`


export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit()));

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

        await createShoe({ brand, model, imageUrl, release, designer, value });
        ev.target.reset();
        ctx.page.redirect('/dashboard');

    }
}