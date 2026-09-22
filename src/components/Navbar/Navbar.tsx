import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>OficiosYa</span>
      <div className={styles.links}>
        <span>Buscar</span>
        <span>Categorías</span>
        <span>Registrarme</span>
        <span>Iniciar sesión</span>
      </div>
    </nav>
  )
}

export default Navbar