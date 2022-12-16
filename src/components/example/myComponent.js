import React from "react";
import RenderListJob from "./renderListJob";
import InputJob from "./inputJob";
import '../../styles/example.scss';

class Mycomponent extends React.Component {
    state = {
        listJob: [
            { id: 'J0', job: 'doctor', salary: '10000' },
            { id: 'J1', job: 'nurse', salary: '7000' },
            { id: 'J2', job: 'teacher', salary: '5000' },
        ]
    }
    handleAnewJob = (aJob) => {
        let currentListJob = [...this.state.listJob, aJob];
        this.setState({
            listJob: currentListJob
        })
    }

    handleDeleteAjob = (job) => {
        let copyListJob = [...this.state.listJob];
        let currentListJob = copyListJob.filter(item => item.id !== job.id);
        this.setState({
            listJob: currentListJob,
        })
    }

    handleEditAjob = (CurrentListJob) => {
        this.setState({
            listJob: CurrentListJob
        })
    }

    render() {
        let {listJob} = this.state;
        return(
            <div className="container-list-job">
                <InputJob handleAnewJob = {this.handleAnewJob}/>
                <RenderListJob 
                    listJob={listJob}
                    handleDeleteAjob={this.handleDeleteAjob}
                    handleEditAjob={this.handleEditAjob}
                />
            </div>
        )
    }
};

export default Mycomponent;