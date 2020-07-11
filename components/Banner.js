import Link from 'next/link';

function Banner() {
  return (
    <div>
      <p><Link href="/home"><a>Check out a new & improved design here.</a></Link></p>
      <style jsx>{`
        div {
          padding: 0px 55px;
        }
        a {
          color: #ff7e1a;
        } 
      `}</style>
    </div>
  )
}

export default Banner;