import * as DataLoader from 'dataloader'

interface LoaderCacheKey {
  id: string
  location: string
}

interface Loaders {
  query2: DataLoader<LoaderCacheKey, any>
  query1: DataLoader<LoaderCacheKey, any>
}

interface ICache {
  add<T>(key: string, val: T, timeoutSeconds: number): T
  get(key: string): any
}
