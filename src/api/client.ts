import {
  buildApiUrl,
  createJsonHeaders,
  parseJsonResponse,
} from '../lib/http'

type RequestOptions = {
  body?: unknown
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  token?: string
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}) {
  const { body, method = 'GET', token } = options

  const response = await fetch(buildApiUrl(path), {
    body: body ? JSON.stringify(body) : undefined,
    headers: createJsonHeaders(token),
    method,
  })

  return parseJsonResponse<T>(response)
}
