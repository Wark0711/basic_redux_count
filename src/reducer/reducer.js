export default function reducerFn(
    state = {
        count: 0
    },
    action
) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, count: state.count + 1
            }
        case "DECREMENT":
            if (state.count > 0) {
                return {
                    ...state, count: state.count - 1
                }
            } 
            else {
                return {
                    ...state, count: 0
    
                }
            }
        default:
            return state
    }
} 