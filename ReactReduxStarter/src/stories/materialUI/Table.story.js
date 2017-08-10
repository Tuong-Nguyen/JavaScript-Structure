/**
 * Created by nttao on 7/28/2017.
 */
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Table, {TableRow, TableCell, TableBody, TableHead} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import SelectTable, {SortTable} from './../MaterialUiComponents/TableComponent';

const columnData = [
  {id:0, name:"ABCDES", age:22, gender:"Male"},
  {id:1, name:"WFSEVD", age:12, gender:"FeMale"},
  {id:2, name:"TEDVXR", age:53, gender:"FeMale"},
  {id:3, name:"DCSWAD", age:34, gender:"Male"},
  {id:4, name:"YHJIFD", age:46, gender:"Male"}
];


var isSelected = id => columnData[id].selected = true;

// TODO: Add table with numeric table cell
storiesOf("material-ui.Table", module)
  .add("Text Table", withInfo("Info")(()=>(
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>
            <TableCell numeric>
              Age
            </TableCell>
            <TableCell>
              Gender
            </TableCell>
            <TableCell>
              Gender
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {columnData.map(item =>{
            return(
            <TableRow>
              <TableCell>
                {item.name}
              </TableCell>
              <TableCell numeric>
                {item.age}
              </TableCell>
              <TableCell>
                {item.gender}
              </TableCell>
            </TableRow>);
          })}
        </TableBody>
      </Table>
    </div>
  )))
  .add("Select Table", withInfo("Info")(()=>(
    <SelectTable data={columnData}/>
  )))
  .add("Sort Table", withInfo("Info")(()=>(
  <div>
    <SortTable data={columnData}/>
  </div>
)));
