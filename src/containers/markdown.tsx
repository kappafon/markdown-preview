import * as React from 'react'
import Preview from '../components/preview'
import Editor from '../components/editor'
import { defaultValue } from '../variables'
import './markdown.scss'

export interface MarkdownProps {}
const Markdown: React.FC<MarkdownProps> = props => {
    const [currentInput, setCurrentInput] = React.useState<string>(defaultValue)

    const onInputChange = (value: string) => {
        setCurrentInput(value)
    }

    return (
        <main className="markdown__container">
            <Editor onInputChange={onInputChange} defaultValue={defaultValue} />
            <Preview currentInput={currentInput} />
        </main>
    )
}

export default Markdown
