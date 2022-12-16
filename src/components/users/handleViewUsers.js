import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                // console.log(">>>check data: ", res);
                if(res && res.data && res.data.data) {
                    this.setState({
                        listUsers: res.data && res.data.data ? res.data.data :  []
                    })
                } else {
                    this.setState({
                        listUsers: []
                    })
                }
            })
    }

    handleViewDetail = (id) => {
        this.props.history.push(`/User/${id}`);
    }

    render() {
        // console.log("check listUsers: ", this.state.listUsers);
        let {listUsers} = this.state;
        let myStyle = {
            border: '2px solid grey',
            boxShadow: '0 0 0 2px grey',
            boxSizing: 'content-box',
            padding: '10px',
            textAlign: 'center',
            color: 'yellow',
            cursor: 'pointer',
        }
        return(
            <>
                <div className="container-list-users" style={{width: '400px', height: 'auto', margin: '20px auto'}}>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return(
                                <div className="user-content" key={item.id} style={myStyle} onClick={() => this.handleViewDetail(item.id)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </>
        )
    }
};

export default withRouter(ListUsers);