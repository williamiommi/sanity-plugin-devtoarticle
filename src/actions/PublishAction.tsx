import {PublishIcon} from '@sanity/icons'
import {useState} from 'react'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentActions from '../hooks/useDocumentActions'
import useDocumentStatus from '../hooks/useDocumentStatus'

const PublishAction = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): DocumentActionDescription | null => {
  const [isDialogVisible, setDialogVisibility] = useState(false)
  const {canPublish} = useDocumentStatus(docProps)
  const {publishArticle} = useDocumentActions(docProps, config)
  if (canPublish) {
    return {
      icon: PublishIcon,
      label: 'Publish',
      title: 'Publish the document on DEV',
      tone: 'positive',
      onHandle: () => {
        setDialogVisibility(true)
      },
      dialog: isDialogVisible && {
        type: 'confirm',
        tone: 'positive',
        message: 'Are you ready to publish the article on DEV?',
        onCancel: () => setDialogVisibility(false),
        onConfirm: async () => {
          await publishArticle()
          setDialogVisibility(false)
        },
      },
    }
  }
  return null
}

export default PublishAction
