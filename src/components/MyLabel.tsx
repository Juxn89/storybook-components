import React from 'react';
import './MyLabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
  /**
  * Label contents
  */
  label: string,
  /**
  * How large should the button be?
  */
  size: 'normal' | 'h1' | 'h2' | 'h3',
  /**
  * Are all letters capitalized?
  */
  allCaps: boolean,
  /**
  * Color of the label
  */
  color: 'primary' | 'secondary' | 'tertiary'
  /*
  * Custom font color
  */
  fontColor?: string
}

export const MyLabel = ( { label = 'No label', size = 'normal', allCaps = false, color = 'primary', fontColor }: MyLabelProps ) => {
  return (
    <span className={ `label ${size} text-${color}` } style={ { color: fontColor} }> { allCaps ? label.toUpperCase() : label } </span>
  )
}
