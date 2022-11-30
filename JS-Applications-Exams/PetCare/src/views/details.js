import { html } from '../../node_modules/lit-html/lit-html.js'
import { deletePet, getById } from '../api/data.js';

const detailsTemplate = (pet, isOwner, delPet) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="./images/Shiba-Inu.png">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${isOwnerTemplate(pet, isOwner, delPet)}
        </div>
    </div>
</section>
`
const isOwnerTemplate = (pet, isOwner, delPet) => {
    if (isOwner) {
        return html`
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a @click=${delPet} href="javascript:void(0)" class="remove">Delete</a>
            </div>
        `
    } else {
        return null;
    }
}

// <!--(Bonus Part) Only for no creator and user-->
// <a href="#" class="donate">Donate</a>

export async function detailsPage(ctx) {
    const pet = await getById(ctx.params.id);

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == pet._ownerId;

    ctx.render(detailsTemplate(pet, isOwner, delPet));

    async function delPet() {
        const choice = confirm(`Are you sure you want to delete ${pet.name}?`);

        if (choice) {
            await deletePet(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}