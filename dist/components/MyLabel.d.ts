/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
    * Label contents
    */
    label: string;
    /**
    * How large should the button be?
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Are all letters capitalized?
    */
    allCaps: boolean;
    /**
    * Color of the label
    */
    color: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
