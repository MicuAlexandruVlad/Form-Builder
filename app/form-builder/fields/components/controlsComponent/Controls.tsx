"use client"

import DropdownInput from "@/components/inputs/dropdownInput/DropdownInput"
import { BaseControl, NumberInputControl, OptionPickerInputControl, TextInputControl } from "@/data/interfaces/Control"
import { Option } from "@/data/interfaces/Option"
import { useControlHooks } from "@/hooks/formBuilder/fields/controlsComponentHooks/ControlHooks"
import React from "react"

type ControlsProps = {}

const Controls: React.FC<ControlsProps> = ({}) => {
    const {
        controls,
        updateComponentControls
    } = useControlHooks()

    const renderControl = (control: BaseControl) => {
        switch (control.type) {
            case 'textInput': {
                const textInputControl = control as TextInputControl

                return (
                    <div className="flex flex-col gap-2" key={ control.id }>
                        <span className="">{ textInputControl.label }</span>
                        <input
                            value={ textInputControl.value }
                            type='text'
                            placeholder={ `${textInputControl.defaultValue || ''}` }
                            className="p-2 border border-gray-600 rounded-xl"
                            onChange={ (e) => {
                                const updatedControl: TextInputControl = {
                                    ...textInputControl,
                                    value: e.target.value
                                }
                                updateComponentControls(updatedControl)
                            } }
                        />
                    </div>
                )
            }

            case 'numberInput': {
                const numberInputControl = control as NumberInputControl

                return (
                    <div className="flex flex-col gap-2" key={ control.id }>
                        <span className="">{ numberInputControl.label }</span>
                        <input
                            value={ numberInputControl.value || numberInputControl.defaultValue }
                            type='number'
                            placeholder={ numberInputControl.placeholder }
                            min={ numberInputControl.min }
                            max={ numberInputControl.max }
                            step={ numberInputControl.step }
                            className="p-2 border border-gray-600 rounded-xl"
                            onChange={ (e) => {
                                const updatedControl: NumberInputControl = {
                                    ...numberInputControl,
                                    value: parseInt(e.target.value)
                                }

                                updateComponentControls(updatedControl)
                            }}
                            onBlur={ (e) => {
                                const v = parseInt(e.target.value)
                                const correctedValue = v < numberInputControl.min ?
                                    numberInputControl.min
                                    :
                                    v > numberInputControl.max ?
                                    numberInputControl.max
                                    :
                                    v
                                
                                const updatedControl: NumberInputControl = {
                                    ...numberInputControl,
                                    value: correctedValue
                                }
                                
                                updateComponentControls(updatedControl)
                            }}
                        />
                    </div>
                )
            }

            case 'optionPicker': {
                const optionControl = control as OptionPickerInputControl

                const handleChange = (option: Option) => {
                    const updatedControl: OptionPickerInputControl = {
                        ...optionControl,
                        value: option.value
                    }

                    updateComponentControls(updatedControl)
                }

                return (
                    <DropdownInput
                        key={ optionControl.id }
                        label={ optionControl.label }
                        value={ optionControl.value }
                        options={ optionControl.options }
                        onChange={ handleChange }
                    />
                )
            }

            default: return (
                <div key={ control.id }>DEFAULT</div>
            )
        }
    }

    const renderComponentControls = () => {
        if (controls && controls.length > 0) {
            return (
                <div className="flex flex-col gap-4">
                {
                    controls.map((control: BaseControl, i: number) => {
                        return renderControl(control)
                    })
                }
                </div>
            )
        }

        return (
            <div className="flex h-full items-center justify-center">
                <span className="opacity-20 text-center tracking-widest font-light text-lg">
                {
                    !controls ? 'No selected component'
                    :
                    controls.length == 0 && 'Selected component has no controls'
                }
                </span>
            </div>
        )
    }
    
    return (
        <div className="flex flex-col flex-1/5 bg-[#1a2023] p-4 border-gray-600 border-l">
            <span className="text-lg font-bold mb-6">Controls</span>
            { renderComponentControls() }
        </div>
    )
}

export default Controls
