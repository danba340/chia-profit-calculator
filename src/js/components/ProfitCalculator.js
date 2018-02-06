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
  font-size: 28px;
  line-height: 75px;
  border-bottom: 1px solid #eeea;
`

const StorageInput = styled.input`
  padding-left: 10px;
  max-width: 100px;
  background: #fffd;
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
        <Heading>Calculator</Heading>
        <div className="row">
          <div className=" column col-6 text-right">
            <div>Storage space (TB):</div>
            <div className="result">Result:</div>
          </div>
          <div className="column col-6 text-left">
            <StorageInput value={this.state.value} onChange={this.handleChange} />
            <div className="result">{this.state.value*pricePerCoin}</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ProfitCalculator;