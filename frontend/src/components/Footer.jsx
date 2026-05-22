function Footer() {
  return (
    <footer style={{ background: '#8B4513', color: 'white', padding: '2rem', textAlign: 'center' }}>
      <p>Síguenos en nuestras redes sociales</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
        <a href="https://instagram.com" target="_blank" style={{ color: 'white' }}>📸 Instagram</a>
        <a href="https://facebook.com" target="_blank" style={{ color: 'white' }}>📘 Facebook</a>
        <a href="https://wa.me/tunumero" target="_blank" style={{ color: 'white' }}>💬 WhatsApp</a>
        <a href="https://linkedin.com" target="_blank" style={{ color: 'white' }}>💼 LinkedIn</a>
      </div>
      <p style={{ marginTop: '1rem' }}>© 2026 Dulces Colombianos</p>
    </footer>
  )
}

export default Footer