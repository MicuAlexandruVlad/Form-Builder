import { BaseComponent, Container, Header } from "./Component";
import { Option } from "./Option";

export interface BaseControl<T extends BaseComponent = BaseComponent> {
    id: string
    type: 'textInput' | 'numberInput' | 'colorPicker' | 'optionPicker'
    label: string
    defaultValue: string | number
    property: keyof T
    value: any
}

export interface TextInputControl<T extends BaseComponent = BaseComponent> extends BaseControl<T> {
    type: 'textInput'
    value: string
}

export interface NumberInputControl<T extends BaseComponent = BaseComponent> extends BaseControl<T> {
    type: 'numberInput'
    placeholder: string
    defaultValue: number
    value: number
    min: number
    max: number
    step?: number
}

export interface OptionPickerInputControl<T extends BaseComponent = BaseComponent> extends BaseControl<T> {
    type: 'optionPicker'
    placeholder: string
    value: string | number
    options: Option[]
}

export interface ColorPickerControl<T extends BaseComponent = BaseComponent> extends BaseControl<T> {
    type: 'colorPicker'
    value: string
}

export type ComponentControl<T extends BaseComponent = BaseComponent> = 
    | TextInputControl<T> 
    | NumberInputControl<T> 
    | ColorPickerControl<T>
    | OptionPickerInputControl<T>