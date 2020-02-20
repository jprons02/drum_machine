import { DRUM_PAD_SELECTED, BANK_SELECTED, SLIDER_VOLUME, POWER_STATUS } from "./types";


export const selectDrumPad = (drumPad, state) => {
    return {
        type: DRUM_PAD_SELECTED,
        payload: drumPad
    };
};


export const selectedBank = bank => {
    return {
        type: BANK_SELECTED,
        payload: bank
    }
};


export const sliderVolume = volume => {
    return {
        type: SLIDER_VOLUME,
        payload: volume
    }
};


export const poweredOn = power => {
    return {
        type: POWER_STATUS,
        payload: power
    }
}