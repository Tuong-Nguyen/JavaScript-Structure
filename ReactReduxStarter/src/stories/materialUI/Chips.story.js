/* eslint-disable import/namespace */
/**
 * Created by nttao on 7/31/2017.
 */
import React from 'react';
import {storiesOf, action} from '@storybook/react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import ArrayChips from './../MaterialUiComponents/ArrayChipsComponent';
// eslint-disable-next-line import/namespace
import avata from './../resources/avata.jpg';


function handleRequestDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function AvataChip1(props) {
  return (
    <Chip
      avatar={<Avatar>MB</Avatar>}
      label="Clickable Chip"
      onClick={handleClick}
    />
  );
}
function AvataChip2(props) {
  return (
    <Chip
      avatar={<Avatar src={avata} />}
      label="Deletable Chip"
      onRequestDelete={handleRequestDelete}
    />
  );
}

storiesOf("material-ui.Chips", module)
  .add("Text Chip", ()=>(
    <Chip label="Text Chip"
      onClick={action("clicked")}>
    </Chip>
  )).add("Text Avata Chip", ()=>(
    <AvataChip1/>
  )).add("Image Avata Chip", ()=>(
    <AvataChip2/>
  )).add("Chip Array", ()=>(
    <ArrayChips/>
));

