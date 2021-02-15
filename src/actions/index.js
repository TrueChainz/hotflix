export const incrementPage = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrementPage = () => {
    return {
        type: 'DECREMENT'
    }
}

export const skipPageForward = () => {
    return {
        type: 'SKIP_FORWARD'
    }
}
export const skipPageBack = () => {
    return {
        type: 'SKIP_BACK'
    }
}

export const resetPage = () => {
    return {
        type: 'RESET_PAGE'
    }
}