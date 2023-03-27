import ImageMetadata from '../schema/objects/Image.metadata'
import imageSerializer from './serializers/image'

const toMarkdownOptionsBase: any = (projectId: string, dataset: string) => ({
  serializers: {
    types: {
      [ImageMetadata.name]: (props: any) => imageSerializer(props, projectId, dataset),
    },
  },
  projectId,
  dataset,
})

export default toMarkdownOptionsBase
