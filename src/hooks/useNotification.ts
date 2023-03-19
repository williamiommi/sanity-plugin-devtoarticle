import {useToast} from '@sanity/ui'
import {useCallback} from 'react'

interface useNotificationResponse {
  success: (msg: any) => void
  error: (msg: any) => void
}

const useNotification = (): useNotificationResponse => {
  const toast = useToast()

  const error = useCallback(
    (msg: any) => {
      toast.push({
        status: 'error',
        title: 'Something went wrong!',
        description: msg,
        closable: true,
      })
    },
    [toast]
  )

  const success = useCallback(
    (msg: any) => {
      toast.push({
        status: 'success',
        title: msg,
        closable: true,
      })
    },
    [toast]
  )

  return {success, error}
}

export default useNotification
