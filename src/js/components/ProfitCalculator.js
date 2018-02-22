import React from 'react';
import styled from 'styled-components';
import priceData from '../../pricedata.json';

const baseTarget = priceData[0].baseTarget;
console.log(priceData);
window.priceData = priceData;

const Wrapper = styled.div`
  background: #0517084a;
  text-align: center;
  border-radius: 15px;
  padding-bottom: 20px;
`

const Heading = styled.h1`
  font-size: 26px;
  line-height: 75px;
  border-bottom: 1px solid #eeea;
`

const StorageInput = styled.input`
  
`

const BaseTargetInput = styled.input`

`

const CoinsPerBlockInput = styled.input`

`

const Result = styled.div`

`

class ProfitCalculator extends React.Component {
  constructor() {
    super();
    this.state = {calc: {
      CPB: 1159,
      BT: baseTarget ? baseTarget : 70000,
      S: 10
    }};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(propertyName, event) {
    const calc = this.state.calc;
    calc[propertyName] = event.target.value;
    this.setState({ calc: calc });
  }

  render() {
    return (
      <Wrapper className="profit-calc-wrapper">
        <Heading>Chia Mining Profit Calculator</Heading>
        <div className="row">
          <div className=" column col-6 text-right">
            <div>Coins Per Block:</div>
            <div>Base Target:</div>
            <div>Total Plot Size(TB):</div>
            <div className="result-wrapper">
              <div className="result">Chia Monthly:</div>
              <div className="result">USD Monthly:</div>
            </div>
          </div>
          <div className="column col-6 text-left">
            <CoinsPerBlockInput value={this.state.calc.CPB} onChange={this.handleChange.bind(this, 'CPB')} />
            <BaseTargetInput value={this.state.calc.BT} onChange={this.handleChange.bind(this, 'BT')} />
            <StorageInput value={this.state.calc.S} onChange={this.handleChange.bind(this, 'S')} />
            <div className="result-wrapper">
              <div className="result">{ Math.round( 20.4 * (3600 * this.state.calc.CPB / (Math.pow(2, 64) / this.state.calc.BT / (4 * this.state.calc.S*1000000*30))))}</div>
              <div className="result">Not evaluated</div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ProfitCalculator;

/*
    function calculateMining() {
      var a = $("#plotUnit").val().trim(),
	  c = parseInt($("#baseTarget").val()),
	  d = parseInt($("#coinsPerBlock").val()),
	  b = 1;

      switch (a) {
        case "PB":
          b *= 1E3;
        case "TB":
          b *= 1E3;
        case "GB":
          b *= 1E3
      }
      var magicFactor = 0.85;
      a = 4 * parseFloat($("#plotSize").val()) * b;
      a = Math.pow(2, 64) / c / a;
      d = 3600 * d / a;
      a = 24 * d * magicFactor;
*/