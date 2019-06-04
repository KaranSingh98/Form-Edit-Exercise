import React, {Component} from 'react';
import PropType from 'prop-types';

class FormEdit extends Component {

    constructor(props) {

        super(props);

        this.state = {

            firstName: "First Name",
            lastName: "Last Name",
            editClick: false
        };
    }

    handleChange = event => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    setButton = () => {

        this.setState({
            editClick: !this.state.editClick
        });
    };

    displayForm = () => {

        if(this.state.editClick) {

            return (
                <div>
                    <form>
                        <input type="text" name="firstName" onChange={this.handleChange}/>
                        <input type="text" name="lastName" onChange={this.handleChange}/>
                    </form>
                    <button onClick={this.setButton}> Save </button>
                    <button onClick={this.setButton}> Cancel </button>
                </div>
            );
        }

        else {

            return (
                <div>
                    <div className="firstName">
                        <h3> {this.state.firstName} </h3>
                    </div>
                    <div className="lastName">
                        <h3> {this.state.lastName} </h3>
                    </div>
                    <button onClick={this.setButton}> Edit </button>
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                {this.displayForm()}
            </div>
        );
    }
};

export default FormEdit;
