import Header from './Header'

const style = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = ({ children }) => (
  <div style={style}>
    <Header />
    {children}
  </div>
)

export default Layout
