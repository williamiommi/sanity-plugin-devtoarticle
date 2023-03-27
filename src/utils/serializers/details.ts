import toMarkdownOptionsBase from '../toMarkdownOptionsBase'

const toMarkdown = require('@sanity/block-content-to-markdown')

const detailsSerializer = (props: any, projectId: string, dataset: string): string => {
  return `{% details ${props.node.title} %}\n${toMarkdown(
    props.node.content,
    toMarkdownOptionsBase(projectId, dataset)
  )}\n{% enddetails %}`
}

export default detailsSerializer
