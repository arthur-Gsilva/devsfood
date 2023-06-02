export const useFormatter = () => ({
    formatPrice: (price: number | undefined) => {
        return price?.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency:'BRL'
        })
    }
})