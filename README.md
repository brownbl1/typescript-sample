`Index.d.ts` has the following:

```ts
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
```

As is, running `tsc` gives the following errors:

```
src/index.ts(4,21): error TS2304: Cannot find name 'LoaderCacheKey'.
src/index.ts(7,23): error TS2304: Cannot find name 'LoaderCacheKey'.
src/index.ts(14,23): error TS2304: Cannot find name 'LoaderCacheKey'.
src/index.ts(21,33): error TS2304: Cannot find name 'Loaders'.
src/utils/cache.ts(1,31): error TS2304: Cannot find name 'ICache'.
```

commenting out the first line and running `tsc` gives these errors:

```
index.d.ts(9,11): error TS2304: Cannot find name 'DataLoader'.
index.d.ts(10,11): error TS2304: Cannot find name 'DataLoader'.
```

How to fix?
