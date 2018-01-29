import {
    FETCH_AREAS_SUCCEEDED
} from '../actions/surveys';

export default function (state = {surveys: {}}, action) {
    switch (action.type) {
        case FETCH_AREAS_SUCCEEDED:
            return {...state, areas: action.areas};
        default:
            return state;
    }
}
