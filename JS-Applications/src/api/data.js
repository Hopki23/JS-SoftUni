import * as api from './api.js';

export async function getAllShoes(){
    return api.get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getShoeById(id){
    return api.get('/data/shoes/' + id);
}

export async function deleteShoe(id){
    return api.delete('/data/shoes/' + id);
}

export async function editShoe(id, shoe){
    return api.put('/data/shoes/' + id, shoe);
}

export async function createShoe(shoe){
    return api.post('/data/shoes', shoe);
}

export async function searchShoe(search){
    const query = encodeURIComponent(`brand LIKE "${search}"`);
    return api.get(`/data/shoes?where=${query}`);
}