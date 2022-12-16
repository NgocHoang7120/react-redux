import React from "react";
import logo from './logo.svg';
import Color from "../components/hoc/color";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Home extends React.Component {

    state = {
        name: '',
        userTemp: {}
    }

    componentDidMount() {
        // setTimeout(() => {
        //     console.log(">>>check props: ", this.props);
        //     this.props.history.push('/Job');
        // }, 5000);
    }

    handleDeletUser = (user) => {
        this.props.deleteUser(user);
    }

    handleChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleCreateAuser = () => {
        if(this.state.name.trim() !== '') {
            // id, name , age
            let number = Math.floor(Math.random() * 10000); // 0 -> 1
            let id = `abc-${number}`;
            let { name } = this.state;

            let newUser = { id: id, name: name, age: number };
            this.props.createUser(newUser);
            this.setState({
                name: ''
            })
        } else {
            alert('missing require !')
        }
    }

    handleEditBTN = (user) => {
        let {userTemp} = this.state;
        let isEmptyObj = Object.keys(userTemp).length === 0;
        if(isEmptyObj === false) {
            let copyDataRedux = [...this.props.dataRedux];
            let indexObj = copyDataRedux.findIndex(item => user.id === item.id);
            copyDataRedux[indexObj].name = userTemp.name;
            copyDataRedux[indexObj].age = userTemp.age;
            this.props.editUser(copyDataRedux);

            this.setState({
                userTemp: {}
            })
        } else {
            this.setState({
                userTemp: user
            })
        }

    }

    handleChangeName = (event) => {
        let copyUserTemp = this.state.userTemp;
        copyUserTemp.name = event.target.value;
        this.setState({
            userTemp: copyUserTemp
        })
    }

    handleChangeAge = (event) => {
        let copyUserTemp = this.state.userTemp;
        copyUserTemp.age = event.target.value;
        this.setState({
            userTemp: copyUserTemp
        })
    }

    render() {
        let dataUser = this.props.dataRedux;
        // console.log(">>>check dataRedux: ", this.props.dataRedux);
        let {userTemp} = this.state;
        let isEmptyObj = Object.keys(userTemp).length === 0;
        return(
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello reactJs from my computer.
                </p>
                <div className="container-users">
                    <div>
                        <input value={this.state.name} onChange={event => this.handleChangeInput(event)}/> &nbsp;
                        <button style={{cursor: 'pointer'}} onClick={() => this.handleCreateAuser()}>ADD</button>
                    </div>
                    {dataUser && dataUser.length > 0 &&
                        dataUser.map((item, index) => {
                            return(
                                <div key={item.id} className='user-detail'>
                                    {isEmptyObj === true ?
                                        <>
                                            {index + 1} - {item.name} - {item.age} &nbsp;
                                            <span onClick={() => this.handleDeletUser(item)} style={{ cursor: 'pointer' }}>x</span> &nbsp;
                                        </>
                                        :
                                        <>
                                            {userTemp.id === item.id ?
                                                <>
                                                    {index + 1} <input value={userTemp.name} onChange={event => this.handleChangeName(event)}/> &nbsp;
                                                    <input value={userTemp.age} onChange={event => this.handleChangeAge(event)} />
                                                </>
                                                :
                                                <>
                                                    {index + 1} - {item.name} - {item.age} &nbsp;
                                                    <span onClick={() => this.handleDeletUser(item)} style={{ cursor: 'pointer' }}>x</span> &nbsp;
                                                </>
                                            }                                        
                                        </>
                                    }
                                    <button onClick={() => this.handleEditBTN(item)}>
                                        {isEmptyObj === false && userTemp.id === item.id ?
                                            'Save':'Edit'
                                        }
                                    </button>
                                </div>
                            )
                        })

                    }
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        dataRedux: state.listUser,
        postsRedux: state.posts,
        statusUser: state.statusUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userDelete) => dispatch({ type: 'delete_user', payload: userDelete }),
        createUser: (newUser) => dispatch({ type: 'create_user', payload: newUser }),
        editUser: (userEdit) => dispatch({ type: 'edit_user', payload: userEdit }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(withRouter(Home)));