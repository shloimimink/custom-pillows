export default (state, action) => {
    switch (action.type) {
        case 'GET_PILLOWS':
            return {
                ...state,
                loading: false,
                pillows: action.payload
            };
        case 'ADD_PILLOW':
            return {
                ...state,
                pillows: [action.payload, ...state.pillows],
                loading: false,
            }
        case 'GET_PILLOW':
            return {
                ...state,
                loading: false,
                pillow: action.payload,
            };
        case 'PILLOW_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
