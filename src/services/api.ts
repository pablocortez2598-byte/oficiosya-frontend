export const API_URL = import.meta.env.VITE_API_URL

/**
 * Cliente HTTP base. Por ahora no se utiliza (seguimos con mocks),
 * pero queda preparado para cuando conectemos el backend real en la Fase 15.
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.status}`)
  }

  return response.json()
}