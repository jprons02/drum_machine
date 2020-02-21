import React from "react";
import { connect } from "react-redux";
import { selectDrumPad } from "../actions"

class DrumPad extends React.Component {

    constructor(props) {
        super(props);
    }
    /*
    const audioElement = document.getElementById(drumSample.keyTrigger);
    const playSound = () => {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    */
    componentDidMount() {
        //key press listener function.
        return null;
    }

    componentDidUpdate() {
        this.getSrc();
        if(this.getSrc()) {
            const audioElement = document.getElementById(this.props.selectedDrumPad.keyTrigger);
            audioElement.currentTime = 0;
            audioElement.play();
        }
    }
    
    getSrc = () => {
        const audioElement = document.getElementById(this.props.selectedDrumPad.keyTrigger);
        //loop through all banks to return which is equal to the bank state.
        
        if(this.props.selectedDrumPad.bank) {
            for (let bank of this.props.selectedDrumPad.bank) {
                if(bank.bankNumber == this.props.selectedBank) {
                    return bank.url;
                }
            }
        }
    }
    

    renderDrumPads = () => {
        
        return (
            this.props.drumSamples.map((drumSample) => {
                return (
                    <div 
                        onClick={() => this.props.selectDrumPad(drumSample)}
                        key={drumSample.bank[0].id}
                        className="drum-pad"
                    >
                    {drumSample.keyTrigger}
                    <audio className="clip" id={drumSample.keyTrigger} src={this.getSrc() || null} />
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div>
                {this.renderDrumPads()}
            </div>
        )
    }
};


//use ownProps to pass so that when componentDidUpdate fires it only fires onClick 
//because the only state that changes is selectedDrumPad
const mapStateToProps = (state, ownProps) => {
    const { selectedDrumPad, drumSamples } = state;
    const { selectedBank, volumeSlider, poweredOn } = ownProps;

    return { selectedDrumPad, drumSamples, selectedBank, volumeSlider, poweredOn };
}


export default connect(
    mapStateToProps,
    { selectDrumPad }
    )(DrumPad);
