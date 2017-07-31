/**
 * Created by nttao on 7/28/2017.
 */
import React from 'react';
import {storiesOf} from  '@storybook/react';
import Tabs, {Tab,Ta} from 'material-ui/Tabs';
import TabsComponent from './../MaterialUiComponents/TabsComponent';

const TabContainer = props =>(
  <div style={{ padding: 20 }}>
    {props.children}
  </div>
);
var index=0;
function onTabChange(event, i){
  index = i;
}
storiesOf("material-ui.Tabs", module)
  .add("Tabs", ()=>(
    <TabsComponent/>
  ));
/*<div>
  <Tabs index={index} onChange={onTabChange}>
    <Tab index={0} label="Tab1">
    </Tab>
    <Tab index={1} label="Tab2">
    </Tab>
    <Tab index={2} label="Tab3">
    </Tab>
  </Tabs>
  {index === 0 &&
  <TabContainer>
    {'Item One'}
  </TabContainer>}
  {index === 1 &&
  <TabContainer>
    {'Item Two'}
  </TabContainer>}
  {index === 2 &&
  <TabContainer>
    {'Item Three'}
  </TabContainer>}
</div>*/
