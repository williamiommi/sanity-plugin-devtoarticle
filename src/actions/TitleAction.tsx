import {FaDev} from 'react-icons/fa'
import {DocumentActionProps} from 'sanity'
import {DevtoArticleConfig} from '..'
import useDocumentStatus from '../hooks/useDocumentStatus'

const TitleAction = (docProps: DocumentActionProps, config?: DevtoArticleConfig) => {
  const {sanityDocIsPublished} = useDocumentStatus(docProps)
  if (sanityDocIsPublished) {
    return {
      label: 'DEV',
      disabled: true,
      icon: FaDev,
    }
  }
  return null
}

export default TitleAction
