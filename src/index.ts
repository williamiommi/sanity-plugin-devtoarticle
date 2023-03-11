import {definePlugin} from 'sanity'

interface DevtoArticleConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-devtoarticle'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [myPlugin()],
 * })
 * ```
 */
export const DevtoArticle = definePlugin<DevtoArticleConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-devtoarticle')
  return {
    name: 'sanity-plugin-devtoarticle',
  }
})
