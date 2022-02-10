import './Search.css';

export default function Search() {
  return (
    <div class='topnav__search-text topnav__center'>
      <i class='fa fa-search'></i>
      <input type='text' class='topnav__buscar' placeholder='Buscar...' />
    </div>
  );
}
