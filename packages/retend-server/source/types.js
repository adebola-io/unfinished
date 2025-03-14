/** @import { Router } from 'retend/router' */
/** @import { VWindow } from 'retend/v-dom' */
/** @import { AsyncLocalStorage } from 'node:async_hooks' */
/** @import { ViteDevServer } from 'vite' */

/**
 * @typedef RouterModule
 * A module that exports a function that creates a router. This will
 * be the base used to create your routers on the server and client.
 *
 * @property {() => Router} createRouter
 * A function that returns a web router.
 */

/**
 * @typedef {Object} ServerContext
 * @property {string} path
 * @property {string} rootSelector
 * @property {Record<string, unknown>} shell
 * @property {Record<string, unknown>} consistentValues
 */

/**
 * @typedef {Object} OutputArtifact
 * @property {string} name
 * @property {string} contents
 * @property {boolean} [append]
 * If true, content should be appended to existing file rather than replacing it
 */

/**
 * @typedef {Object} BuildOptions
 * @property {string} [htmlShell]
 * @property {string} [rootSelector]
 * @property {string} [createRouterModule]
 * @property {ViteDevServer} server
 */

/**
 * @typedef {Object} WriteArtifactsOptions
 * @property {string} [outDir]
 * @property {boolean} [clean]
 */

/**
 * @typedef {Object} ViteBuildResult
 * @property {Array<{code: string, source: string, fileName: string}>} output
 */

/**
 * @typedef {Object} AsyncStorage
 * @property {VWindow} window
 * @property {string} path
 * @property {{ value: number }} teleportIdCounter
 * @property {Map<string, unknown>} consistentValues
 */

/**
 * @typedef {Object} RenderOptions
 * @property {string} path
 * @property {string} routerPath
 * @property {AsyncLocalStorage<AsyncStorage>} asyncLocalStorage
 * @property {string} htmlShell
 * @property {ViteDevServer} server
 * @property {string} rootSelector
 */
