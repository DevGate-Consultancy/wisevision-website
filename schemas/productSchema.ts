export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'titleInternal',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SMD Screens indoor', value: 'SMD Screens indoor' },
          { title: 'SMD Screens outdoor', value: 'SMD Screens outdoor' },
          { title: 'COB led display', value: 'COB led display' },
          { title: 'Digital standee', value: 'Digital standee' },
          { title: 'Digital podium', value: 'Digital podium' },
          { title: 'samsung display', value: 'samsung display' },
          { title: 'phillips display', value: 'phillips display' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'subcategory',
      title: 'Sub Category',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Product Image Path',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'href',
      title: 'Product Detail Page URL',
      type: 'string',
      initialValue: '#',
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'inches',
      title: 'Size/Inches',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
}
