import { collectionTypes } from './actionTypes';
import { collectionService } from '../services';
import { alertActions } from './alert.actions';

export const channelActions = {
    create,
    get,
    getAll,
    update,
    delete: _delete,
    //reorder,
};

function formatServerResponse(serverRes){
    let returnResponse = {};
    for(let i=0; i < serverRes.collections.length;i++){

        let newChannels = serverRes.collections[i].Channels.map( serverChannel => {
            return {
                id: uuid(),
                "name": serverChannel.name,
                "channelId": serverChannel.ytId,
                "thumbnail": "https://yt3.ggpht.com/a-/AN66SAzwZsCNSyRezNFqEaG6Ef9bFcZ-PzN6CxSzEw=s88-mo-c-c0xffffffff-rj-k-no"
                //server doesnt have thumbnails atm
            }
        });

        returnResponse[uuid()] = {
            id: serverRes.collections[i].id,
            "name": serverRes.collections[i].name,
            "channels": newChannels,
            "settings": {
                "showChannels": false,
                "numItems": 15,
                "doneLoading": true,
            }
        }
    }
    return returnResponse;
}

function create(collectionName){
    return dispatch => {
        dispatch(request());
        collectionService.createCollection( collectionName )
            .then(
                response => {
                    console.log(response);
                    dispatch(success(response));
                },
                error => {
                    //getallforUser to refresh state TODO
                    dispatch(failure(error))
                }
            )
    };

    function request() { return { type: collectionTypes.COLLECTION_CREATE_REQUEST } }
    function success(collectionId) { return { type: collectionTypes.COLLECTION_CREATE_SUCCESS, collectionId } }
    function failure(error) { return { type: collectionTypes.COLLECTION_CREATE_FAILURE, error } }
}

function get(collectionId){
    return dispatch => {
        dispatch(request(collectionId));
        collectionService.getCollection( collectionId )
            .then(
                response => {
                    console.log(response);
                    dispatch(success(response));
                },
                error => {
                    dispatch(alertActions.error(`Problem fetching collection ${collectionId}`));
                    dispatch(failure(error))
                }
            )
    };

    function request(collectionId) { return { type: collectionTypes.COLLECTION_GET_REQUEST, collectionId } }
    function success(collection) { return { type: collectionTypes.COLLECTION_GET_SUCCESS, collection } }
    function failure(error) { return { type: collectionTypes.COLLECTION_GET_FAILURE, error } }
}

//todo needs work
function getAll() {
    //runs when logging in to app, or to update
    console.log('created action for getAllForUser');

    return dispatch => {
        dispatch(request({}));
        collectionService.getAllForUser()
            .then(
                collectionRes => {
                    console.log(collectionRes);
                    console.log('received all users collections response from server');

                    const receivedColl = formatServerResponse(collectionRes);
                    console.log(receivedColl);

                    //logged in: set state to collections response
                    //dispatch(setColumn(receivedColl));
                    //dispatch(setOrdered(Object.keys(receivedColl)));
                    dispatch(newBoard(receivedColl));

                    dispatch(success(collectionRes));
                },
                error => {
                    // not logged in: logout(set user state to {}, remove local token)
                    // dispatch(userActions.logout()); //if it's a 401 the handler will logout
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(channel, collectionId) { return { type: collectionTypes.COLLECTION_GETALL_REQUEST, channel, collectionId } }
    function success(channel, collectionId) { return { type: collectionTypes.COLLECTION_GETALL_SUCCESS, channel, collectionId } }
    function failure(error) { return { type: collectionTypes.COLLECTION_GETALL_FAILURE, error } }
}

function update(collectionId, data){
    return dispatch => {
        dispatch(request(collectionId));
        collectionService.updateCollection( collectionId, data )
            .then(
                response => {
                    console.log(response);
                    dispatch(success(response));
                },
                error => {
                    dispatch(alertActions.error(`Problem updating collection ${collectionId}`));
                    dispatch(failure(error))
                }
            )
    };

    function request(collectionId) { return { type: collectionTypes.COLLECTION_UPDATE_REQUEST, collectionId } }
    function success(collection) { return { type: collectionTypes.COLLECTION_UPDATE_SUCCESS, collection } }
    function failure(error) { return { type: collectionTypes.COLLECTION_UPDATE_FAILURE, error } }
}

function _delete(collectionId) {
    return dispatch => {
        dispatch(request(collectionId));
        collectionService.deleteChannel(collectionId)
            .then(
                response => {
                    dispatch(success(collectionId));
                },
                error => {
                    dispatch(alertActions.error(`Problem deleting collection ${collectionId}`));
                    dispatch(failure(error));
                }
            )
    };

    function request(collectionId) { return { type: collectionTypes.COLLECTION_DELETE_REQUEST, collectionId } }
    function success(collectionId) { return { type: collectionTypes.COLLECTION_DELETE_SUCCESS, collectionId } }
    function failure(error) { return { type: collectionTypes.COLLECTION_DELETE_FAILURE, error } }
}

// TODO needs work
// function reorder(collectionId) {
//     return dispatch => {
//         dispatch(request(collectionId));
//         channelService.deleteChannel(channel, collectionId)
//             .then(
//                 response => {
//                     dispatch(success(channel, collectionId));
//                 },
//                 error => {
//                     dispatch(alertActions.error(`Problem deleting channel ${channel} from collection ${collectionId}`));
//                     dispatch(get(collectionId));
//                     dispatch(failure(error));
//                 }
//             )
//     };

//     function request(channel, collectionId) { return { type: collectionTypes.COLLECTION_REORDER_REQUEST, channel, collectionId } }
//     function success(channel, collectionId) { return { type: collectionTypes.COLLECTION_REORDER_SUCCESS, channel, collectionId } }
//     function failure(error) { return { type: collectionTypes.COLLECTION_REORDER_FAILURE, error } }
// }