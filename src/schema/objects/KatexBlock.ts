import KatexBlockPreview from '@/components/KatexBlockPreview'
import {TbMathFunction} from 'react-icons/tb'
import {defineField, defineType} from 'sanity'

export const KatexBlockMetadata = {
  name: 'devto.katexblock',
  title: 'Katex Formula',
  icon: TbMathFunction,
}

export default defineType({
  type: 'object',
  ...KatexBlockMetadata,
  preview: {
    select: {title: 'formula'},
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
      name: 'formula',
      title: 'Formula',
    }),
  ],
})
