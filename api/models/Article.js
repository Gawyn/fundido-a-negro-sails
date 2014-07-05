module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'text',
      required: true
    },
    slug: {
      type: 'string',
      required: true,
      unique: true
    }
  }
};
