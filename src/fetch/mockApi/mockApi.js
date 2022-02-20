import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath:'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62056759161670001741bb57.mockapi.io/contacts/' }),
    tagTypes:['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({ query: () => 'users',providesTags:['Contact'] }),
        addContact: builder.mutation({
            query: (newContact) => ({
            url:'users',
            method: 'POST',
                body: newContact
            }),
            invalidatesTags:['Contact']
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
            url:`users/${contactId}`,
            method: 'DELETE',
            }),
            invalidatesTags:['Contact']
        })
    })
})

export const {useGetContactsQuery,useAddContactMutation,useDeleteContactMutation} = contactsApi;