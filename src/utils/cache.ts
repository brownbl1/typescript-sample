export class Cache implements ICache {
  private _cache = {}

  add<T>(key: string, val: T, timeoutSeconds: number = 3600): T {
    this._cache[key] = val
    setTimeout(() => delete this._cache[key], timeoutSeconds * 1000)
    return val
  }

  get(key: string) {
    return this._cache[key]
  }
}
