import {definePlugin} from 'sanity'
import {codeInput} from '@sanity/code-input'
import Details from './schema/objects/Details'
import Embed from './schema/objects/Embed'
import Image from './schema/objects/Image'
import KatexBlock from './schema/objects/KatexBlock'
import {default as DevtoArticleDoc} from './schema/documents/DevtoArticle'
import './global.css'
import 'katex/dist/katex.min.css'
import DevtoArticleMetadata from './schema/documents/DevtoArticle.metadata'
import TitleAction from './actions/TitleAction'
import CreateDraftAction from './actions/CreateDraftAction'
import CreatePublishedAction from './actions/CreatePublishedAction'
import UpdateAction from './actions/UpdateAction'
import PublishAction from './actions/PublishAction'
import UnpublishAction from './actions/UnpublishAction'
import UnlinkAction from './actions/UnlinkAction'
import DividerAction from './actions/DividerAction'

export interface DevtoArticleConfig {
  api: {
    get: string
    create: string
    update: string
  }
}

export const DevtoArticle = definePlugin<DevtoArticleConfig>((config) => {
  return {
    name: 'sanity-plugin-devtoarticle',
    plugins: [codeInput()],
    schema: {
      types: [DevtoArticleDoc(config), Image, Details, Embed, KatexBlock],
    },
    document: {
      actions: (prev, context) => {
        if (context.schemaType === DevtoArticleMetadata.name) {
          prev = prev.filter((item) => item.action !== 'duplicate')
          ;[
            TitleAction,
            CreateDraftAction,
            CreatePublishedAction,
            UpdateAction,
            PublishAction,
            UnpublishAction,
            UnlinkAction,
            DividerAction,
          ].forEach((action, index) =>
            prev.splice(index + 1, 0, (actionProps) => action(actionProps, config))
          )
        }
        return prev
      },
    },
  }
})
