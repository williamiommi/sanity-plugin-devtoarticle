import DetailsMetadata from '../schema/objects/Details.metadata'
import EmbedMetadata from '../schema/objects/Embed.metadata'
import ImageMetadata from '../schema/objects/Image.metadata'
import MathBlockMetadata from '../schema/objects/MathBlock.metadata'
import {MathInlineMetadata} from '../schema/objects/MathInline'
import codeSerializer from './serializers/code'
import detailsSerializer from './serializers/details'
import embedSerialiizer from './serializers/embed'
import imageSerializer from './serializers/image'
import {katexBlockSerializer, katexInlineSerializer} from './serializers/katex'

const toMarkdownOptions: any = (projectId: string, dataset: string) => ({
  serializers: {
    marks: {
      [MathInlineMetadata.value]: katexInlineSerializer,
    },
    types: {
      [ImageMetadata.name]: (props: any) => imageSerializer(props, projectId, dataset),
      [DetailsMetadata.name]: (props: any) => detailsSerializer(props, projectId, dataset),
      [EmbedMetadata.name]: embedSerialiizer,
      [MathBlockMetadata.name]: katexBlockSerializer,
      code: codeSerializer,
    },
  },
  projectId,
  dataset,
})

export default toMarkdownOptions
