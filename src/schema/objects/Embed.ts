import EmbedPreview from '../../components/EmbedPreview'
import {defineField, defineType} from 'sanity'
import EmbedMetadata from './Embed.metadata'

export default defineType({
  type: 'object',
  ...EmbedMetadata,
  preview: {
    select: {title: 'url', showIframe: 'showIframe'},
    prepare: ({title, showIframe}) => ({
      title,
      showIframe,
    }),
  },
  components: {
    preview: EmbedPreview,
  },
  fields: [
    defineField({
      type: 'url',
      name: 'url',
      title: 'Url',
    }),
    defineField({
      type: 'boolean',
      name: 'showIframe',
      title: 'Show In Iframe',
    }),
  ],
})
