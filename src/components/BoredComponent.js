import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class BoredComponent extends Component{

  componentDidMount(){
    this.props.fetchData();
  }

  render(){
    return(
      <div>
        <p>{this.props.asyncData.activity}</p>
        <p>{this.props.asyncData.type}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    asyncData: state.asyncData
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData: () => dispatch(fetchData())
  }
}

// <Connect> around your component: Higher Order Function
export default connect(mapStateToProps, mapDispatchToProps)(BoredComponent);