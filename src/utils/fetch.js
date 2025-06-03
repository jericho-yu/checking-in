const BASE_URL = 'http://localhost:3000' // 设置根 URL
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '', // 动态添加 Token
}

export const f = async (endpoint, method = 'GET', options = {}) => {
    const { headers, ...restOptions } = options

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            ...restOptions,
            headers: {
                ...DEFAULT_HEADERS, // 默认 headers
                ...headers, // 合并传入的 headers
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Fetch error:', error)
        throw error
    }
}
