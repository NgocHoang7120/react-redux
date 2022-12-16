import React from "react";
import { toast } from 'react-toastify';

class RenderListJob extends React.Component {
    state = {
        jobTemp: {}
    }

    handleDeleteBTN = (job) => {
        this.props.handleDeleteAjob(job);
        toast.success('Delete done !', {
            autoClose: 1000 
        })
    }

    handleEditBTN = (job) => {
        let {jobTemp} = this.state;
        let isEmptyObj = Object.keys(jobTemp).length === 0;
        if(isEmptyObj === false) {
            let copyListJob = [...this.props.listJob];
            // console.log(">>>check copyListJob:", copyListJob);
            let objIndex = copyListJob.findIndex((item => item.id === job.id));
            copyListJob[objIndex].job = jobTemp.job;
            copyListJob[objIndex].salary = jobTemp.salary;
            this.props.handleEditAjob(copyListJob);
            this.setState({
                jobTemp: {}
            })
            toast.info('Edit done !', {
                autoClose: 1000
            })
        } else {
            this.setState({
                jobTemp: job
            })
        }

    }

    handleChangeJob = (event) =>  {
        let copyAjob = this.state.jobTemp;
        copyAjob.job = event.target.value;
        this.setState({
            jobTemp: copyAjob
        })
    }

    handleChangeSalary = (event) => {
        let copyAjob = this.state.jobTemp;
        copyAjob.salary = event.target.value;
        this.setState({
            jobTemp: copyAjob
        })
    }

    render() {
        // console.log(">>>check props from myComponents: ", this.props.listJob);
        let {jobTemp} = this.state;
        let isEmptyObj = Object.keys(jobTemp).length === 0;
        // console.log(">>>check isEmtyObj: ", isEmptyObj);
        return(
            <div className="list-job">
                
                {this.props.listJob && this.props.listJob.length > 0 &&
                    this.props.listJob.map((item, index) => {
                        return(
                                <div key={item.id}>
                                    {isEmptyObj === true ?
                                        <>
                                            {index + 1}: {item.job} - {item.salary}$ &nbsp;
                                            <button onClick={() => this.handleDeleteBTN(item)}>Delete</button>
                                        </>:
                                        <>
                                        {item.id === jobTemp.id ?
                                            <>
                                                <input value={jobTemp.job} onChange = {event => this.handleChangeJob(event)}/>
                                                <input value={jobTemp.salary} onChange = {event => this.handleChangeSalary(event)}/>
                                            </>:
                                            <>
                                                {index + 1}: {item.job} - {item.salary}$ &nbsp;
                                                <button onClick={() => this.handleDeleteBTN(item)}>Delete</button>
                                            </>
                                        }
                                        </>
                                    }  
                                    <button type="" onClick={() => this.handleEditBTN(item)}>
                                        {isEmptyObj === false && jobTemp.id === item.id ?
                                            'Save': 'Edit'
                                        }
                                    </button>

                                </div>
                        )
                    })

                }
            </div>
        )
    }
};

export default RenderListJob;