import React from 'react';
import styled from 'styled-components';
import priceData from '../../pricedata.json';

const pricePerCoin = priceData.bpi.USD.rate_float;

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
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Wrapper className="profit-calc-wrapper">
        <Heading>Chia Mining Profit Calculator</Heading>
        <div className="row">
          <div className=" column col-6 text-right">
            <div>Coins Per Block:</div>
            <div>Base Target:</div>
            <div>Total Plot Size (TB):</div>
            <div className="result-wrapper">
              <div className="result">Chia Monthly:</div>
              <div className="result">USD Monthly:</div>
            </div>
          </div>
          <div className="column col-6 text-left">
            <CoinsPerBlockInput value={this.state.value} onChange={this.handleChange} />
            <BaseTargetInput value={this.state.value} onChange={this.handleChange} />
            <StorageInput value={this.state.value} onChange={this.handleChange} />
            <div className="result-wrapper">
              <div className="result">{Math.round( this.state.value*pricePerCoin * 10) / 10}</div>
              <div className="result">${Math.round( this.state.value*pricePerCoin * 10) / 10}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ProfitCalculator;