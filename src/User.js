import React from 'react';

import * as userActions from './redux/action/userAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class User extends React.Component{
    constructor(props){
        super(props);     
        this.state = {user: {...this.props.user}}
    }

    componentWillMount(){
        console.log("user");
     //   this.props.history.push("/users");
    }

    handleClick =(e) =>{
        
        const user = {...this.props.user, name:e.target.value};
        this.setState({user});
    }
    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.props.actions.addUser(this.state.user)
    }

    render(){
        return (
            
            <form onSubmit={this.onSubmitHandler} > 
                       
                <input type="text" onChange ={this.handleClick}   value={this.state.user.name} />
                <button  >Submit</button>
                
            </form>
        )
    }        

}

function mapStateToProps(state){
    return {
        user:state.UserData.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(userActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (User);