import React, { Component } from 'react'
import api from '../../api'
import PropTypes from 'prop-types'

import {

    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    IconButton,

} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';


export default class LopHoc extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleDelete = async (event) => {
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
    render() {
        const { history } = this.props
        return (

            <ListItem button >
                <ListItemIcon>
                    <Checkbox
                        edge="start"

                    />
                </ListItemIcon>
                <ListItemText id={this.props.lop.idClass} primary={this.props.lop.className}
                    onClick={() => {
                        history.push(`/class/${this.props.lop.idClass}`)
                    }}
                />
                <ListItemSecondaryAction >
                    <IconButton edge="end">
                        <DeleteIcon
                            id={this.props.lop.idClass}
                            onClick={this.handleDelete}

                        />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

        )
    }
}
