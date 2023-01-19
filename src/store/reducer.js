import * as actionTypes from "./actionTypes"

const initialState = {
    X: 0,
    Y: 0,
    Sent: "le Score est :",
    Message: 'Who is gonna win?',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_X:
            return {
                ...state,
                X: state.X + 1,
                Message: state.X === 4 ? 'Congratulations J1' : state.Message,
            }

        case actionTypes.INCREMENT_Y:
            return {
                ...state,
                Y: state.Y + 1,
                Message: state.Y === 4 ? 'Congratulations J2' : state.Message,
            }

        case actionTypes.PAUSEREPRENDRE:
            return {
                ...state,
                Sent: state.Sent === 'le score est' ? 'Pause' : 'le score est',
              };

        case actionTypes.REMMETRE:
            return {
                ...state,
                X: 0,
                Y: 0,

            }
    }
    return state
}
export default reducer