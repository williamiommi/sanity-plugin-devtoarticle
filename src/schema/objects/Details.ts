import DetailsPreview from '../../components/DetailsPreview'
import {defineField, defineType} from 'sanity'
import DetailsMetadata from './Details.metadata'
import ImageMetadata from './Image.metadata'

export default defineType({
  type: 'object',
  ...DetailsMetadata,
  preview: {
    select: {title: 'title', content: 'content'},
    prepare: ({title, content}) => ({
      title,
      content,
    }),
  },
  components: {
    preview: DetailsPreview,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [{type: 'block'}, {type: ImageMetadata.name}],
    }),
  ],
})
