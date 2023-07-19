import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: "hi2kbse1",
  dataset: "production",
  apiVersion: "2022-10-10",
  token:
    "skykLWmAMqqw7fQoj7hrTjFKrC4n1IthUsOZu4cBhT6IXmXCWXSx3NPYh6YSWckCNCLefbCLNGBwcP86Dp2hRyr7rBIw1UwFFQ5SPSQ5vwPpPuVJNegG3KIZ0l2mh0ZyONdTsxW7n1VuYsv9rog53K00dXHns8iwUBxxBBDMcpwQUwfm3hyG",
  useCdn: false,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source);
