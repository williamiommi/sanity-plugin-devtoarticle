import ImageUrlBuilder from '@sanity/image-url'

const imageSerializer = (props: any, projectId: string, dataset: string): string => {
  const {alt, title, asset} = props.node
  const imageBuilder = ImageUrlBuilder({projectId, dataset}).image(asset)
  const url = imageBuilder.url()
  return `![${alt || ''}](${url} "${title || ''}")`
}

export default imageSerializer
