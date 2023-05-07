import {DevtoArticleConfig} from '../../'
import DevtoField from '../../components/DevtoField'
import {MathInlineMetadata} from '../objects/MathInline'
import {defineField, defineType} from 'sanity'
import ImageMetadata from '../objects/Image.metadata'
import DetailsMetadata from '../objects/Details.metadata'
import EmbedMetadata from '../objects/Embed.metadata'
import MathBlockMetadata from '../objects/MathBlock.metadata'
import DevtoArticleMetadata from './DevtoArticle.metadata'

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
                {...MathInlineMetadata},
              ],
            },
          },
          {type: ImageMetadata.name},
          {type: 'code'},
          {type: DetailsMetadata.name},
          {type: EmbedMetadata.name},
          {type: MathBlockMetadata.name},
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
