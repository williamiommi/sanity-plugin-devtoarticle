import {BlockMath} from 'react-katex'
import {PreviewProps} from 'sanity'
import MathBlockMetadata from '../schema/objects/MathBlock.metadata'

const MathBlockPreview = (props: PreviewProps) => {
  return (
    <>
      {props.renderDefault({
        ...props,
        title: <p className="text-lg">Math Notation</p>,
        media: MathBlockMetadata.icon({size: 25}),
      })}
      {props.title && (
        <div className="text-center">
          <BlockMath math={props.title as string} />
        </div>
      )}
    </>
  )
}

export default MathBlockPreview
