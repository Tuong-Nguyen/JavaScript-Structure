import React, {Component, PropTypes} from 'react';

export class LyricCreate extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {content: ''};
    }

    handleChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addLyric(this.state.content);
    }

    render() {
        return (
            <div>
                <h3>Add Lyric</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

LyricCreate.propTypes = {
    /**
     * addLyric to a song
     */
    addLyric: PropTypes.func
};