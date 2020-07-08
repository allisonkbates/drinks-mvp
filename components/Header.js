function Header() {
  return (
    <div className="bg-header">
      <h1 className="hero-h1">Featured <br></br> Cocktails</h1>
      <a href="https://airtable.com/shr3Qkn6shcPr8QbW" target="_blank">Add Cocktail</a>
    <style jsx>{`
        .bg-header {
          background-image: url('/cover-img.png');
          background-position: center center;
          background-size: cover;
          height: 432px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 60px;
        }
        .hero-h1 {
          font-family: 'Notable', sans-serif;
          color: #E4E4E0;
          font-size: 48px;
          margin-top: 0;
        }
        a {
          background-color: #E4E4E0;
          color: #220E05;
          width: max-content;
          padding: 10px 20px;
          font-family: 'Julius Sans One', sans-serif;
          font-size: 16px;
          border: none;
          border-radius: 2px;
          text-decoration: none;
        }
        a:hover {
          background-color: #220E05;
          color: #E4E4E0;
          transition: .4s;
        }
      `}</style>
    </div>
  )
} 

export default Header;