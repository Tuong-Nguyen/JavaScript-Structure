/**
 * Created by nttao on 8/4/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Search from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';
import {createMuiTheme, MuiThemeProvider, withStyles, createStyleSheet} from 'material-ui/styles';
import Autosuggest from 'react-autosuggest';
import Paper from 'material-ui/Paper';

const arrdata = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];


const styleSheet = createStyleSheet({
  container:{
    display: 'flex',
    backgroundColor:'#7986CB',
    padding:5
  },
  searchInput:{
    backgroundColor:'#7986CB',
    color: "#FFFFFF",
    border: 'none',
    fontSize:18,
    outline: 'none',
    paddingLeft:10
  }
});

class SearchBox extends React.Component{
  constructor(){
    super();
    this.state={
      suggestions: [],
      value: ""
    };
    this.getSuggestion = this.getSuggestion.bind(this);
    this.clearSuggestion = this.clearSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  renderInput(inputProps){
    const {classes, value, ref, ...other} = inputProps;
    return(
      <TextField className={classes.searchInput} inputRef={ref} value={value}
        InputProps={{
          classes: {
            input: classes.input
          },
          ...other
        }}/>
    );
  }
  renderSuggestion(suggestion) {
    return (
      <div>
        <span style={{color: "#000000"}}>{suggestion.label}</span>
      </div>
    );
  }
  getSuggestion({value}){
    let suggestions = arrdata.filter(item =>
      item.label.toLowerCase().slice(0, value.length) === value.toLowerCase().trim()
    );
    this.setState({
      suggestions: suggestions
    });
  }
  clearSuggestion(){
    this.setState({
      suggestions: []
    })
  }
  getSuggestionValue(suggestion){
    return suggestion.label;
  }
  renderSuggestionsContainer(options) {
    const { containerProps, children } = options;
    return (
      <Paper {...containerProps} square style={{position:"absolute", zIndex:100, width:200}}>
        {children}
      </Paper>
    );
  }
  onChange(event, {newValue}){
    this.setState({
      value: newValue
    });
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.container}>
        <Search/><Autosuggest
        renderInputComponent = {this.renderInput}
        suggestions = {this.state.suggestions}
        onSuggestionsFetchRequested = {this.getSuggestion}
        onSuggestionsClearRequested = {this.clearSuggestion}
        renderSuggestion={this.renderSuggestion}
        renderSuggestionsContainer = {this.renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        inputProps={{
          classes: classes,
          value: this.state.value,
          onChange: this.onChange
        }}/>
      </div>
    );
  }
}
SearchBox.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styleSheet)(SearchBox);
