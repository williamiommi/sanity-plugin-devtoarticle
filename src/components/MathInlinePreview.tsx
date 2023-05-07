import {Tooltip} from '@sanity/ui'
import {ReactElement, useRef} from 'react'
import {InlineMath} from 'react-katex'
import {BlockDecoratorProps} from 'sanity'

const getNodeText: any = (node: ReactElement) => {
  if (!node?.props?.children) {
    return node?.props?.text?.text || ''
  }
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
  return null
}

const MathInlinePreview = (props: BlockDecoratorProps) => {
  const text = useRef(getNodeText(props.children))
  const TooltipContent = (
    <span className="inline-block p-2">
      <InlineMath math={text.current} />
    </span>
  )
  return (
    <Tooltip portal placement="top" content={TooltipContent}>
      <span className="inline-block border-b border-dotted border-b-zinc-600">
        {props.renderDefault(props)}
      </span>
    </Tooltip>
  )
}

export default MathInlinePreview
