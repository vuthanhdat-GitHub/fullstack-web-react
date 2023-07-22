import React, { Component } from 'react'
import api from '../../api'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,
    Tooltip,
    Fab
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class index extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.state = {
            listStudent: [],
            message: '',
        }
    }

    deleteStudent = async (event) => {
        const id = event.target.id
        const req = await api.user.deleteStudent(id)
        if (req.status) {
            alert('xoa tai khoan thanh cong')
            window.location = `/`
        } else {
            alert('xoa tai khoan that bai')
            window.location = `/`
        }
    }

    async fetchData() {
        const { match: { params } } = this.props;
        const res = await api.user.getStudentByID(params.idClass)
        if (res.status) {
            this.setState({
                listStudent: res.data.data,
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
    onClickDirect = (url) => {
        window.location = `/student/${url}`
    }
    render() {
        const { history } = this.props
        return (
            <div>
                <h1>Hello classroom, there are {this.state.listStudent.length} students.</h1>
                <List>
                    {
                        this.state.listStudent.map(s => (
                            <ListItem button >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"

                                    />
                                </ListItemIcon>
                                <ListItemText id={s.idStudent} primary={s.fullName}
                                    onClick={() => {
                                        history.push(`/student/${s.idStudent}`)
                                    }}
                                />
                                <ListItemSecondaryAction >
                                    <IconButton edge="end">
                                        <DeleteIcon
                                            pointerEvents id={s.idStudent}
                                            onClick={this.deleteStudent}

                                        />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
                </List>
                <Tooltip title="Add" aria-label="add" >
                    <Fab color="secondary" style={{ position: "absolute", top: 2, right: 3 }}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        )
    }
}
export default withRouter(index)