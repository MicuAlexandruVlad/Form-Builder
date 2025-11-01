import React from "react"

type AuthInputProps = {
    // value: string
    value: string
    placeholder: string
    label: string
    onChange: (v: string) => void
    type?: React.HTMLInputTypeAttribute
}

const AuthInput: React.FC<AuthInputProps> = ({
    value, placeholder, label, type, onChange
}) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    
    return (
        <div className="flex flex-col gap-2">
            <span className="">{ label }</span>
            <div className="flex flex-row gap-2">
                <input
                    type={ type }
                    spellCheck={ false }
                    onChange={ handleInputChange }
                    className="py-2 text-white px-4 text-md min-w-md outline-0 antialiased border-gray-400 border rounded-xl text-ellipsis bg-[#2b3544]"
                    placeholder={ placeholder }
                />
            </div>
        </div>
    )
}

export default AuthInput

