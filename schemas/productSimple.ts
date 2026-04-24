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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
}
