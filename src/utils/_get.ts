const _get: any = (object: any, keys: string | string[], defaultValue?: any) => {
  if (!object) return defaultValue || undefined
  keys = Array.isArray(keys) ? keys : keys.split('.')
  object = object[keys[0]]
  if (object && keys.length > 1) {
    return _get(object, keys.slice(1))
  }
  return object === undefined ? defaultValue : object
}

export default _get
