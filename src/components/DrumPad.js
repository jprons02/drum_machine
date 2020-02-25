import React from "react";
import { connect } from "react-redux";
import { selectDrumPad } from "../actions"

class DrumPad extends React.Component {
    
    componentDidMount = () => document.addEventListener('keydown', this.keyPressed);

    
    keyPressed = (e) => {
        for(let drumSample of this.props.drumSamples) {
            if(e.keyCode === drumSample.keyCode) {
                this.playSound(drumSample);
            }
        }
    }

    getSrcObj = drumSample => {
        for (let bank of drumSample.bank) {
            if(bank.bankNumber === this.props.selectedBank) {
                return bank;
            }
        }
    }

    playSound = (drumSample) => {
        if(!this.props.poweredOn) {
            return null;
        } 
        //call action creator to set state of selectedDrumPad
        this.props.selectDrumPad(drumSample);

        if(this.getSrcObj) {
            const audioElement = document.getElementById(drumSample.keyTrigger);
                
            //playTheSound.volume = (parseInt(this.state.sliderValue))/100;
            //set volume
            audioElement.volume = (parseInt(this.props.volumeSlider))/100;
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
                    <div key={drumSample.keyTrigger} className="drum-pad-col col-md-4">
                        <div 
                            key={drumSample.keyTrigger}
                            onClick={() => this.playSound(drumSample)}
                            className={`drum-pad btn ${this.props.poweredOn ? "btn-primary" : "btn-secondary"}`}
                        >
                            {drumSample.keyTrigger}
                            <audio className="clip" id={drumSample.keyTrigger} src={this.getSrcObj(drumSample).url || null} />
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


const mapStateToProps = state => {
    return state;
}


export default connect(
    mapStateToProps,
    { selectDrumPad }
    )(DrumPad);
