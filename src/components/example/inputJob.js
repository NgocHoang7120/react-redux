import React from "react";
import { toast, Zoom } from 'react-toastify';

class InputJob extends React.Component {
    state = {
        job: '',
        salary: ''
    }

    handleChangeJob = (event) => {
        this.setState({
            job: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleAdd = () => {
        if(this.state.job.trim() !== '' && this.state.salary.trim() !== '') {
            let number = Math.floor(Math.random() * 1000);
            let id = `J${number}`;
            let aJob = { id: id, job: this.state.job, salary: this.state.salary };
            this.props.handleAnewJob(aJob);
            
            this.setState({
                job: '',
                salary: ''
            })
            toast.success('create new job done !', {
                autoClose: 1000
            })
        } else {
            toast.error('Missing require !!!', {
                autoClose: 1500,
                transition: Zoom,
                position: 'top-center'
            })
        }
    }

    render() {
        return(
            <>
                <div style={{ margin: '20px', fontSize: '40px', color: 'blue' }}>Simple list-job-salary</div>
                <div className='input-job'>
                    <input type="" value={this.state.job} onChange={(event) => this.handleChangeJob(event)} />
                    <input type="" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} />
                    <button onClick={() => this.handleAdd()}>ADD</button>
                </div>
            </>
        )
    }
};

export default InputJob;