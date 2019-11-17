import * as React from 'react'
import marked from 'marked'
import './preview.scss'

export interface PreviewProps {
    currentInput: string
}

const Preview: React.FC<PreviewProps> = props => {
    const { currentInput } = props
    const renderer = new marked.Renderer()

    return (
        <section
            dangerouslySetInnerHTML={{
                __html: marked(currentInput, {
                    renderer,
                    breaks: true,
                }),
            }}
            id="preview"
            className="markdown__preview"
        />
    )
}

export default Preview
