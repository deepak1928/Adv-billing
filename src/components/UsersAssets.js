import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserAssetsItems from './UserAssetsItems'

class UserAssets extends Component {

    render() {

        return (
            <div>
                {this.props.assets.map((asset) => (
                    <UserAssetsItems key={asset.id} asset={asset}/>
                ))}
            </div>

        )}
}

//PropTypes
UserAssets.propTypes = {
    assets: PropTypes.array.isRequired
}

export default UserAssets;