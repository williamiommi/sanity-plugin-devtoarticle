import {defineField, defineType} from 'sanity'
import ImageMetadata from './Image.metadata'

export default defineType({
  type: 'image',
  ...ImageMetadata,
  fields: [
    defineField({type: 'string', name: 'alt', title: 'Alt'}),
    defineField({type: 'string', name: 'title', title: 'Title'}),
  ],
})
