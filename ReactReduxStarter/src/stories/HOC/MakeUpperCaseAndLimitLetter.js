/**
 * Created by lnthao on 8/10/2017.
 */
import React from 'react';

export const makeUpperCaseAndLimitLetter = (limitLetter) => (WrappedComponent) => {
  return class MakeUpperCaseAndLimitLetter extends React.Component {
    render() {
      let title = this.props.title;
      if (title.length > limitLetter) {
        title = title.substring(0, limitLetter) + '...';
      }
      const props = Object.assign({}, this.props, {
        title: title.toUpperCase()
      });

      return <WrappedComponent { ...props } />
    }
  };
};
