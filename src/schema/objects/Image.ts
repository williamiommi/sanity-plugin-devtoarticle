import {BsFileImage} from 'react-icons/bs'
import {defineField, defineType} from 'sanity'

export const ImageMetadata = {
  name: 'devto.image',
  title: 'Image',
  icon: BsFileImage,
}

export default defineType({
  type: 'image',
  name: ImageMetadata.name,
  title: ImageMetadata.title,
  icon: ImageMetadata.icon,
  fields: [
    defineField({type: 'string', name: 'alt', title: 'Alt'}),
    defineField({type: 'string', name: 'title', title: 'Title'}),
  ],
})
