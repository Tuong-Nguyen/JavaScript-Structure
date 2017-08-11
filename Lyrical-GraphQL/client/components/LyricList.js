import React, {Component, PropTypes} from 'react';
import '../style/style.css';

export class LyricList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.likeLyric(event.target.parentElement.attributes["data-key"].value);
    }

    render() {
        return (
            <div>
                {
                    (this.props.isLoading === false) ?
                        <div className="collection">
                            {this.props.lyrics.map(lyric => {
                                return (
                                    <li key={lyric.id} data-key={lyric.id} className="collection-item">
                                        {lyric.content}
                                        <i className="material-icons" onClick={this.handleClick}>like</i>
                                    </li>
                                );
                            })}
                        </div>
                        :
                        <div>Loading...</div>
                }
            </div>
        );
    }
}

LyricList.propTypes = {
    /**
     * Data is loading or not
     */
    isLoading: PropTypes.bool,
    /**
     * List of lyrics
     */
    lyrics: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })),
    /**
     * likeLyric function
     */
    likeLyric: PropTypes.func
};