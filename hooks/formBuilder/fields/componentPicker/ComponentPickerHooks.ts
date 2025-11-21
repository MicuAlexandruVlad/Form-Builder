import { Container, Header } from "@/data/interfaces/Component"
import { NumberInputControl, OptionPickerInputControl, TextInputControl } from "@/data/interfaces/Control"
import { addComponentToCanvasAtom } from "@/store/formBuilder/FormBuilderStore"
import { searchValueAtom } from "@/store/formBuilder/FormFieldsViewStore"
import { FONT_DISPLAY_VALUE_SEMIBOLD, fontWeightOptions, textAlignOptions } from "@/utils/Constants"
import { useAtom, useSetAtom } from "jotai"

export const useComponentPickerHooks = () => {
    const [searchValue, setSearchValue] = useAtom(searchValueAtom)
    const addComponentToCanvas = useSetAtom(addComponentToCanvasAtom)
    
    const handleContainerPress = () => {
        const componentId = crypto.randomUUID()
        
        const container: Container = {
            id: componentId,
            styles: {},
            children: [],
            type: 'container',
            controls: []
        }
        
        addComponentToCanvas(container)
    }

    const handleHeaderPress = () => {        
        const titleControl: TextInputControl<Header> = {
            id: crypto.randomUUID(),
            type: 'textInput',
            label: 'Header Title',
            value: '',
            defaultValue: 'Enter header title...',
            property: 'title'
        }

        const fontSizeControl: NumberInputControl<Header> = {
            id: crypto.randomUUID(),
            defaultValue: 20,
            label: 'Font Size',
            placeholder: 'Enter font size...',
            property: 'fontSize',
            type: 'numberInput',
            value: 20,
            min: 14,
            max: 40,
            step: 1
        }

        const fontWeightControl: OptionPickerInputControl<Header> = {
            id: crypto.randomUUID(),
            defaultValue: FONT_DISPLAY_VALUE_SEMIBOLD,
            label: 'Font Weight',
            options: [ ...fontWeightOptions() ],
            placeholder: 'Select a font weight',
            property: 'fontWeight',
            type: 'optionPicker',
            value: fontWeightOptions()[1].value as number
        }

        const textAlignControl: OptionPickerInputControl<Header> = {
            id: crypto.randomUUID(),
            defaultValue: textAlignOptions()[0].displayValue,
            label: 'Font Weight',
            options: [ ...textAlignOptions() ],
            placeholder: 'Select text alignment',
            property: 'textAlign',
            type: 'optionPicker',
            value: textAlignOptions()[0].value
        }
        
        const header: Header = {
            id: crypto.randomUUID(),
            styles: {},
            type: 'header',
            title: 'Enter header title...',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'start',
            controls: [ titleControl, fontSizeControl, fontWeightControl, textAlignControl ]
        }
        
        addComponentToCanvas(header)
    }

    return {
        searchValue,
        setSearchValue,
        handleContainerPress,
        handleHeaderPress
    }
}
