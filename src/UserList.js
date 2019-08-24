import React from 'react';
import {Link} from 'react-router-dom';
import * as userActions from './redux/action/userAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(!this.props.users.length)
        this.props.actions.fetchUsersAPI().then(()=>{
            console.log("Fetched Succefully");
        }).catch(()=>{
            console.log("Error");
        })
    }


    render(){
        return (
            
            <form onSubmit={this.onSubmitHandler} > 
                <div>
                    {this.props.users.map((user,index)=> 
                       <div key={index} ><span><b>{user.id}</b></span><span>{user.name}</span> 
                       <span><Link to={`/user/${user.id}`} >Edit</Link></span> </div>
                    )}
                </div>
            </form>
        )
    }        

}

function mapStateToProps(state){
    return {
        users:state.UserData.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(userActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserList);