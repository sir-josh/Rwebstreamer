import { 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
 } from "../actions/types";

 export default (state = {} , action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            const streamsObject = action.payload.reduce((accumulator, stream) =>{
                accumulator[stream.id] = stream;
                return accumulator;
            },{});
            return { ...state, ...streamsObject };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            const { [action.payload]: deletedStream, ...newState } = state;
            return newState;
        default:
            return state;
    }
 }