import * as api from './api.js';

export async function getAllPets(){
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id){
    return api.get('/data/pets/' + id);
}

export async function deletePet(id){
    return api.delete('/data/pets/' + id);
}

export async function editPet(id, pet){
    return api.put('/data/pets/' + id, pet);
}

export async function createPet(pet){
    return api.post('/data/pets', pet);
}