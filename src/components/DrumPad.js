import React from "react";
import { connect } from "react-redux";
import { selectDrumPad } from "../actions"

class DrumPad extends React.Component {
    
    componentDidMount = () => document.addEventListener('keydown', this.keyPressed);

    componentDidUpdate() {
        if(this.getSrc()) {
            this.playSound(this.getSrc());
        } 
    }

    keyPressed = (e) => {
        for(let drumSample of this.props.drumSamples) {
            if(e.keyCode === drumSample.keyCode) {
                this.props.selectDrumPad(drumSample);
            }
        }
    }
    
    getSrc = () => {
        //loop through all banks to return which is equal to the bank state.
        if(this.props.selectedDrumPad.bank) {
            for (let bank of this.props.selectedDrumPad.bank) {
                if(bank.bankNumber === this.props.selectedBank) {
                    return bank;
                }
            }
        }
    }

    playSound = (src) => {
        if(src) {
            const audioElement = document.getElementById(this.props.selectedDrumPad.keyTrigger);
            
            //resets audio to allow spam keypress
            audioElement.currentTime = 0;
            
            //promise applied due to error
            //https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
            let playPromise = audioElement.play();
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
                    <div className="drum-pad-col col-md-4">
                        <div 
                            onClick={() => this.props.selectDrumPad(drumSample)}
                            key={drumSample.keyTrigger}
                            className={`drum-pad btn ${this.props.poweredOn ? "btn-primary" : "btn-secondary"}`}
                        >
                            {drumSample.keyTrigger}
                            <audio className="clip" id={drumSample.keyTrigger} src={this.getSrc() ? this.getSrc().url : null} />
                        </div>
                    </div>
                );
            })
        )
    }

    render() {
        return (
            <div className="drum-pad-area col-lg-6">
                <div className="row">
                    {this.renderDrumPads()}
                </div>
            </div>
        )
    }
};


//I only want componentDidUpdate to fire when selectedDrumPad is updated. This is why I need ownProps - 
//to receive state as props from a higher level component, and to not trigger this componentDidUpdate method.
const mapStateToProps = (state, ownProps) => {
    const { selectedDrumPad, drumSamples } = state;
    const { selectedBank, volumeSlider, poweredOn } = ownProps;

    return { selectedDrumPad, drumSamples, selectedBank, volumeSlider, poweredOn };
}


export default connect(
    mapStateToProps,
    { selectDrumPad }
    )(DrumPad);
