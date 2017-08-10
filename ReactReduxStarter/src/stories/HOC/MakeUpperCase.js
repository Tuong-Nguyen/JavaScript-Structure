/**
 * Created by lnthao on 8/10/2017.
 */
import React from 'react';

export const makeUpperCase = (WrappedComponent) => {
  return class MakeUpperCase extends React.Component {
    render() {
      const props = Object.assign({}, this.props, {
        title: this.props.title.toUpperCase()
      });

      return <WrappedComponent { ...props } />
    }
  };
};
