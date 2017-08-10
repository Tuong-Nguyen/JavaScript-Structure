/**
 * Created by nttao on 8/10/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Typography from 'material-ui/Typography';

storiesOf("Material-ui.Typography", module)
  .add("Typogrphy", withInfo("Info")(()=>(
    <div>
      <Typography type="headline">
        Template Typography headline. type="headline"
      </Typography>
      <Typography type="body1">
        this is body. type="body1"
      </Typography>
    </div>
  )));
