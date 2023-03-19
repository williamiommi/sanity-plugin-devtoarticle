import imageUrlBuilder from '@sanity/image-url'
import {SanityDocument} from 'sanity'
import DevtoArticleMetadata from '../schema/documents/DevtoArticle.metadata'
import {IDevtoArticleRequest} from '../types/IDevtoArticle'
import toMarkdownOptions from './toMarkdownOptions'
import _get from './_get'
const toMarkdown = require('@sanity/block-content-to-markdown')

const generateArticle = (
  document: SanityDocument | null,
  published: boolean,
  projectId: string,
  dataset: string
): IDevtoArticleRequest | null => {
  const builder = imageUrlBuilder({dataset, projectId})
  const {fields} = DevtoArticleMetadata
  return {
    title: _get(document, `${fields.title.name}`) || '',
    body_markdown: toMarkdown(
      _get(document, `${fields.body_markdown.name}`) || '',
      toMarkdownOptions(projectId, dataset)
    ),
    published,
    series: _get(document, `${fields.series.name}`) || '',
    main_image: builder.image(_get(document, `${fields.cover_image.name}`)).url() || '',
    canonical_url: _get(document, `${fields.canonical_url.name}`) || '',
    description: _get(document, `${fields.description.name}`) || '',
    tags: _get(document, `${fields.tags.name}`) || '',
    organization_id: _get(document, `${fields.organization_id.name}`) || '',
  }
}

export default generateArticle
