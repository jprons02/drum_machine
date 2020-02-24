import React from "react";
import { connect } from "react-redux";
import { selectDrumPad } from "../actions"

class DrumPad extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => document.addEventListener('keydown', this.keyPressed);

    componentDidUpdate() {
        
        this.getSrc();
        if(this.getSrc()) {
            this.playSound(this.getSrc());
        } 
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
                    //console.log(bank);
                    return bank;
                }
            }
        }
    }

    playSound = (src) => {
        if(src) {
            const audioElement = document.getElementById(this.props.selectedDrumPad.keyTrigger);
            audioElement.currentTime = 0;
            
            var playPromise = audioElement.play();
            
            //promise applied due to error
            //https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
            if (playPromise !== undefined) {
                playPromise
                .then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    console.log("audio played auto");
                })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                    console.log("playback prevented");
                });
            }
        }

    }
    

    renderDrumPads = () => {
        
        return (
            this.props.drumSamples.map((drumSample) => {
                return (
                    <div 
                        onClick={() => this.props.selectDrumPad(drumSample)}
                        key={drumSample.keyTrigger}
                        className="drum-pad"
                    >
                        {drumSample.keyTrigger}
                        <audio className="clip" id={drumSample.keyTrigger} src={this.getSrc() ? this.getSrc().url : null} />
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
