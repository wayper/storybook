import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const butonClicked = e => {
  e.preventDefault();
  alert("Hello");
};

export const basicButton = () => {
  return <Button variant="secondary">Basic button</Button>;
};
export const funcButton = () => (
  <Button onClick={butonClicked}>Fuction button</ Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

export default {
  title: 'Button',
  component: Button,
};
