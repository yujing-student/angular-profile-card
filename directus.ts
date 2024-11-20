import {createDirectus, rest} from "@directus/sdk";

type Global = {
  slug: string;
  title: string;
  description: string;
}

type Author = {
  slug: string;
  name: string;
}

type Page = {
  slug: string;
  title: string;
  content: string;
}

type Post = {
  slug: string;
  image: string;
  title: string;
  content: string;
  author: Author;
  published_date: string;
}

type Schema = {
  global: Global;
  posts: Post[];
  pages: Page[];
}

const directus =
  createDirectus<Schema>("https://fdnd-agency.directus.app/")
    .with(rest());

export {directus, Global, Post, Page}
