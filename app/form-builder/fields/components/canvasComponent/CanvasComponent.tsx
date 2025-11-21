"use client"

import { BaseComponent, Header } from "@/data/interfaces/Component"
import { useCanvasHooks } from "@/hooks/formBuilder/fields/canvas/CanvasHooks"
import React from "react"

type CanvasComponentProps = {}

const CanvasComponent: React.FC<CanvasComponentProps> = ({}) => {
    const {
        hasComponents,
        canvasComponents,
        selectedComponent,
        setSelectedComponent
    } = useCanvasHooks()

    const renderComponentInCanvas = (c: BaseComponent) => {        
        switch (c.type) {
            case 'container': {
                return <div
                    onClick={ () => setSelectedComponent(c) }
                    className={
                        `flex flex-1 p-4 border rounded ${ selectedComponent?.id === c.id ? 'border-[#2aacd5]' : 'border-gray-600' }  hover:border-[#2aadd5bd] cursor-pointer`
                    } key={ c.id }></div>
            }

            case 'header': {
                const component = c as Header
                
                return <span
                    onClick={ () => setSelectedComponent(component) }
                    className={
                        `hover:outline outline-offset-0 rounded 
                        ${ selectedComponent?.id === component.id && 'outline-[#2aacd5] outline' }
                        hover:outline-[#2aadd5bd] cursor-pointer
                        `
                    }
                    style={{
                        fontSize: component.fontSize,
                        fontWeight: component.fontWeight,
                        textAlign: component.textAlign
                    }}
                    key={ component.id }>{ component.title }</span>
            }

            default: {
                return <div key={ c.id }></div>
            }
        }
    }
    
    return (
        <div className="flex-3/5 h-full rounded-xl overflow-auto bg-[#1a2023] p-4">
            {
                !hasComponents ? (
                    <div className="flex items-center justify-center h-full">
                        <span className="text-4xl opacity-10 tracking-widest">Start by adding a component...</span>
                    </div>
                )
                :
                (
                    <div className="flex flex-col gap-4">
                    {
                        canvasComponents.map(c => renderComponentInCanvas(c))
                    }
                    </div>
                )
            }
        </div>
    )
}

export default CanvasComponent
