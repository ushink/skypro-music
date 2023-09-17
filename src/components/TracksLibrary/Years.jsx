const Years = [
  "1997",
  "1986",
  "2001",
  "1999",
  "2003",
  "2015",
  "1991",
  "2007",
  "1986",
  "2001",
  "1999",
  "2003",
];
const list = Years.map((Year) => (
  <li>
    <a href="#" className="filter__list-item">
      {Year}
    </a>
  </li>
));

export default function ShowYears() {
  return (
    <div className="filter__menu">
      <ul className="filter__list">{list}</ul>
    </div>
  );
}
