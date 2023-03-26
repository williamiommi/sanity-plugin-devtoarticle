import {FaDev} from 'react-icons/fa'

const DevtoArticleMetadata = {
  name: 'devto.article',
  title: 'DEV Article',
  icon: FaDev,
  fields: {
    devto: {name: 'devto', title: 'Dev.to'},
    devtoId: {name: 'id', title: 'Dev.to ID'},
    devtoIsPublished: {name: 'isPublished', title: 'Is Published'},
    devtoUpdatedAt: {name: 'updatedAt', title: 'Updated At'},
    devtoSlug: {name: 'slug', title: 'Slug'},
    title: {name: 'title', title: 'Title'},
    description: {name: 'description', title: 'Description'},
    cover_image: {name: 'cover_image', title: 'Cover Image'},
    body_markdown: {name: 'body_markdown', title: 'Body'},
    tags: {name: 'tags', title: 'Tags'},
    series: {name: 'series', title: 'Series'},
    canonical_url: {name: 'canonical_url', title: 'Canonical URL'},
    organization_id: {name: 'organization_id', title: 'Organization ID'},
  },
}

export default DevtoArticleMetadata
