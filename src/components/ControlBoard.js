import React from "react";
import { connect } from "react-redux";
import { selectBank, slideVolume, togglePower } from "../actions";


class ControlBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div id="display" className="display col-lg-6">
        
                <div className="power custom-control custom-switch">
                    <input onChange={() => this.props.togglePower(!this.props.poweredOn)} type="checkbox" className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1" />
                </div>
        
                <div className="display-text"><p>Power: OFF</p></div>
        
                <div className="bank-buttons btn-group" role="group">
                    <button onClick={()=> this.props.selectBank(1)} type="button" className={`bank1 btn}`}>BANK 1</button> 
                    <button onClick={()=> this.props.selectBank(2)} type="button" className={`bank2 btn`}>BANK 2</button>
                </div>
        
                <div className="volume-slider">
                    <input type="range" className="form-control-range" min="0" max="100"/>
                    <label className="volume-output" htmlFor="formControlRange">{`Volume:`}</label>
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
    { selectBank, slideVolume, togglePower }
    )(ControlBoard);