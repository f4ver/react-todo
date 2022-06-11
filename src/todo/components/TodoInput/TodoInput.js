import React from "react";

export class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        if (event.target.value === '') {
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.create(this.state.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div className='d-flex'>
                <button onClick={this.props.completeAll} type="button" className="allBtn"></button>
                <input onKeyPress={this.handleSubmit} onChange={this.handleChange} type='text' placeholder= "What needs to be done?" className='form-control' />
            </div>
        );
    }
}