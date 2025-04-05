import {defineField, defineType} from 'sanity'

export const storeType = defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
