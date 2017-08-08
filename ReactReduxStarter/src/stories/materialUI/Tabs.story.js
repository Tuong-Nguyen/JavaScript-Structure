/**
 * Created by nttao on 7/28/2017.
 */
import React from 'react';
import {storiesOf} from  '@storybook/react';
import Tabs, {Tab,Ta} from 'material-ui/Tabs';
import TabsComponent, {ScrollTabsComponent, IconTabsComponent, IconWithTextTabsComponent, DisableTabsComponent} from './../MaterialUiComponents/TabsComponent';

const TabContainer = props =>(
  <div style={{ padding: 20 }}>
    {props.children}
  </div>
);
var index=0;
function onTabChange(event, i){
  index = i;
}
// TODO: Add scrollable tabs
// TODO: Add icon tabs
// TODO: Add icon with text tabs
// TODO: Add tabs has disabled tab
storiesOf("material-ui.Tabs", module)
  .add("Tabs", ()=>(
    <TabsComponent/>
  ))
  .add("sCROLL Tabs", ()=>(
    <ScrollTabsComponent/>
  )).add("Icon Tabs", ()=>(
    <IconTabsComponent/>
  )).add("Icon With Text Tabs", ()=>(
    <IconWithTextTabsComponent/>
  )).add("Disable Tabs", ()=>(
    <DisableTabsComponent/>
  ));
