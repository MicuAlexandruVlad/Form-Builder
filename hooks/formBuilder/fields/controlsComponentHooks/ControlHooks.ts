import { selectedCanvasComponentAtom, selectedComponentControls, updateCanvasComponentControlsAtom } from "@/store/formBuilder/FormBuilderStore"
import { useAtomValue, useSetAtom } from "jotai"

export const useControlHooks = () => {
    const controls = useAtomValue(selectedComponentControls)
    const updateComponentControls = useSetAtom(updateCanvasComponentControlsAtom)

    return {
        controls,
        updateComponentControls
    }
}
