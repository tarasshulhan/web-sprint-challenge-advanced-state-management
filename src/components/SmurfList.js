import React from 'react';
import Smurf from './Smurf';
import { connect } from "react-redux";

 const SmurfList = (props)=> {
    const isLoading = props.isLoading;

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {props.smurfs.map((smurf, index) =>(
          <Smurf key={index} smurf={smurf}/>
        ))}
        
    </div>);
}
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading
    };
  };
export default connect(mapStateToProps)(SmurfList);