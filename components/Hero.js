function Hero() {
  return (
    <div className="hero">
      <div className="hero__badge">
        <p className="hero__badge__copy">DRINK OF THE DAY</p>
      </div>
      <div className="hero__card">
        <h2 className="hero__card__title">Boulevardier</h2>
        <p className="hero__card__copy">Learn how to make this classic whiskey twist on the Negroni. A simple drink with whiskey, sweet vermouth & campari.</p>
      </div>
    <style jsx>{`
      .hero {
        background: url('/hero-image-desktop.png');
        background-position: center center;
        background-size: cover;
        height: 490px;
        display: flex;
        flex-direction: column;
      }
      .hero__badge {
        background-color: #377084;
        height: 110px;
        width: 110px;
        border-radius: 50%;
        margin: 110px 25px -55px 25px;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .hero__badge__copy {
        font-family: 'Advent Pro', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #EFF3F4;
        text-align: center;
        padding: 22px;
      }
      .hero__card {
        background-color: #EFF3F4;
        height: 220px;
        width: 300px;
        margin: 0px 80px;
        color: #222222;
        
      }
      .hero__card__title {
        font-family: 'Advent Pro', sans-serif;
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        margin-top: 32px 0px 24px 0px;
      }
      .hero__card__copy {
        font-family: 'Oxygen', sans-serif;
        font-size: 16px;
        padding: 0px 32px;
        text-align: center;
      }
    `}</style>  
    </div>
  )
}

export default Hero;