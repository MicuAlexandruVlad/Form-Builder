import React, { JSX } from "react"

type ComponentItemProps = {
    icon: JSX.Element
    name: string
    disabled?: boolean
    onClick: () => void
}

const ComponentItem: React.FC<ComponentItemProps> = ({
    icon, name, onClick, disabled
}) => {
    return (
        <div
            onClick={ onClick }
            className={
                `flex flex-row gap-2 p-2 border border-gray-600 bg-[#232a2f]
                rounded-xl items-center transition-colors 
                ${ disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:bg-gray-700' }
                
                `
            }
        >
            { icon }
            <span className="font-normal">{ name }</span>
        </div>
    )
}


export default ComponentItem
