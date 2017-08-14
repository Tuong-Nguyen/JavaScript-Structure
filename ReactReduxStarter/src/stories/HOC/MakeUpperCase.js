/**
 * Created by lnthao on 8/10/2017.
 */
import React from 'react';

export const makeUpperCase = (WrappedComponent) => {
  return (props) => {
    let title = props.title;
    const childProps = Object.assign({}, props, {
      title: title.toUpperCase()
    });

    return <WrappedComponent { ...childProps } />
  };
};
