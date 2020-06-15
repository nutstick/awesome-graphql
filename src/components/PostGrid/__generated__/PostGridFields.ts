/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostGridFields
// ====================================================

export interface PostGridFields_edges_node_author {
  __typename: "User";
  id: string;
  avatar: string;
  username: string;
}

export interface PostGridFields_edges_node_comments {
  __typename: "CommentConnection";
  totalCount: number;
}

export interface PostGridFields_edges_node_likes {
  __typename: "UserConnection";
  totalCount: number;
}

export interface PostGridFields_edges_node {
  __typename: "Post";
  id: string;
  author: PostGridFields_edges_node_author;
  image: any | null;
  caption: string | null;
  comments: PostGridFields_edges_node_comments | null;
  likes: PostGridFields_edges_node_likes | null;
}

export interface PostGridFields_edges {
  __typename: "PostEdges";
  node: PostGridFields_edges_node;
  cursor: string;
}

export interface PostGridFields {
  __typename: "PostConnection";
  edges: PostGridFields_edges[] | null;
}
