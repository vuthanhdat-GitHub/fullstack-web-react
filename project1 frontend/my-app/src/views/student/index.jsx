import React, { Component } from 'react'
import api from '../../api'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core';


class index extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props)
        this.state = {
            student: [],
            message: '',
        }
    }
    async fetchData() {
        const { match: { params } } = this.props;
        const res = await api.user.getStudent(params.idStudent)
        if (res.status) {
            this.setState({
                student: res.data.data,
            })
        } else {
            this.setState({
                message: res.message
            })
        }
    }
    async componentDidMount() {
        await this.fetchData()
    }
    render() {
        const {history} = this.props
        return (
            <div>
                <Button variant="contained" color="primary" onClick={()=>{
                    history.push(`/class/${this.state.student.idClass}`)
                }}>Class</Button>
                <h1>Student information: </h1>
                <h2>Student name: {this.state.student.fullName}</h2>
                <h2>Gender: {this.state.student.gender}</h2>
                <h2>Age: {this.state.student.age}</h2>
            </div>
        )
    }
}
export default withRouter(index)