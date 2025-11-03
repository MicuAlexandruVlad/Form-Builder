"use client"

import SearchInput from "@/components/searchInput/SearchInput"
import React, { useState } from "react"

type ComponentPickerProps = {}

const ComponentPicker: React.FC<ComponentPickerProps> = ({}) => {
    const [searchValue, setSearchValue] = useState('')
    
    return (
        <div className="flex flex-1/5 items-start h-full border-r border-gray-600 bg-[#1a2023] p-4">
            <SearchInput
                value={ searchValue }
                onChange={ setSearchValue }
                placeholder="Search Components"
            />
        </div>
    )
}

export default ComponentPicker
