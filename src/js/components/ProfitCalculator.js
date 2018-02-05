import React from 'react';
import styled from 'styled-components';
import priceData from '../../pricedata.json';

const pricePerCoin = priceData.bpi.USD.rate_float;

const Wrapper = styled.div`
  background: #3aac59;
  text-align: center;
  border-radius: 30px;
  padding-bottom: 20px;
`

const Heading = styled.h1`
  line-height: 100px;
`

const StorageInput = styled.input`
  padding-left: 10px;
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
          <div className=" column col-sm-6 text-right">
            <div>Storage space (TB):</div>
            <div className="result">Result:</div>
          </div>
          <div className="column col-sm-6 text-left">
            <StorageInput value={this.state.value} onChange={this.handleChange} />
            <div className="result">{this.state.value*pricePerCoin}</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ProfitCalculator;