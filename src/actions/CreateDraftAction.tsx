import {DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentStatus from '../hooks/useDocumentStatus'
import {PublishIcon} from '@sanity/icons'
import useDocumentActions from '../hooks/useDocumentActions'

const CreateDraftAction = (docProps: DocumentActionProps, config: DevtoArticleConfig): any => {
  const {canCreateDraft} = useDocumentStatus(docProps)
  const {createDraftArticle} = useDocumentActions(docProps, config)
  if (canCreateDraft) {
    return {
      icon: PublishIcon,
      label: 'Create a Draft',
      title: 'Create a draft version of the published document on DEV',
      tone: 'positive',
      onHandle: async () => {
        await createDraftArticle()
      },
    }
  }
  return null
}

export default CreateDraftAction
