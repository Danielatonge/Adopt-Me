export default function location(state = "", action) {
    switch (action.type) {
        case 'CHANGE_BREED':
            return action.payload;
        default:
            return state
    }
}