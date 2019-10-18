import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserAssetsItems extends Component {

    render() {
        let assetStyle = {
            card: {
                display: 'inline-block',
                background: '#333',
                width: '350px',
                height: '160px',
                textAlign: 'left',
                padding: '20px',
                margin: '20px',
                border: '5px solid #333',
                color: 'white'
            }
        }
        return (
            <div style = { assetStyle.card }>
                <p>Description: {this.props.asset.assetType}</p>
                <p> Value: {this.props.asset.value}</p>
            </div>

        )
    }

}

//PropTypes
UserAssetsItems.propTypes = {
    asset: PropTypes.object.isRequired
}