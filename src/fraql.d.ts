declare module 'fraql' {
  function gql(literals: any, ...placeholders: any[]): any;

  export function toInlineFragment(
    fragment: import('graphql').DocumentsNode,
  ): import('graphql').DocumentsNode;

  export default gql;
}

declare module 'fraql/mock' {
  interface Options {
    mocks: { [key: string]: any };
  }

  interface Documents {
    [key: string]: any;
  }

  class Mocker {
    constructor(schema: any, options: Options = {});
    mockSchema(options: Options = {}): any;
    mockFragment<T>(
      fragmentDocument: import('graphql').DocumentNode,
      options: Options = {},
    ): T;
    mockFragments(
      fragmentDocuments: Documents,
      options: Options = {},
    ): {
      [P in keyof Documents]: any;
    };
  }

  export function createMockerFromIntrospection(
    literals: any,
    options: Options,
  ): Mocker;
}
