export const FETCH_CARS = 'FETCH_CARS';

export const fetchCars = () => {
    return async(dispatch) => {
        try {
            const response = await fetch('https://api.example.com/cars');
            const cars = await response.json();
            dispatch({ type: FETCH_CARS, payload: cars });
        } catch (error) {
            console.log(error);
        }
    };
};