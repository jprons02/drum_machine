import { DRUM_PAD_SELECTED, BANK_SELECTED, SLIDER_VOLUME, POWER_STATUS } from "./types";


export const selectDrumPad = (drumPad) => {
    return {
        type: DRUM_PAD_SELECTED,
        payload: drumPad
    };
};


export const selectBank = bank => {
    return {
        type: BANK_SELECTED,
        payload: bank
    }
};


export const slideVolume = volume => {
    return {
        type: SLIDER_VOLUME,
        payload: volume
    }
};


export const togglePower = power => {
    return {
        type: POWER_STATUS,
        payload: power
    }
}