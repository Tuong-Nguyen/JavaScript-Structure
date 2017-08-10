import React, {Component, PropTypes} from 'react';

/**
 * Form for adding a song
 */
export class SongForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.title = "";
    }

    handleChange(eventObject) {
        this.title = eventObject.target.value;
    }

    handleSubmit(eventObject) {
        eventObject.preventDefault();
        this.props.saveSong(this.title);
    }

    render() {
        return (
            <div>
                <h3>Create a song</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" onChange={this.handleChange}/>
                    <input type="submit"  value="Submit"/>
                </form>
            </div>
        );
    }
}

SongForm.propTypes = {
    /**
     * Callback function - when user clicks on Submit
     */
    saveSong: PropTypes.func.isRequired
};