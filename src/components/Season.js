import React, { Component } from 'react';
import Spinner from './Spinner';

class Season extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null, errorMsg: new Date().tol
        };
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
                console.log(position);
            },
            err => {
                this.setState({
                    errorMsg: err.message
                })
            }
        )
    }
    // RENDER CONTENT() POMOGAYUSHAYA FUNKCIYA

    renderContent() {
        if (!this.state.lat && this.state.errorMsg) {
            return (
                <div>
                    <h3 class="ui black top attached header">
                        <i class="meh outline icon"></i> {this.state.errorMsg}

                    </h3>
                </div>
            )
        }
        if (this.state.lat && !this.state.errorMsg) {
            return (
                <div>
                    <h3 class="ui yellow top attached header">
                        <i class="sun icon"></i>
                    </h3>
                    <h3 class="ui red  attached header">
                        <h1> {this.state.lat} </h1>
                    </h3>

                    <h3 class="ui yellow bottom  attached header">
                        <i class="sun icon"></i>
                    </h3>
                </div>
            )
        }
        return (
            <Spinner message="Please accept request..." />
        )
    }
    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>

    }
}

export default Season;
