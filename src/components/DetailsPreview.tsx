import {PreviewProps} from 'sanity'
import DetailsMetadata from '../schema/objects/Details.metadata'

const DetailsPreview = (props: PreviewProps) => {
  return (
    <>
      {props.renderDefault({
        ...props,
        title: <p className="text-lg">{props.title as string}</p>,
        media: DetailsMetadata.icon({size: 25}),
      })}
    </>
  )
}

export default DetailsPreview
