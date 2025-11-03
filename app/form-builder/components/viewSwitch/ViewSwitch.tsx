import { ViewMode, ViewModes } from "@/data/types/ViewModes"
import React, { useEffect, useRef, useState } from "react"

type ViewSwitchProps = {
    view: ViewMode
    onSwitch: (v: ViewMode) => void
}

const ViewSwitch: React.FC<ViewSwitchProps> = ({ view, onSwitch }) => {
    const [activePillCoordinates, setActivePillCoordinates] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    })
    
    const refFields = useRef(null)
    const refWorkflow = useRef(null)
    const refPermissions = useRef(null)
    const parentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const getCoordinates = (ref: React.RefObject<HTMLSpanElement | null>) => {
            if (!ref.current || !parentRef.current) {
                return {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }
            }
            
            const parentRect = parentRef.current.getBoundingClientRect();
            const rect = ref.current.getBoundingClientRect();

            return {
                width: rect.width,
                height: rect.height,
                top: rect.top - parentRect.top,
                left: rect.left - parentRect.left,
            }
        }
        
        switch (view) {
            case "Fields":
                setActivePillCoordinates(getCoordinates(refFields));
                break;
            case "Workflow":
                setActivePillCoordinates(getCoordinates(refWorkflow));
                break;
            case "Permissions":
                setActivePillCoordinates(getCoordinates(refPermissions));
                break;
            default:
                setActivePillCoordinates(getCoordinates(refFields));
                break;
        }
    }, [view])



    
    return (
        <div
            ref={ parentRef }
            className="flex p-[2] flex-row relative max-w-fit bg-gray-700 rounded-xl gap-4">
            <div
                style={{
                    width: activePillCoordinates.width,
                    height: activePillCoordinates.height,
                    top: activePillCoordinates.top,
                    left: activePillCoordinates.left
                }}
                className="absolute py-2 transition-all bg-[#1a2023] z-0 rounded-xl" />
            <span
                onClick={ () => onSwitch(ViewModes.Fields) }
                className="px-3 py-2 cursor-pointer transition-colors hover:bg-[#1a20234f] rounded-xl z-1" ref={ refFields }>{ ViewModes.Fields }</span>
            <span
                onClick={ () => onSwitch(ViewModes.Workflow) }
                className="px-3 py-2 cursor-pointer transition-colors hover:bg-[#1a20234f] rounded-xl z-1" ref={ refWorkflow }>{ ViewModes.Workflow }</span>
            <span
                onClick={ () => onSwitch(ViewModes.Permissions) }
                className="px-3 py-2 cursor-pointer transition-colors hover:bg-[#1a20234f] rounded-xl z-1" ref={ refPermissions }>{ ViewModes.Permissions }</span>
        </div>
    )
}

export default ViewSwitch
