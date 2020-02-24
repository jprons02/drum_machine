import React from "react";

import DrumPad from "./DrumPad"
import ControlBoard from "./ControlBoard"
import { connect } from "react-redux";

const App = (props) => {
    return (
        <div className="container-fluid">
            <DrumPad 
                selectedBank={props.selectedBank}
                volumeSlider={props.volumeSlider}
                poweredOn={props.poweredOn}
            />
            <ControlBoard />
        </div>
    );
}

const mapStateToProps = (state) => { 
    return state;
}

export default connect(mapStateToProps)(App);