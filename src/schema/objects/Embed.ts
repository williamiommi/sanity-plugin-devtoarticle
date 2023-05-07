import EmbedPreview from '../../components/EmbedPreview'
import {defineField, defineType} from 'sanity'
import EmbedMetadata from './Embed.metadata'

export default defineType({
  type: 'object',
  name: EmbedMetadata.name,
  title: EmbedMetadata.title,
  icon: EmbedMetadata.icon,
  preview: {
    select: {embedType: 'embedType', title: 'url', showPreview: 'showPreview'},
    prepare: ({embedType, title, showPreview}) => ({
      embedType,
      title,
      showPreview,
    }),
  },
  components: {
    preview: EmbedPreview,
  },
  fields: [
    defineField({
      type: 'string',
      name: 'embedType',
      title: 'Type',
      options: {
        list: EmbedMetadata.embedTypeList,
      },
    }),
    defineField({
      type: 'url',
      name: 'url',
      title: 'Url',
    }),
    defineField({
      type: 'boolean',
      name: 'showPreview',
      title: 'Show Preview',
    }),
  ],
})
