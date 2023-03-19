import {PublishIcon} from '@sanity/icons'
import {useState} from 'react'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentActions from '../hooks/useDocumentActions'
import useDocumentStatus from '../hooks/useDocumentStatus'

const CreatePublishedAction = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): DocumentActionDescription | null => {
  const [isDialogVisible, setDialogVisibility] = useState(false)
  const {canCreatePublished} = useDocumentStatus(docProps)
  const {createAndPublishArticle} = useDocumentActions(docProps, config)
  if (canCreatePublished) {
    return {
      icon: PublishIcon,
      label: 'Create and Publish',
      title: 'Create and Publish the document on Dev.to',
      tone: 'positive',
      onHandle: () => {
        setDialogVisibility(true)
      },
      dialog: isDialogVisible && {
        type: 'confirm',
        tone: 'positive',
        message: 'Are you ready to make it public on Dev.to?',
        onCancel: () => setDialogVisibility(false),
        onConfirm: async () => {
          await createAndPublishArticle()
          setDialogVisibility(false)
        },
      },
    }
  }
  return null
}

export default CreatePublishedAction
