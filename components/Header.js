function Header() {
  return (
    <div className="bg-header">
      <h1 className="hero-h1">Featured <br></br> Cocktails</h1>
      <button className="btn-light">Read More</button>
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
        .btn-light {
          background-color: #E4E4E0;
          color: #220E05;
          height: 40px;
          width: max-content;
          padding: 10px 20px;
          font-family: 'Julius Sans One', sans-serif;
          font-size: 16px;
          border: none;
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
} 

export default Header;