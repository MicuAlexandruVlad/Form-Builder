import { BaseComponent } from "@/data/interfaces/Component";
import { BaseControl } from "@/data/interfaces/Control";
import { ViewMode } from "@/data/types/ViewModes";
import { atom } from "jotai";


export const viewModeAtom = atom<ViewMode>("Fields")

export const canvasComponentsAtom = atom<BaseComponent[]>([])

export const selectedCanvasComponentAtom = atom<BaseComponent>()

export const hasComponentsAtom = atom(
    (get) => {
        return get(canvasComponentsAtom).length > 0
    }
)

export const addComponentToCanvasAtom = atom(
    null,
    (get, set, newComponent: BaseComponent) => {
        const components = get(canvasComponentsAtom)
        const updatedComponents = [ ...components, newComponent ]

        set(canvasComponentsAtom, updatedComponents)
    }
)

export const selectedComponentControls = atom(
    (get) => {
        const selectedComponent = get(selectedCanvasComponentAtom)
        const components = get(canvasComponentsAtom)

        if (selectedComponent) {
            const component = components.find(c => selectedComponent.id === c.id)
            
            if (component && component.controls.length) {
                return component.controls
            }

            return []
        }

        return null
    }
)

export const updateCanvasComponentControlsAtom = atom(
    null,
    (get, set, updatedControl: BaseControl) => {
        const selectedComponent = get(selectedCanvasComponentAtom)
        const components = get(canvasComponentsAtom)

        let updatedComponents = [ ...components ]

        if (selectedComponent) {
            updatedComponents = updatedComponents.map(c => {
                if (c.id === selectedComponent.id) {
                    let updatedComponent = {
                        ...c,
                        controls: c.controls.map(control => {
                            if (control.id === updatedControl.id) {
                                return { ...updatedControl }
                            }

                            return control
                        })
                    }

                    updatedComponent[updatedControl.property] = updatedControl.value || updatedControl.defaultValue
                    
                    return updatedComponent
                }

                return c
            })
        } else {
            return
        }

        set(canvasComponentsAtom, updatedComponents)
    }
)
