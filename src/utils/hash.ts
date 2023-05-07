import {createHash} from 'crypto'

const hash = (value: string): string => {
  return createHash('sha256').update(value).digest('hex')
}

export default hash
