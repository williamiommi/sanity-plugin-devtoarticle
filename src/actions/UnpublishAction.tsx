import {UnpublishIcon} from '@sanity/icons'
import {useState} from 'react'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentActions from '../hooks/useDocumentActions'
import useDocumentStatus from '../hooks/useDocumentStatus'

const UnpublishAction = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): DocumentActionDescription | null => {
  const [isDialogVisible, setDialogVisibility] = useState(false)
  const {canUnpublish} = useDocumentStatus(docProps)
  const {unpublishArticle} = useDocumentActions(docProps, config)
  if (canUnpublish) {
    return {
      icon: UnpublishIcon,
      label: 'Unpublish',
      title: 'Unpublish the document on DEV',
      tone: 'critical',
      onHandle: () => {
        setDialogVisibility(true)
      },
      dialog: isDialogVisible && {
        type: 'confirm',
        tone: 'critical',
        message: 'Are you sure you want to unpublish the article on DEV?',
        onCancel: () => setDialogVisibility(false),
        onConfirm: () => {
          unpublishArticle()
          setDialogVisibility(false)
        },
      },
    }
  }
  return null
}

export default UnpublishAction
