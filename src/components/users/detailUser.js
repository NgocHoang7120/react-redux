import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        // console.log(">>>check props: ", this.props);
        if(this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            // console.log(">>>check id:", id);
            if(id) {
                let res = await axios.get(`https://reqres.in/api/users/${id}`);
                this.setState({
                    user: res.data && res.data.data ? res.data.data : {}
                })
            } else {
                return;
            }
        }
    };

    handleBack = ()  => {
        this.props.history.push('/Users')
    }

    render() {
        // console.log(">>>check user:", this.state.user);
        let {user} = this.state;
        return(
            <div>
                <div style={{marginTop: '50px'}}>User's name: {user.first_name} {user.last_name}</div>
                <div style={{margin: '10px'}}>User's email: {user.email}</div>
                <div><img src={user.avatar} alt="avatar" /></div>
                <div><button onClick={() => this.handleBack()} style={{cursor: 'pointer', boxSizing:'content-box', height: '20px', width: '50px', marginTop: '10px'}}>Back</button></div>
            </div>
        )
    }
};

export default withRouter(DetailUser);