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
        console.log(props);
        const selectDrumPad = (drumSample) => {
            
            props.selectDrumPad(drumSample);
            console.log("props within renderDrumPads function keyTrigger: " + props.state.selectedDrumPad.keyTrigger);
        }
        

        return (
            props.state.drumSamples.map((drumSample) => {
                return (
                    <div 
                        onClick={() => selectDrumPad(drumSample)}
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


const mapStateToProps = (state, ownProps) => {
    
    const { selectedDrumPad, selectedBank, sliderVolume, poweredOn } = ownProps
    return { state, poweredOn, sliderVolume };
    //return {state, ownProps}
}

/*
function mapStateToProps(state, ownProps) {
  const { visibilityFilter } = state
  const { id } = ownProps
  const todo = getTodoById(state, id)

  // component receives additionally:
  return { todo, visibilityFilter }
}
*/

export default connect(
    mapStateToProps,
    { selectDrumPad }
    )(DrumPad);