import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/checkout'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Pasta, void>({
      query: () => 'promocoes'
    }),
    getOnSale: builder.query<Pasta[], void>({
      query: () => 'em-breve'
    }),
    getGame: builder.query<Pasta, string>({
      query: (id) => `pizzas/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  //useGetSoonQuery,
  useGetOnSaleQuery,
  /*useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,*/
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
