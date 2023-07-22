import React, { Component } from 'react'
import api from '../../api'
import {
    List,
    Tooltip,
    Fab,
    Button
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router'
import LopHoc from './LopHoc';

class index extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            listClass: [],
            message: '',
            open: false,
            classI: {

                classNameI: ''
            }
        }
    }

    openClick = () => {
        this.setState({
            open: true
        })
    }
    closeClick = () => {
        this.setState({
            open: false
        })
    }

    addClass = async (body) => {
        const req = await api.user.addClass(body = {
            className: this.state.classI.classNameI
        }
        )
        if (req.status) {
            alert('tao lop hoc thanh cong')
            window.location = '/'
        } else {
            alert('tao lop hoc that bai')
            window.location = '/'
        }
    }
    handleChange = (event) => {
        this.setState({
            classI: {
                classNameI: event.target.value
            }
        })
    }

    deleteClass = async (event) => {
        const id = event.target.id
        const req = await api.user.deleteClass(id)
        if (req.status) {
            alert('xoa tai khoan thanh cong')
            window.location = '/'
        } else {
            alert('xoa tai khoan that bai')
            window.location = '/'
        }
    }

    async fetchData() {
        const res = await api.user.getAllClass()
        if (res.status) {
            this.setState({
                listClass: res.data,
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

        return (
            <div>
                <h1>Total Class: {this.state.listClass.length}</h1>
                <List>
                    {this.state.listClass.map(c => (
                        <LopHoc lop={c} />
                    ))

                    }
                </List>

                <Tooltip title="Add" aria-label="add" >
                    <Fab color="secondary" style={{ position: "absolute", top: 2, right: 3 }}>
                        <AddIcon onClick={this.openClick} />
                    </Fab>
                </Tooltip>

                <Dialog open={this.state.open} onClose={this.closeClick} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Adding classroom</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a new classroom, please enter the detail information of the class. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="Class Name"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeClick} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.addClass} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withRouter(index)