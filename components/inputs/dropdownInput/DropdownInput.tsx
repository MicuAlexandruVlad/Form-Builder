import { OptionPickerInputControl } from "@/data/interfaces/Control"
import { Option } from "@/data/interfaces/Option"
import React, { Context, createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

type DropdownInputProps = {
    value: string | number
    label: string
    options: Option[]
    onChange: (option: Option) => void
}

const DropdownContext = createContext<{
    onChange: (option: Option) => void
    selectedValue: string | number
} | null>(null)

const DropdownInput: React.FC<DropdownInputProps> = ({
    value, label, options, onChange
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const bodyRef = useRef<HTMLDivElement>(null)

    const toggleVisibility = () => setDropdownVisible(prev => !prev)
    
    useEffect(() => {
        const handleClickOutside = (e: PointerEvent) => {
            if (bodyRef.current) {
                if (!bodyRef.current.contains(e.target as Node)) {
                    setDropdownVisible(false)
                }
            }
        }

        window.addEventListener('click', handleClickOutside)

        return () => window.removeEventListener('click', handleClickOutside)
    }, [])

    const displayValue = useMemo(() => {
        return options.find(o => o.value === value)?.displayValue
    }, [value, options])
    
    return (
        <div className="flex flex-col gap-2">
            <span>{ label }</span>
            <div ref={ bodyRef } onClick={ toggleVisibility } className="gap-1 flex flex-col relative">
                <div className="p-2 border active:border-[#ededed] bg-[#1a2023] border-gray-600 rounded-xl flex flex-row gap-2 items-center cursor-pointer">
                    <span className="w-full">{ displayValue }</span>
                    <div className={ `${ dropdownVisible && 'rotate-180' } rotate-0 transition-all` }>
                        { chevronSvg }
                    </div>
                </div>
                
                <DropdownContext.Provider value={{ onChange, selectedValue: value }}>
                    <Dropdown 
                        visible={ dropdownVisible } 
                        options={ options }
                    />
                </DropdownContext.Provider>
            </div>
        </div>
    )
}

type DropdownProps = {
    visible: boolean
    options: Option[]
}

const Dropdown: React.FC<DropdownProps> = ({
    visible, options
}) => {   
    return (
        <AnimatePresence>
        {
            visible && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col absolute top-full mt-2 w-full overflow-auto max-h-32 rounded-xl bg-[#232a2f] z-1">
                {
                    options.map((o) => {
                        return (
                            <DropdownItem key={ o.id } option={ o } />
                        )
                    })
                }
                </motion.div>
            )
        }
        </AnimatePresence>
    )
}

type DropdownItemProps = {
    option: Option
}

const DropdownItem: React.FC<DropdownItemProps> = ({
    option
}) => {
    const context = useContext(DropdownContext)
    
    const handleChange = () => context && context.onChange(option)
    
    return (
        <div className={
            `
            p-2 hover:bg-gray-700 transition-colors not-last:border-b border-gray-600
            cursor-pointer first:rounded-t-xl last:rounded-b-xl flex flex-row
            `
        } onClick={ handleChange } key={ option.id }>
            <span className="w-full">{ option.displayValue }</span>
            { context?.selectedValue === option.value && checkSVG }
        </div>
    )
}

const chevronSvg = (
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6.00081 5.58L11 1" stroke="#ededed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const checkSVG = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.8 8.3999L9.64043 15.5999L7.19995 13.1456" stroke="#ededed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default DropdownInput
