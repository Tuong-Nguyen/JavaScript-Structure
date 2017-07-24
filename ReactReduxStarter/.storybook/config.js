/**
 * Created by nkim on 7/24/2017.
 */
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/index');
}

configure(loadStories, module);
