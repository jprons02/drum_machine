import React from "react";

import DrumPad from "./DrumPad"
import ControlBoard from "./ControlBoard"
import { selectDrumPad, selectBank, slideVolume } from "../actions";
import { connect } from "react-redux";

const App = (props) => {

    //infinite loop DO NOT USE.
    /*
    const resetState = () => {
        if(!props.poweredOn) {
            console.log("this fired");
            props.selectDrumPad({});
            props.selectBank(1);
            props.slideVolume(50);
        }
    }
    */
    

    
    return (
        <div className="container">
            <div id="drum-machine" className="drum-machine-row row">
                <DrumPad />
                <ControlBoard />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => { 
    return state;
}

export default connect(
    mapStateToProps,
    { selectDrumPad, selectBank, slideVolume }
    )(App);