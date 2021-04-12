import { createClient } from 'contentful';

const client = createClient({
  space: '15y4brz43wkn', // ID of a Compose-compatible space to be used \
  accessToken: 's4trNPPVCYDmlJK6xIwIyAhUE8x_YqEOh5z_ZXOObJM', // delivery API key for the space \
});

const fetchBlogEntries = async () => {
  return await client
    .getEntries({
      content_type: "blogPosts" // only fetch blog post entry
    })
    .then(posts => {
      if (posts && posts.items && posts.items.length > 0) {
        const blogPosts = posts.items.map(entry => convertPost(entry));
        console.log('ver Blog', blogPosts)
        return blogPosts;
      }
      return [];
    });
}

const convertImage = (rawImage) => {
  if (rawImage) {
    return {
      imageUrl: rawImage.file.url.replace('//', 'http://'), // may need to put null check as well here
      description: rawImage.description,
      title: rawImage.title,
    };
  }
  return null;
};

const convertPost = (rawData) => {
  const rawPost = rawData.fields;
  const rawImage = rawPost.image ? rawPost.image.fields : null;
  return {
    id: rawData.sys.id,
    body: rawPost.body,
    description: rawPost.description,
    publishedDate: rawPost.publishedDate,
    title: rawPost.title,
    image: convertImage(rawImage),
  };
};

export { fetchBlogEntries };