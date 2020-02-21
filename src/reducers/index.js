import { combineReducers } from "redux";
import { DRUM_PAD_SELECTED, BANK_SELECTED, SLIDER_VOLUME, POWER_STATUS } from "../actions/types";


const drumSamplesReducer = () => {
    return [
        {   
        bank: [
            {
                bankNumber: 1, 
                id: 'Heater-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Chord-1',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
            },
        ],
        keyCode: 81,
        keyTrigger: 'Q'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Heater-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Chord-2',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
            },
        ],
        keyCode: 87,
        keyTrigger: 'W'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Heater-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Chord-3',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
            },
        ],
        keyCode: 69,
        keyTrigger: 'E'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Heater-4',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Shaker',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            },
        ],
        keyCode: 65,
        keyTrigger: 'A'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Clap',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
            },
        ],
        keyCode: 83,
        keyTrigger: 'S'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Open-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
            },
        ],
        keyCode: 68,
        keyTrigger: 'D'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: "Kick-n'-Hat",
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Punchy-Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            },
        ],
        keyCode: 90,
        keyTrigger: 'Z'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Kick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Side-Stick',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            },
        ],
        keyCode: 88,
        keyTrigger: 'X'
        }, {
        bank: [
            {
                bankNumber: 1, 
                id: 'Closed-HH',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            },
            {
                bankNumber: 2, 
                id: 'Snare',
                url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            },
        ],
        keyCode: 67,
        keyTrigger: 'C'
        }
    ]
}



const selectedDrumPadReducer = (selectedDrumPad={}, action) => {
    if(action.type === DRUM_PAD_SELECTED) {
        return action.payload;
    }

    return selectedDrumPad;
};


const selectedBankReducer = (selectedBank=1, action) => {
    if(action.type === BANK_SELECTED) {
        return action.payload;
    }

    return selectedBank;
}


const volumeSliderReducer = (volume=50, action) => {
    if(action.type === SLIDER_VOLUME) {
        return action.payload;
    }

    return volume;
}


const poweredOnReducer = (power=false, action) => {
    if(action.type === POWER_STATUS) {
        return action.payload;
    }

    return power;
}



export default combineReducers({
    drumSamples: drumSamplesReducer,
    selectedDrumPad: selectedDrumPadReducer,
    selectedBank: selectedBankReducer,
    volumeSlider: volumeSliderReducer,
    poweredOn: poweredOnReducer
});