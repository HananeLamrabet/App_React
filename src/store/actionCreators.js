import * as actionTypes from "./actionTypes"
export const incrementX = (X) => {
    return {
        type: actionTypes.INCREMENT_X,
        X,
    }
}

export const incrementY = (Y) => {
    return {
        type: actionTypes.INCREMENT_Y,
        Y,
    }
}

export const pauseReprendre = (Sent) => {
    return {
        type: actionTypes.PAUSEREPRENDRE,
        Sent,
    }
}

export const remmetre = (X, Y) => {
    return {
        type: actionTypes.REMMETRE,
        X,Y,
    }
}

