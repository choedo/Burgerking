import React, { useState } from 'react';
import MapContainer from './MapContainer';

import "./search.css";

function Search() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('버거킹');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
  };

  return (
    <div className="mapBox">
      <MapContainer searchPlace={Place} />
      <form className="inputForm" onSubmit={handleSubmit}>
        <div className='searchBox'>
          <input className='searchInput' placeholder="매장명을 입력해주세요" onChange={onChange} value={InputText} />
          <button className='searchBtn' type="submit"></button>
        </div>
      </form>
    </div>
  )
}

export default Search;