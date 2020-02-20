import React from "react";
import { connect } from "react-redux";
import { selectDrumPad } from "../actions"

const DrumPad = (props) => {

    /*
    const audioElement = document.getElementById(drumSample.keyTrigger);
    const playSound = () => {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    */
    
    

    const renderDrumPads = () => {
        const selectDrumPad = (drumSample, props) => {
            props.selectDrumPad(drumSample);
            console.log(drumSample);
            getState();
        }
        //testing...
        const getState = () => {
            console.log(props);
        }


        return (
            props.drumSamples.map((drumSample) => {
                return (
                    <div 
                        onClick={() => selectDrumPad(drumSample, props)}
                        key={drumSample.bank[0].id}
                        className="drum-pad"
                    >
                    {drumSample.keyTrigger}
                    <audio className="clip" id={drumSample.id} src={drumSample.url} />
                    </div>
                );
            })
        )
    }

    return (
        <div>
            {renderDrumPads()}
        </div>
    )
};


const mapStateToProps = state => {
    //console.log(state);
    return state;
}

export default connect(
    mapStateToProps,
    { selectDrumPad }
    )(DrumPad);