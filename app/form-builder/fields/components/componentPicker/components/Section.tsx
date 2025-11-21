import React from "react"

type SectionProps = {
    title: string
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
    title, children
}) => {
    return (
        <div className="flex flex-col gap-3">
            <span className="font-bold">{ title }</span>
            <div className="flex flex-row gap-2 flex-wrap">
                { children }
            </div>
        </div>
    )
}

export default Section
