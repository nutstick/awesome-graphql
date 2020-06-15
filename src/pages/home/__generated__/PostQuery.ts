/* tslint:disable */
/* eslint-disable */
// @generated
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

export interface PostQuery_posts_edges_node_comments {
  __typename: "CommentConnection";
  totalCount: number;
}

export interface PostQuery_posts_edges_node_likes {
  __typename: "UserConnection";
  totalCount: number;
}

export interface PostQuery_posts_edges_node {
  __typename: "Post";
  id: string;
  author: PostQuery_posts_edges_node_author;
  image: any | null;
  caption: string | null;
  comments: PostQuery_posts_edges_node_comments | null;
  likes: PostQuery_posts_edges_node_likes | null;
}

export interface PostQuery_posts_edges {
  __typename: "PostEdges";
  node: PostQuery_posts_edges_node;
  cursor: string;
}

export interface PostQuery_posts {
  __typename: "PostConnection";
  edges: PostQuery_posts_edges[] | null;
  totalCount: number;
}

export interface PostQuery {
  posts: PostQuery_posts | null;
}
