import React from 'react';

export interface CommonComponent {
  children?: React.ReactNode;
}

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
