/**
 * Created by nkim on 8/16/2017.
 */
import { configure } from '@storybook/react';

function loadStories() {
    require('../src/stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module);