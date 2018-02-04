import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #3aac59;
  text-align: center;
  border-radius: 10px;
  padding-bottom: 20px;
`

const Heading = styled.h1`
  line-height: 100px;
`

const StorageInput = styled.input`
  margin-left: 10px;
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
      <Wrapper>
        <Heading>Calculator</Heading>
        <span>Storage space (TB):</span>
        <StorageInput value={this.state.value} onChange={this.handleChange} />
        <Result>Result:{this.state.value}</Result>
      </Wrapper>
    );
  }
}

export default ProfitCalculator;