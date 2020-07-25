import Link from 'next/link';

function Nav() {
  return (
    <div className="nav">
      <Link href="/">
        <div className="nav-left">
          <img src="/logo-color.svg" height="40"></img>
          <h1>Your Fave Drinks!</h1>
        </div>
      </Link>
      <div className="nav-right">
        <label>
          {/* <img src="/search.svg" height="30"></img> */}
          <input type="search" placeholder="Search"></input>
        </label>
        <Link href="/form">
          <a className="cta">Add Cocktail</a>
        </Link>
      </div>
      <style jsx>{`
        .nav {
          height: 72px; 
          font-family: 'Advent Pro', sans-serif;
          display: flex;
          background-color: #EFF3F4ß;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 0px 80px;
        }
        .nav-left {
          cursor: pointer;
        }

        .nav-left, .nav-right {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        h1 {
          font-family: 'Advent Pro', sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #377084;
          margin-left: 5px;
        }
        input {
          font-family: 'Advent Pro', sans-serif;
          height: 40px;
          border: 1px solid #377084;
          border-radius: 20px;
          font-size: 16px;
          padding: 0px 25px;
          color: #377084;
        }
        input::placeholder {
          color: #377084;
        }
        .cta {
          height: 40px;
          padding: 0px 25px;
          background-color: #377084;
          border: 1px solid #377084;
          border-radius: 20px;
          display: flex;
          align-items: center;
          margin-left: 16px;
        }
        a {
          color: #EFF3F4;
          font-family: 'Advent Pro', sans-serif;
          font-size: 16px;
          text-decoration: none;
        }*/
      `}</style>
    </div>
  )
}

export default Nav; 