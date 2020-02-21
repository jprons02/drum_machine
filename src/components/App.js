import React from "react";

import DrumPad from "./DrumPad"
import { connect } from "react-redux";

const App = (props) => {
    return (
        <div className="container-fluid">
            <div>Hello from App component.</div>
            <DrumPad 
                selectedBank={props.selectedBank}
                volumeSlider={props.volumeSlider}
                poweredOn={props.poweredOn}
            />
        </div>
    );
}

const mapStateToProps = (state) => { 
    return state;
}

export default connect(mapStateToProps)(App);