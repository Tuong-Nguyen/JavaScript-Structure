/**
 * Created by lnthao on 8/10/2017.
 */
import React from 'react';

export const makeUpperCaseAndLimitLetter = (limitLetter) => (WrappedComponent) => {
  return (props) => {
    let title = props.title;
    if (title.length > limitLetter) {
      title = title.substring(0, limitLetter) + '...';
    }
    const childProps = Object.assign({}, props, {
      title: title.toUpperCase()
    });

    return <WrappedComponent { ...childProps } />
  };
};
