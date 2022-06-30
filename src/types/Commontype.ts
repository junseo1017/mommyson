import React from 'react';

export default interface CommonComponent {
  children?: React.ReactNode;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
