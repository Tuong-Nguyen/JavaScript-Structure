/**
 * Created by lnthao on 8/14/2017.
 */
import React from 'react';

export const limitLetter = (limitLetter) => (WrappedComponent) => {
  return (props) => {
    let title = props.title;
    if (title.length > limitLetter) {
      title = title.substring(0, limitLetter) + '...';
    }
    const childProps = Object.assign({}, props, {
      title: title
    });

    return <WrappedComponent { ...childProps } />
  };
};
