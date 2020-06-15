/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFields
// ====================================================

export interface PostFields_author {
  __typename: "User";
  id: string;
  avatar: string;
  username: string;
}

export interface PostFields_comments {
  __typename: "CommentConnection";
  totalCount: number;
}

export interface PostFields_likes {
  __typename: "UserConnection";
  totalCount: number;
}

export interface PostFields {
  __typename: "Post";
  author: PostFields_author;
  image: any | null;
  caption: string | null;
  comments: PostFields_comments | null;
  likes: PostFields_likes | null;
}
