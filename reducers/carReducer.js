import { FETCH_CARS } from '../actions/carAction';
const initialState = {
    cars: [],
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS:
            return {
                ...state,
                cars: action.payload,
            };
        default:
            return state;
    }
};

export default carReducer;