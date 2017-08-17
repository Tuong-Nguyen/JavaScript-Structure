/**
 * Created by nkim on 8/17/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import NavLinkApp from '../../components/NavLinkApp';

const deactivateFunc = (match, location) => {
    console.log(match, location);
    return false;
}

storiesOf('NavLink', module)
    .add('style link active with activeClassName and activeStyle  ', () => (
       <NavLinkApp/>
    ))
    .add('deactivate Contact link with isActive prop', () => (
        <NavLinkApp activeContactFunc={deactivateFunc}/>
    ));