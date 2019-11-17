import * as React from 'react'
import './editor.scss'

export interface KeypadProps {
    defaultValue: string
    onInputChange(value: string): void
}

const Editor: React.FC<KeypadProps> = props => {
    const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onInputChange(event.target.value)
        return
    }

    return (
        <textarea
            className="markdown__editor"
            onChange={onInputChange}
            id="editor"
            defaultValue={props.defaultValue}
        />
    )
}

export default Editor
