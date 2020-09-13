import config from '../config';
import { collections } from '../data';
import { authHeader } from './auth.header';

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                //location.reload(true);
                console.log('got a 401');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const createCollection = (name) => {
    let authHead = authHeader();
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHead.Authorization

        },
        body: JSON.stringify({"name": name })
    };

    return fetch(`${config.apiUrl}/collection`, requestOptions)
        .then(handleResponse);
}

const getAllForUser = () => {
    //userId until i make server do it with tokens
    const authHead = authHeader();
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHead.Authorization
        }
    };

    const url = `${config.apiUrl}/collections/`+ userId;
    return fetch( url , requestOptions)
        .then(handleResponse);
}

const getCollection = (collectionUid) => {
    //TODO: need to test || should work even if not logged in
    const authHead = authHeader();

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHead.Authorization,
        }
    };

    const url = `${config.apiUrl}/collection/`+ collectionUid;
    return fetch( url , requestOptions)
        .then(handleResponse)
        .then(collectionRes => {
            console.log(collectionRes)
            let collectionObj = collectionRes.company;
            collectionObj.channels = collectionObj.channels.map(serverChannel => {
                return {
                    id: serverChannel.id,
                    name: serverChannel.name,
                    channelId: serverChannel.ytId
                }
            });
            return collectionObj;
        });
}

const updateCollection = (collectionUid, data) => {

}

const deleteCollection = (collectionUid) => {

}

const updateOrder = (arrayofCollectionUidsAndOrderInt) => {

}

const addFollow = (parentCollectionUid, childCollectionUid) => {

}

const deleteFollow = (parentCollectionUid, childCollectionUid) => {

}

//todo: testing generic
function request(method, url, body) {
    const authHead = authHeader();

    const requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHead.Authorization,
        }
    };
    if(body) 
        requestOptions.headers.body = JSON.stringify(body)

    return fetch(`${config.apiUrl}${url}`, requestOptions)
        .then(handleResponse)
}

export const collectionService = {
    createCollection,
    getAllForUser,
    getCollection,
    updateCollection,
    deleteCollection,
    updateOrder,
    addFollow,
    deleteFollow,
};

//#region TODO: not currently in use, not sure that it will be since this isnt currently a bottleneck
function saveCollections(collectionsToSave){
    localStorage.removeItem('collections');
    localStorage.setItem('collections', JSON.stringify(collectionsToSave));
}
//#endregion