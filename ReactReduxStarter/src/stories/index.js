/**
 * Created by nkim on 7/24/2017.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './../components/Button/Button';
import AboutPage from './../components/about/AboutPage';
import LoadingDots from './../components/common/LoadingDots';
import Header from './../components/common/Header';

storiesOf('Button', module)
  .add('default view', () => (
    <pre>
      process.env.STORYBOOK_CLOUD_URL: {process.env.STORYBOOK_CLOUD_URL}
      process.env.STORYBOOK_CLOUD_APPID: {process.env.STORYBOOK_CLOUD_APPID}
      process.env.STORYBOOK_CLOUD_DATABASE: {process.env.STORYBOOK_CLOUD_DATABASE}
    </pre>
  ))
  .add('link button', () => (
    <Button onClick={ linkTo('Button', 'some emojies as the text') }>Next Story</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#2337ff'
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });

storiesOf('AboutPage', module)
  .add('default view', () => (
    <AboutPage></AboutPage>
  ));

storiesOf('Loading dots', module)
  .add('default view', () => (
    <LoadingDots interval="100"
    dots="3" ></LoadingDots>
  ));

storiesOf('Header', module)
  .add('default view', () => (
    <Header loading={true} ></Header>
  ));
