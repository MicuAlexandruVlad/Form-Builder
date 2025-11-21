"use client"

import SearchInput from "@/components/inputs/searchInput/SearchInput"
import React, { useState } from "react"
import ComponentItem from "./components/ComponentItem"
import Section from "./components/Section"
import { useComponentPickerHooks } from "@/hooks/formBuilder/fields/componentPicker/ComponentPickerHooks"

type ComponentPickerProps = {}

const ComponentPicker: React.FC<ComponentPickerProps> = ({}) => {
    const {
        searchValue, setSearchValue, handleContainerPress, handleHeaderPress
    } = useComponentPickerHooks()


    
    return (
        <div className="flex flex-1/5 items-start flex-col h-full border-r border-gray-600 bg-[#1a2023] gap-6 p-4">
            <SearchInput
                value={ searchValue }
                onChange={ setSearchValue }
                placeholder="Search Components"
            />
            <Section title="Layout Elements" >
                <ComponentItem
                    name="Container"
                    icon={ containerIcon }
                    onClick={ handleContainerPress }
                />
                <ComponentItem
                    name="Header"
                    icon={ headerIcon }
                    onClick={ handleHeaderPress }
                    
                />
            </Section>
        </div>
    )
}

const containerIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 5.5L5.5 5.5M14.5 8.875L5.5 8.875M1 4.375L1 15.625C1 17.489 2.51104 19 4.375 19H15.625C17.489 19 19 17.489 19 15.625V4.375C19 2.51104 17.489 1 15.625 1L4.375 1C2.51104 1 1 2.51104 1 4.375Z" stroke="#ededed" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const headerIcon = (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.86143 15.3998V10.4152M6.86143 15.3998H5.19989M6.86143 15.3998H8.52297M6.86143 10.4152V5.43058M6.86143 10.4152H14.3384M6.86143 5.43058H5.19989M6.86143 5.43058H8.52297M14.3384 10.4152V15.3998M14.3384 10.4152V5.43058M14.3384 15.3998H12.6768M14.3384 15.3998H15.9999M14.3384 5.43058H12.6768M14.3384 5.43058H15.9999M3.4 20.2H17.8C19.1255 20.2 20.2 19.1255 20.2 17.8V3.4C20.2 2.07452 19.1255 1 17.8 1H3.4C2.07452 1 1 2.07452 1 3.4V17.8C1 19.1255 2.07452 20.2 3.4 20.2Z" stroke="#ededed" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


export default ComponentPicker
