import {defineField, defineType} from 'sanity'
import KatexBlockPreview from '../../components/KatexBlockPreview'
import KatexBlockMetadata from './KatexBlock.metadata'

export default defineType({
  type: 'object',
  ...KatexBlockMetadata,
  preview: {
    select: {title: 'notation'},
    prepare: ({title}) => ({
      title,
    }),
  },
  components: {
    preview: KatexBlockPreview,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'notation',
      title: 'Notation',
    }),
  ],
})
