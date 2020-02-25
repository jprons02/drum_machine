import React from "react";
import { connect } from "react-redux";
import { selectDrumPad, selectBank, slideVolume, togglePower } from "../actions";


class ControlBoard extends React.Component {

    displayText = () => {
        if(this.props.poweredOn) {
            if(this.props.selectedDrumPad.bank) {
                for (let bank of this.props.selectedDrumPad.bank) {
                    if(bank.bankNumber === this.props.selectedBank) {
                        return bank.id;
                    }
                }
            } 
        }
        else {
            return "POWER: OFF";
        }
    }

    power = (power) => {
        this.props.togglePower(!power);
        this.resetState();
    }
    resetState = () => {
        this.props.selectDrumPad({});
        this.props.selectBank(1);
    }


    render() {
        //Used to toggle css styles
        const bankClasses = 
        this.props.selectedBank == 1 ? 
          {bank1: "btn-primary", bank2: "btn-secondary"} : 
          this.props.selectedBank == 2 ? 
          {bank2: "btn-primary", bank1: "btn-secondary"} : 
          {bank1: "btn-secondary", bank2: "btn-secondary"};

        return (
            <div id="display" className="display col-lg-6">
        
                <div className="power custom-control custom-switch">
        <input onChange={() => this.power(this.props.poweredOn)} type="checkbox" className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1" />
                </div>
        
                <div className="display-text"><p>{this.displayText()}</p></div>
        
                <div className="bank-buttons btn-group" role="group">
                    <button onClick={()=> this.props.poweredOn ? this.props.selectBank(1) : null} type="button" className={`bank1 btn ${this.props.poweredOn ? bankClasses.bank1 : "btn-secondary"}`}>BANK 1</button> 
                    <button onClick={()=> this.props.poweredOn ? this.props.selectBank(2) : null} type="button" className={`bank2 btn ${this.props.poweredOn ? bankClasses.bank2 : "btn-secondary"}`}>BANK 2</button>
                </div>
        
                <div className="volume-slider">
                    <input onChange={(e) => this.props.slideVolume(e.target.value)} value={this.props.volumeSlider} type="range" className="form-control-range" min="0" max="100"/>
                    <label className="volume-output" htmlFor="formControlRange">{`Volume: ${this.props.volumeSlider}`}</label>
                </div>
        
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(
    mapStateToProps, 
    { selectDrumPad, selectBank, slideVolume, togglePower }
    )(ControlBoard);