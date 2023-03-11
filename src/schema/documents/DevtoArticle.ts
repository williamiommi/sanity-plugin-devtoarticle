import {DevtoArticleConfig} from '../../'
import DevtoField from '../../components/DevtoField'
import {DetailsMetadata} from '../objects/Details'
import {EmbedMetadata} from '../objects/Embed'
import {ImageMetadata} from '../objects/Image'
import {KatexBlockMetadata} from '../objects/KatexBlock'
import {KatexInlineMetadata} from '../objects/KatexInline'
import {FaDev} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const DevtoArticleMetadata = {
  name: 'devto.article',
  title: 'Dev.to Article',
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

const DevtoArticle = (config: DevtoArticleConfig): any =>
  defineType({
    type: 'document',
    name: DevtoArticleMetadata.name,
    title: DevtoArticleMetadata.title,
    icon: DevtoArticleMetadata.icon,
    preview: {
      select: {
        title: DevtoArticleMetadata.fields.title.name,
        subtitle: DevtoArticleMetadata.fields.description.name,
        media: DevtoArticleMetadata.fields.cover_image.name,
      },
    },
    fields: [
      defineField({
        type: 'object',
        ...DevtoArticleMetadata.fields.devto,
        readOnly: true,
        components: {
          field: (props) => DevtoField({...props, config}),
        },
        fields: [
          defineField({
            type: 'number',
            ...DevtoArticleMetadata.fields.devtoId,
          }),
          defineField({
            type: 'boolean',
            ...DevtoArticleMetadata.fields.devtoIsPublished,
          }),
          defineField({
            type: 'slug',
            ...DevtoArticleMetadata.fields.devtoSlug,
          }),
          defineField({
            type: 'datetime',
            ...DevtoArticleMetadata.fields.devtoUpdatedAt,
          }),
        ],
      }),
      defineField({
        type: 'string',
        ...DevtoArticleMetadata.fields.title,
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        type: 'text',
        ...DevtoArticleMetadata.fields.description,
        rows: 5,
      }),
      defineField({
        type: 'image',
        ...DevtoArticleMetadata.fields.cover_image,
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        type: 'array',
        ...DevtoArticleMetadata.fields.body_markdown,
        validation: (Rule) => Rule.required(),
        of: [
          {
            type: 'block',
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Code', value: 'code'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike', value: 'strike-through'},
                {...KatexInlineMetadata},
              ],
            },
          },
          {type: ImageMetadata.name},
          {type: 'code'},
          {type: DetailsMetadata.name},
          {type: EmbedMetadata.name},
          {type: KatexBlockMetadata.name},
        ],
      }),
      defineField({
        type: 'array',
        ...DevtoArticleMetadata.fields.tags,
        options: {
          layout: 'tags',
        },
        of: [
          {
            type: 'string',
          },
        ],
        validation: (Rule) => Rule.max(4),
      }),
      defineField({
        type: 'string',
        ...DevtoArticleMetadata.fields.series,
      }),
      defineField({
        type: 'url',
        ...DevtoArticleMetadata.fields.canonical_url,
      }),
      defineField({
        type: 'number',
        ...DevtoArticleMetadata.fields.organization_id,
      }),
    ],
  })

export default DevtoArticle
