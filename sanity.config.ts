import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  projectId: 'r397y8o5',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-19',
  schema: {
    types: schemaTypes,
  },
})
