export default {
  name: 'blog',
  type: 'document',
  title: 'James Webb Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titulo da postagem',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug da postagem',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Capa da postagem',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Descrição curta da postagem',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Conteudo da postagem',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
