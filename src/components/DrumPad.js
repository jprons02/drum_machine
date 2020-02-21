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
    
    componentDidMount = () => document.addEventListener('keydown', this.keyPressed);

    componentDidUpdate() {
        this.getSrc();
        this.playSound(this.getSrc());
    }

    keyPressed = (e) => {
        console.log(this.props.drumSamples);
        for(let drumSample of this.props.drumSamples) {
            if(e.keyCode == drumSample.keyCode) {
                this.props.selectDrumPad(drumSample);
            }
        }
    }
    
    getSrc = () => {
        //loop through all banks to return which is equal to the bank state.
        if(this.props.selectedDrumPad.bank) {
            for (let bank of this.props.selectedDrumPad.bank) {
                if(bank.bankNumber == this.props.selectedBank) {
                    return bank.url;
                }
            }
        }
    }

    playSound = (src) => {
        if(src) {
            const audioElement = document.getElementById(this.props.selectedDrumPad.keyTrigger);
            audioElement.currentTime = 0;
            audioElement.play();
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
