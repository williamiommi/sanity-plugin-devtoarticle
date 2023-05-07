import {PreviewProps} from 'sanity'
import EmbedMetadata, {EmbedType} from '../schema/objects/Embed.metadata'
import {FacebookEmbed, InstagramEmbed, TwitterEmbed, YouTubeEmbed} from 'react-social-media-embed'
import SpotifyPreview from './SpotifyPreview'

const EmbedPreview = (props: PreviewProps) => {
  /** @ts-ignore */
  const embedType = EmbedMetadata.embedTypeList.find((type) => type.value === props.embedType)
  const url = props.title as string
  /** @ts-ignore */
  const showPreview = props.showPreview as boolean

  if (!url) return props.renderDefault(props)

  const AnchorTitle = (
    <a href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
  )

  const title = embedType?.title || 'Embed Url'
  const icon = embedType?.icon || EmbedMetadata.icon
  let Preview

  /** @ts-ignore */
  switch (props.embedType as EmbedType) {
    case 'twitter':
      Preview = <TwitterEmbed url={url} />
      break
    case 'youtube':
      Preview = <YouTubeEmbed url={url} />
      break
    case 'instagram':
      Preview = <InstagramEmbed url={url} />
      break
    case 'facebook':
      Preview = <FacebookEmbed url={url} />
      break
    case 'spotify':
      Preview = <SpotifyPreview url={url} showPreview={showPreview} />
      break
    default:
      Preview = <iframe src={url} width="100%" height="400" />
  }

  return (
    <>
      {props.renderDefault({
        ...props,
        title: <p className="text-lg">{title}</p>,
        media: icon({size: 25}),
      })}

      {props.renderDefault({
        ...props,
        title: AnchorTitle,
        media: '',
        actions: null,
      })}
      {/* @ts-ignore */}
      {showPreview && Preview}
    </>
  )
}

export default EmbedPreview
