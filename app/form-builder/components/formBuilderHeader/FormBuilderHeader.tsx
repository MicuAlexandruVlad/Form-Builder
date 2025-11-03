"use client"

import Logo from "@/components/logo/Logo"
import { ViewMode } from "@/data/types/ViewModes"
import React, { useEffect, useState } from "react"
import ViewSwitch from "../viewSwitch/ViewSwitch"
import { useAtom } from "jotai"
import { viewModeAtom } from "@/store/formBuilder/FormBuilderStore"
import { useRouter } from "next/navigation"

type FormBuilderHeaderProps = {

}

const FormBuilderHeader: React.FC<FormBuilderHeaderProps> = ({}) => {
    const [viewMode, setViewMode] = useAtom(viewModeAtom)

    const router = useRouter()

    useEffect(() => {
        router.push('/form-builder/fields')
    }, [])

    const handleViewModeSwitch = (v: ViewMode) => {
        switch(v) {
            case "Fields": {
                router.push('/form-builder/fields')
                break
            }

            case "Workflow": {
                router.push('/form-builder/workflow')
                break
            }

            default: {
                router.push('/form-builder/permissions')
                break
            }
        }

        setViewMode(v)
    }
    
    return (
        <header className="flex flex-row gap-4 items-center bg-[#1a2023] p-4 border-b border-gray-600">
            <Logo size="sm" />
            <h1 className="text-lg font-bold">Form Builder</h1>
            <div className="flex flex-1 items-center justify-center">
                <ViewSwitch
                    view={ viewMode }
                    onSwitch={ handleViewModeSwitch }
                />
            </div>
        </header>
    )
}

export default FormBuilderHeader
