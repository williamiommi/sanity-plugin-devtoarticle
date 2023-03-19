import {PublishIcon} from '@sanity/icons'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentActions from '../hooks/useDocumentActions'
import useDocumentStatus from '../hooks/useDocumentStatus'

const UpdateAction = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): DocumentActionDescription | null => {
  const {canUpdate} = useDocumentStatus(docProps)
  const {updateArticle} = useDocumentActions(docProps, config)
  if (canUpdate) {
    return {
      icon: PublishIcon,
      label: 'Update',
      title: 'Update the document on Dev.to',
      tone: 'positive',
      onHandle: async () => {
        await updateArticle()
      },
    }
  }
  return null
}

export default UpdateAction
