import { Option } from "@/data/interfaces/Option";

export const FONT_DISPLAY_VALUE_NORMAL = 'Normal'
export const FONT_DISPLAY_VALUE_SEMIBOLD = 'Semibold'
export const FONT_DISPLAY_VALUE_BOLD = 'Bold'

export const fontWeightOptions = (): Option[] => [{
    id: crypto.randomUUID(),
    displayValue: 'Normal',
    value: 400
}, {
    id: crypto.randomUUID(),
    displayValue: 'Semibold',
    value: 600
}, {
    id: crypto.randomUUID(),
    displayValue: 'Bold',
    value: 700
}]

export const textAlignOptions = (): Option[] => [{
    id: crypto.randomUUID(),
    displayValue: 'Start',
    value: 'start'
}, {
    id: crypto.randomUUID(),
    displayValue: 'Center',
    value: 'center'
}, {
    id: crypto.randomUUID(),
    displayValue: 'End',
    value: 'end'
}]
