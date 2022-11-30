import { html } from '../../node_modules/lit-html/lit-html.js'
import { editPet, getById } from '../api/data.js';

const editTemplate = (onSubmit, pet) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`
export async function editPage(ctx) {
    const pet = await getById(ctx.params.id);
    ctx.render(editTemplate(onSubmit, pet));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const name = formData.get('name');
        const breed = formData.get('breed');
        const age = formData.get('age');
        const weight = formData.get('weight');
        const image = formData.get('image');

        if (!name || !breed || !age || !weight || !image) return alert("All fields must be filled!");

        await editPet(ctx.params.id, { name, breed, age, weight, image });
        ev.target.reset();
        ctx.page.redirect(`/details/${pet._id}`);
    }
}