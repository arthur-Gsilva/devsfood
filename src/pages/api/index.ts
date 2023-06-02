let BASE = 'https://api.b7web.com.br/devsfood/api'

const fetchJson = async (url: string) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

export default {
    getCategories: async () => {
        return fetchJson(`${BASE}/categories`)
        
    },

    getProducts: async () => {
        // const res = await fetch(`${BASE}/products`)
        // const json = await res.json()
        // return json
        return fetchJson(`${BASE}/products`)
    }
}