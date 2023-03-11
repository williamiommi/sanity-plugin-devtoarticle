import DetailsPreview from '../../components/DetailsPreview'
import {ImageMetadata} from '../objects/Image'
import {TfiLayoutAccordionList} from 'react-icons/tfi'
import {defineField, defineType} from 'sanity'

export const DetailsMetadata = {
  name: 'devto.details',
  title: 'Details',
  icon: TfiLayoutAccordionList,
}

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
