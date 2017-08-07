/**
 * Created by nttao on 8/3/2017.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Autosuggest from 'react-autosuggest';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import MenuItem from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const styleSheet = createStyleSheet({
  container: {
    width: '100%'
  },
  inputField: {
    margin:20
  }
});

class Autocomplet extends Component {

  constructor(props){
    super(props);
    this.state = {suggestions: [],
      value: ""
    };
    this.getSuggestions = this.getSuggestions.bind(this);
    this.clearSuggestions = this.clearSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  renderInput(inputProps){
    const {classes, value, ref,label, ...other} = inputProps;
    return(
      <TextField className={classes.inputField} label={label} value={value} inputRef={ref}
                 InputProps={{
                   classes: {
                     input: classes.input
                   },
                   ...other
                 }}/>
    );
  }
  renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <div>
          {parts.map((part, index) => {
            return part.highlight
              ? <span key={index} style={{ fontWeight: 300 }}>
                  {part.text}
                </span>
              : <strong key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>;
          })}
        </div>
    );
  }
  renderSuggestionsContainer(options) {
    const { containerProps, children } = options;

    return (
      <Paper {...containerProps} square>
        {children}
      </Paper>
    );
  }
  getSuggestions({value}){
    const arrData = this.props.arrData;
    let len = value.trim().length;
    let suggestions = arrData.filter(item =>
      item.label.toLowerCase().slice(0,len) === value.trim().toLowerCase());
    this.setState({
      suggestions: suggestions
    });
  }
  clearSuggestions(){
    this.setState({
      suggestions: []
    });
  }
  getSuggestionValue(suggestion){
    return suggestion.label;
  }

  onChange = (event, {newValue}) => {
  console.log('onchange-------------------');
  this.setState({
    value: newValue
  });
};
  render(){
    const { classes, label } = this.props;
    return(
      <Autosuggest
        renderInputComponent={this.renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.getSuggestions}
        onSuggestionsClearRequested={this.clearSuggestions}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          label:label,
          placeholder: 'Search a country (start with a)',
          classes: classes,
          value: this.state.value,
          onChange: this.onChange
        }}
      >
      </Autosuggest>
    );
  }
}
export default withStyles(styleSheet)(Autocomplet);
