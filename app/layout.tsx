import './../styles/global.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
