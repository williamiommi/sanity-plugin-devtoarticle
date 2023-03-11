import {EmbedMetadata} from '@/schema/objects/Embed'
import {PreviewProps} from 'sanity'

const EmbedPreview = (props: PreviewProps) => {
  const url = props.title as string
  if (!url) return props.renderDefault(props)

  const AnchorTitle = (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  )

  return (
    <>
      {props.renderDefault({
        ...props,
        title: <p className="text-lg">Embed Url</p>,
        media: EmbedMetadata.icon({size: 25}),
      })}

      {props.renderDefault({
        ...props,
        title: AnchorTitle,
        media: '',
        actions: null,
      })}
      {/* @ts-ignore */}
      {props.showIframe && <iframe src={url} width="100%" height="400" />}
    </>
  )
}

export default EmbedPreview
