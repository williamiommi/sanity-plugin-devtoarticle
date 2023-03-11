import {KatexBlockMetadata} from '../schema/objects/KatexBlock'
import {BlockMath} from 'react-katex'
import {PreviewProps} from 'sanity'

const KatexBlockPreview = (props: PreviewProps) => {
  return (
    <>
      {props.renderDefault({
        ...props,
        title: <p className="text-lg">Katex Formula</p>,
        media: KatexBlockMetadata.icon({size: 25}),
      })}
      <div className="text-center">
        <BlockMath math={props.title as string} />
      </div>
    </>
  )
}

export default KatexBlockPreview
