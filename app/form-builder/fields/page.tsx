import CanvasComponent from "./components/canvasComponent/CanvasComponent"
import ComponentPicker from "./components/componentPicker/ComponentPicker"
import Controls from "./components/controlsComponent/Controls"

type FieldComponentProps = {}

const FieldComponent: React.FC<FieldComponentProps> = ({}) => {
    return (
        <div className="flex flex-row h-full">
            <ComponentPicker />
            <div className="p-4 flex-3/5">
                <CanvasComponent />
            </div>
            <Controls />
        </div>
    )
}

export default FieldComponent
