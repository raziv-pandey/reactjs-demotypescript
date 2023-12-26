export interface IRatingResult{
    rate: number,
    count: number
}
export interface IProductsResult{
    id: number,
    category: string,
    image: string,
    title: string,
    description: string,
    price: number,
    rating: [IRatingResult]
}