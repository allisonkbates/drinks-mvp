function Filters() {
  return (
    <div className="filters">
      <h2>Filter By:</h2>
      <button className="filter-chip">Gin</button>
      <button className="filter-chip">Whiskey</button>
      <button className="filter-chip">Vodka</button>
      <button className="filter-chip">Rum</button>
      <style jsx>{`
        .filters {
          display: flex;
          flex-direction: row;
          padding-left: 20px;
          margin: 40px;
        }
        h2 {
          color: #200d06;
          font-family: 'Julius Sans One', sans-serif;
          font-size: 18px;
          margin-right: 9px;
        }
        .filter-chip {
          background-color: #220E05;
          color: #E4E4E0;
          font-family: 'Julius Sans One', sans-serif;
          font-size: 18px;
          padding: 10px 20px;
          margin: 6px;
          border: none;
          border-radius: 50px;
        }
      `}
      </style>
    </div>
  )
}

export default Filters;