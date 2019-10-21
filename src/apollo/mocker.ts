import { createMockerFromIntrospection } from 'fraql/mock';
import introspectionData from '../../schema.json';

export default createMockerFromIntrospection(introspectionData, {
  mocks: {
    Url: () => 'My article title',
  },
});
