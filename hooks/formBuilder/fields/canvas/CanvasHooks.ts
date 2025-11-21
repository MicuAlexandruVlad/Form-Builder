import { canvasComponentsAtom, hasComponentsAtom, selectedCanvasComponentAtom } from "@/store/formBuilder/FormBuilderStore"
import { useAtom, useAtomValue } from "jotai"

export const useCanvasHooks = () => {
    const [selectedComponent, setSelectedComponent] = useAtom(selectedCanvasComponentAtom)

    const hasComponents = useAtomValue(hasComponentsAtom)
    const canvasComponents = useAtomValue(canvasComponentsAtom)

    return {
        canvasComponents,
        selectedComponent,
        setSelectedComponent,
        hasComponents
    }
}
