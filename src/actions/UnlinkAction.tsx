import {LinkRemovedIcon} from '@sanity/icons'
import {useState} from 'react'
import {DocumentActionDescription, DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentActions from '../hooks/useDocumentActions'
import useDocumentStatus from '../hooks/useDocumentStatus'

const UnlinkAction = (
  docProps: DocumentActionProps,
  config: DevtoArticleConfig
): DocumentActionDescription | null => {
  const [isDialogVisible, setDialogVisibility] = useState(false)
  const {canUnlink} = useDocumentStatus(docProps)
  const {unlinkArticle} = useDocumentActions(docProps, config)
  if (canUnlink) {
    return {
      icon: LinkRemovedIcon,
      label: 'Unlink',
      title: 'Unlink the document from DEV',
      tone: 'critical',
      onHandle: () => {
        setDialogVisibility(true)
      },
      dialog: isDialogVisible && {
        type: 'confirm',
        tone: 'critical',
        message:
          'Are you sure you want to unlink the document from DEV? This action is irreversible. The article will remain available on DEV.',
        onCancel: () => setDialogVisibility(false),
        onConfirm: () => {
          unlinkArticle()
          setDialogVisibility(false)
        },
      },
    }
  }
  return null
}

export default UnlinkAction
