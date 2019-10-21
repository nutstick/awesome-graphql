/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFields
// ====================================================

export interface PostFields_author {
  __typename: "User";
  avatar: string;
  username: string;
}

export interface PostFields_comments_author {
  __typename: "User";
  avatar: string;
}

export interface PostFields_comments {
  __typename: "Comment";
  id: string;
  author: PostFields_comments_author;
  content: string;
}

export interface PostFields {
  __typename: "Post";
  author: PostFields_author;
  image: any | null;
  caption: string | null;
  comments: PostFields_comments[] | null;
}
