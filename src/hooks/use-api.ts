interface FetchOptions extends RequestInit {
  auth?: boolean
}

export function useApi() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

  const fetchApi = async (
    endpoint: string,
    options: FetchOptions = { auth: true }
  ) => {
    try {
      const url = `${baseUrl}${endpoint}`
      const token = localStorage.getItem('auth_token')

      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(options.auth && token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      }

      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        // Handle specific error status codes
        switch (response.status) {
          case 401:
            // Handle unauthorized (clear token and redirect to login)
            localStorage.removeItem('auth_token')
            window.location.href = '/login'
            throw new Error('Session expired. Please login again.')
          case 403:
            throw new Error('You do not have permission to perform this action.')
          case 404:
            throw new Error('Resource not found.')
          case 422:
            // Validation errors
            const validationErrors = await response.json()
            throw new Error(validationErrors.message || 'Validation failed.')
          default:
            throw new Error('An unexpected error occurred.')
        }
      }

      return await response.json()
    } catch (error) {
      // Re-throw the error to be handled by the component
      throw error
    }
  }

  return {
    get: (endpoint: string, options?: FetchOptions) =>
      fetchApi(endpoint, { ...options, method: 'GET' }),
    post: (endpoint: string, data: any, options?: FetchOptions) =>
      fetchApi(endpoint, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
      }),
    put: (endpoint: string, data: any, options?: FetchOptions) =>
      fetchApi(endpoint, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    delete: (endpoint: string, options?: FetchOptions) =>
      fetchApi(endpoint, { ...options, method: 'DELETE' }),
  }
}
