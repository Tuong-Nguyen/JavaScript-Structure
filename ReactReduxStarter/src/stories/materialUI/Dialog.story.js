/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import DialogComponent from "../MaterialUiComponents/DialogComponent";
storiesOf("Material-ui.Dialog", module)
.add("Dialog infor", withInfo("infor")(()=>(
  <Dialog open={false}>
    <DialogTitle>
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="primary">
        Disagree
      </Button>
      <Button color="primary">
        Agree
      </Button>
    </DialogActions>
  </Dialog>
)))
.add("Dialog", ()=>(
  <DialogComponent/>
));
