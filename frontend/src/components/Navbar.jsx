import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ background: '#8B4513', padding: '1rem', display: 'flex', gap: '2rem' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🍬 Dulces Colombianos</Link>
      <Link to="/productos" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link>
      <Link to="/nosotros" style={{ color: 'white', textDecoration: 'none' }}>Nosotros</Link>
      <Link to="/desarrolladores" style={{ color: 'white', textDecoration: 'none' }}>Equipo</Link>
    </nav>
  )
}

export default Navbar