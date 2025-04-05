import {defineField, defineType} from 'sanity'

export const drinkType = defineType({
  name: 'drink',
  title: 'Drink',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
