import styles from '../styles/Nav.module.scss';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className="nav-left">
        <img src="/logo-color.svg" height="40"></img>
        <h1>Your Fave Drinks</h1>
      </div>
      <div className="nav-right">
        <label>
          {/* <img src="/search.svg" height="30"></img> */}
          <input type="search" placeholder="Search"></input>
        </label>
        <a href="https://airtable.com/shrD598BUY6GUrvFP" target="_blank">
          <div className="cta">Add Cocktail</div>
        </a>
      </div>
      <style jsx>{`
       
      `}</style>
    </div>
  )
}

export default Nav; 