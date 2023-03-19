import toMarkdownOptions from '../toMarkdownOptions'

const toMarkdown = require('@sanity/block-content-to-markdown')

const detailsSerializer = (props: any, projectId: string, dataset: string): string => {
  return `{% details ${props.node.title} %}\n${toMarkdown(
    props.node.content,
    toMarkdownOptions(projectId, dataset)
  )}\n{% enddetails %}`
}

export default detailsSerializer
