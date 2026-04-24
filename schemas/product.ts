export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SMD Screens Indoor', value: 'smd-indoor' },
          { title: 'SMD Screens Outdoor', value: 'smd-outdoor' },
          { title: 'Module Series', value: 'module' },
          { title: 'Premium Series', value: 'premium' },
          { title: 'Rental Series', value: 'rental' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'specifications',
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
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: Rule => Rule.min(1),
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.min(0),
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Out of Stock', value: 'out-of-stock' },
          { title: 'Custom Order', value: 'custom-order' },
        ],
      },
      initialValue: 'in-stock',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
}
