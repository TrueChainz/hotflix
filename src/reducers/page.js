// REDUCER

const pageReducer = (state = 1, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'SKIP_FORWARD':
            return state + 10;
        case 'SKIP_BACK':
            if (state <= 10) {
                return 1
            }
            return state - 10;
        case 'RESET_PAGE':
            return 1;
        default:
            return state
    }
}

export default pageReducer