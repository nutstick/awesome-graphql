/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQuery
// ====================================================

export interface PostQuery_posts_edges_node_author {
  __typename: "User";
  id: string;
  avatar: string;
  username: string;
}

export interface PostQuery_posts_edges_node_comments_author {
  __typename: "User";
  avatar: string;
}

export interface PostQuery_posts_edges_node_comments {
  __typename: "Comment";
  id: string;
  author: PostQuery_posts_edges_node_comments_author;
  content: string;
}

export interface PostQuery_posts_edges_node {
  __typename: "Post";
  id: string;
  author: PostQuery_posts_edges_node_author;
  image: any | null;
  caption: string | null;
  comments: PostQuery_posts_edges_node_comments[] | null;
}

export interface PostQuery_posts_edges {
  __typename: "PostEdges";
  node: PostQuery_posts_edges_node;
}

export interface PostQuery_posts {
  __typename: "PostConnection";
  edges: PostQuery_posts_edges[] | null;
}

export interface PostQuery {
  posts: PostQuery_posts | null;
}
