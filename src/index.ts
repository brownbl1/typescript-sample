import * as DataLoader from 'dataloader'

const opts = {
  cacheKeyFn: (key: LoaderCacheKey) => JSON.stringify(key),
}

const query1 = (keys: LoaderCacheKey[]) =>
  Promise.all(
    keys.map(key => ({
      from: { id: key.id, loc: key.location },
    }))
  )

const query2 = (keys: LoaderCacheKey[]) =>
  Promise.all(
    keys.map(key => ({
      somethingElse: { id: key.id, loc: key.location },
    }))
  )

export const buildLoaders = (): Loaders => {
  return {
    query1: new DataLoader(query1, opts),
    query2: new DataLoader(query2, opts),
  }
}
