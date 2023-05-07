import {EmbedType} from '../../schema/objects/Embed.metadata'

const embedSerialiizer = (props: any): string => {
  const embedType = props.node.embedType as EmbedType
  let tag = 'embed'
  if (embedType && embedType !== 'linkedin' && embedType !== 'facebook') tag = embedType

  return `{% ${tag} ${props.node.url} %}`
}

export default embedSerialiizer
