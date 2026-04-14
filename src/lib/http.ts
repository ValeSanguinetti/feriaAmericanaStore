export class ApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export function getApiBaseUrl() {
  return import.meta.env.VITE_API_URL?.trim() ?? ''
}

export function buildApiUrl(path: string) {
  const baseUrl = getApiBaseUrl()

  if (!baseUrl) {
    return path
  }

  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

export function createJsonHeaders(token?: string) {
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const hasBody = response.status !== 204
  const payload = hasBody ? await response.json().catch(() => null) : null

  if (!response.ok) {
    const message =
      (payload &&
        typeof payload === 'object' &&
        'message' in payload &&
        typeof payload.message === 'string' &&
        payload.message) ||
      response.statusText ||
      'Request failed.'

    throw new ApiError(message, response.status)
  }

  return payload as T
}
