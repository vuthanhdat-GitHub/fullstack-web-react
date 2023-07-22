import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {
    Button
} from '@material-ui/core'
class index extends Component {
    static propTypes = {
        locattion: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    render() {
        const { history } = this.props
        return (
            <div>
                <div style={{padding:8}} >
                    <Button
                        variant="contained" color="secondary"
                        onClick={() => {
                            history.push('/')
                        }}
                    >
                        HomePage
                    </Button>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default withRouter(index)