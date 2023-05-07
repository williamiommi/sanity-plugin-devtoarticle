import {defineField, defineType} from 'sanity'
import MathBlockPreview from '../../components/MathBlockPreview'
import MathBlockMetadata from './MathBlock.metadata'

export default defineType({
  type: 'object',
  ...MathBlockMetadata,
  preview: {
    select: {title: 'notation'},
    prepare: ({title}) => ({
      title,
    }),
  },
  components: {
    preview: MathBlockPreview,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'notation',
      title: 'Notation',
    }),
  ],
})
