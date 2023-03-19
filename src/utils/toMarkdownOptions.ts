import DetailsMetadata from '../schema/objects/Details.metadata'
import EmbedMetadata from '../schema/objects/Embed.metadata'
import ImageMetadata from '../schema/objects/Image.metadata'
import KatexBlockMetadata from '../schema/objects/KatexBlock.metadata'
import {KatexInlineMetadata} from '../schema/objects/KatexInline'
import codeSerializer from './serializers/code'
import detailsSerializer from './serializers/details'
import embedSerialiizer from './serializers/embed'
import imageSerializer from './serializers/image'
import {katexBlockSerialiizer, katexInlineSerialiizer} from './serializers/katex'

const toMarkdownOptions: any = (projectId: string, dataset: string) => ({
  serializers: {
    marks: {
      [KatexInlineMetadata.value]: katexInlineSerialiizer,
    },
    types: {
      [ImageMetadata.name]: (props: any) => imageSerializer(props, projectId, dataset),
      [DetailsMetadata.name]: (props: any) => detailsSerializer(props, projectId, dataset),
      [EmbedMetadata.name]: embedSerialiizer,
      [KatexBlockMetadata.name]: katexBlockSerialiizer,
      code: codeSerializer,
    },
  },
  projectId,
  dataset,
})

export default toMarkdownOptions
