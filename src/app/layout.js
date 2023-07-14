const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Restaurant POS</footer>
    </div>
  );
};

export default Layout;
