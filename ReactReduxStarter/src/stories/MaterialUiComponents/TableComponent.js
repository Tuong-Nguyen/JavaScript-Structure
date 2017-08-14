import React from 'react';
import Table, {TableRow, TableCell, TableBody, TableHead} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import TrendingUp from 'material-ui-icons/TrendingUp';
import TrendingDown from 'material-ui-icons/TrendingDown';


export default class SelectTable extends React.Component{
  constructor(){
    super();
    this.state = {
      selected:[]
    };
    this.isSelected = this.isSelected.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
  }
  onItemSelect(event, id){
    let selected = this.state.selected;
    let selectedIndex = selected.indexOf(id);
    if(selectedIndex == -1){
      selected.push(id);
      this.setState({
        selected: selected
      })
    }else if(selectedIndex >=0){
      selected.splice(selectedIndex, 1);
      this.setState({
        selected: selected
      })
    }
  }
  isSelected(id){
    if (this.state.selected.indexOf(id) >=0){
      return true;
    }
    return false;
  }
  render(){
    const columnData = this.props.data;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Age
              </TableCell>
              <TableCell>
                Gender
              </TableCell>
              <TableCell>
                Select
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columnData.map(item =>{
              const isSelected = this.isSelected(item.id)
              return(
                <TableRow
                  hover
                  onClick={event => this.onItemSelect(event, item.id)}
                  role="checkbox"
                  aria-checked={isSelected}
                  key={item.id}
                  selected={isSelected}>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.age}
                  </TableCell>
                  <TableCell>
                    {item.gender}
                  </TableCell>
                  <TableCell>
                    <Checkbox checked={isSelected}/>
                  </TableCell>
                </TableRow>);
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
export class SortTable extends React.Component{
  constructor(){
    super();
    this.state = {
      selected:[],
      IncreaseSort: true,
      direct:'asc'
    };
    this.isSelected = this.isSelected.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.sortAge = this.sortAge.bind(this);
    this.sortName = this.sortName.bind(this);
  }
  onItemSelect(event, id){
    let selected = this.state.selected;
    let selectedIndex = selected.indexOf(id);
    if(selectedIndex == -1){
      selected.push(id);
      this.setState({
        selected: selected
      })
    }else if(selectedIndex >=0){
      selected.splice(selectedIndex, 1);
      this.setState({
        selected: selected
      })
    }
  }
  isSelected(id){
    if (this.state.selected.indexOf(id) >=0){
      return true;
    }
    return false;
  }
  sortAge(){
    if(this.state.IncreaseSort){
      this.setState({IncreaseSort: false});
      return this.props.data.sort(function(a, b){
        return (a.age - b.age);
      });
    }else{
      this.setState({IncreaseSort: true});
      return this.props.data.sort(function(a, b){
        return (b.age - a.age);
      });
    }
  }
  sortName(){
    if(this.state.direct == 'asc'){
      this.setState({direct: 'desc'});
      return this.props.data.sort(function(a, b){
        return (a.name > b.name);
      });
    }else{
      this.setState({direct: 'asc'});
      return this.props.data.sort(function(a, b){
        return (b.name > a.name);
      });
    }
  }
  render(){
    const columnData = this.props.data;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel active={true} direction={this.state.direct} onClick={this.sortName}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <IconButton onClick={this.sortAge}>
                  {this.state.IncreaseSort == true?<TrendingDown/> : <TrendingUp/>}
                </IconButton>
                Age
              </TableCell>
              <TableCell>
                Gender
              </TableCell>
              <TableCell>
                Select
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columnData.map(item =>{
              const isSelected = this.isSelected(item.id)
              return(
                <TableRow
                  hover
                  onClick={event => this.onItemSelect(event, item.id)}
                  key={item.id}
                  selected={isSelected}>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.age}
                  </TableCell>
                  <TableCell>
                    {item.gender}
                  </TableCell>
                  <TableCell>
                    <Checkbox checked={isSelected}/>
                  </TableCell>
                </TableRow>);
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
