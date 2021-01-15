import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Blog = {
  __typename?: "Blog";
  id: Scalars["ID"];
  title: Scalars["String"];
  content: Scalars["String"];
  views: Scalars["Int"];
  status: Scalars["String"];
  publishedAt: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
  role: Scalars["String"];
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  error?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  error?: Maybe<Array<FieldError>>;
  accessToken?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  blogs: Array<Blog>;
  testUser: Scalars["String"];
  me: User;
};

export type Mutation = {
  __typename?: "Mutation";
  register: UserResponse;
  login: LoginResponse;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationLoginArgs = {
  account: LoginInput;
};

export type RegisterInput = {
  username: Scalars["String"];
  password: Scalars["String"];
  role: Scalars["String"];
};

export type LoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type BlogsQueryVariables = Exact<{ [key: string]: never }>;

export type BlogsQuery = { __typename?: "Query" } & {
  blogs: Array<
    { __typename?: "Blog" } & Pick<
      Blog,
      "id" | "title" | "views" | "status" | "publishedAt" | "content"
    >
  >;
};

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "LoginResponse" } & Pick<
    LoginResponse,
    "accessToken"
  > & {
      error?: Maybe<
        Array<
          { __typename?: "FieldError" } & Pick<FieldError, "field" | "message">
        >
      >;
    };
};

export const BlogsDocument = gql`
  query Blogs {
    blogs {
      id
      title
      views
      status
      publishedAt
      content
    }
  }
`;

/**
 * __useBlogsQuery__
 *
 * To run a query within a React component, call `useBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogsQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogsQuery, BlogsQueryVariables>
) {
  return Apollo.useQuery<BlogsQuery, BlogsQueryVariables>(
    BlogsDocument,
    baseOptions
  );
}
export function useBlogsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogsQuery, BlogsQueryVariables>
) {
  return Apollo.useLazyQuery<BlogsQuery, BlogsQueryVariables>(
    BlogsDocument,
    baseOptions
  );
}
export type BlogsQueryHookResult = ReturnType<typeof useBlogsQuery>;
export type BlogsLazyQueryHookResult = ReturnType<typeof useBlogsLazyQuery>;
export type BlogsQueryResult = Apollo.QueryResult<
  BlogsQuery,
  BlogsQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(account: { username: $username, password: $password }) {
      accessToken
      error {
        field
        message
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
