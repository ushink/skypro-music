const Genres = ['Pop', 'Rock', 'Classic','Pop', 'Rock', 'Classic','Pop', 'Rock', 'Classic'];
const list = Genres.map((Genre)=>
<li>{Genre}</li>)

export default function ShowGenres() {
  return (
    <div className ="filter__menu">
      <ul className ="filter__list">
        {list}
      </ul>
    </div>
  );
}
