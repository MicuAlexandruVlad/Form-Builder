import React from "react"

type SearchInputProps = {
    value: string
    placeholder: string
    onChange: (v: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
    value, placeholder, onChange
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    
    return (
        <div className="flex flex-row rounded-xl gap-2 border-gray-600 border p-2 items-center outline-0">
            <input
                type="text"
                className="outline-0 text-ellipsis"
                value={ value }
                spellCheck={ false }
                placeholder={ placeholder }
                onChange={ handleChange }
            />
            { searchIcon }
        </div>
    )
}

const searchIcon = (
    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3269 14.44L17.8 17.8M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z" stroke="#4a5565" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

export default SearchInput
