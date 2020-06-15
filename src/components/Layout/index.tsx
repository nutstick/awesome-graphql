import React from 'react';
import { Layout as AntLayout } from 'antd';

const Layout: React.SFC = ({ children }) => {
  return (
    <AntLayout>
      <AntLayout.Header />
      <AntLayout.Content>{children}</AntLayout.Content>
      <AntLayout.Footer />
    </AntLayout>
  );
};

export default Layout;
