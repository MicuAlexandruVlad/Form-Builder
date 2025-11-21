import { TextAlign } from "../types/TextAlign"
import { BaseControl } from "./Control"

export interface BaseComponent {
    id: string
    type: 'container' | 'header'
    styles: React.CSSProperties
    controls: Array<BaseControl<any>>
}

export interface Container extends BaseComponent {
    type: 'container'
    children: BaseComponent[]
}

export interface Header extends BaseComponent {
    type: 'header'
    title: string
    fontSize: number
    fontWeight: number
    textAlign: TextAlign
}
