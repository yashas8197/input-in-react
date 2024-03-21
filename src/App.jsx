import "./App.css";
import { useState } from "react";

const ValidatePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState();

  const handleOnClick = () => {
    phoneNumber.length === 10
      ? alert("valid Phone Number")
      : alert("Invalid Phone Number");
  };

  return (
    <div>
      <label htmlFor="inputPhoneNumber">Enter Your Phone Number: </label>
      <input
        type="number"
        id="inputPhoneNumber"
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <button onClick={handleOnClick}>Validate Phone Number</button>
    </div>
  );
};

const CheckStrength = () => {
  const [passWord, setPassWord] = useState();

  const clickHandler = () => {
    passWord.length >= 8
      ? alert("Password Strength: Strong")
      : alert("Password Strength: weak");
  };

  return (
    <div>
      <label for="password">Enter your password: </label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassWord(e.target.value)}
      />
      <button onClick={clickHandler}>Check Password Strength</button>
    </div>
  );
};

const CalculateDate = () => {
  const [dateOfBirth, setDateOfBirth] = useState()

  const clickHandler = () => {
    let currYear = new Date().getFullYear()

    let calculateAge =  currYear - dateOfBirth.slice(0,4)
    alert(`you are ${calculateAge} years old.`)
  }
  
  return (
    <div>
      <label for='dob'>Enter yosur date of birth: </label>
      <input type="date" id="dob" onChange={(e) => {
      setDateOfBirth(e.target.value)}}/>
      <button onClick={clickHandler}>Calculate Button</button>
    </div>
  )
}

const FavoriteColor = () => {
  const [color, setColor] = useState('');
  const [favColor, setFavColor] = useState();

  const handelClick = () => {
    setFavColor(color)
  }
  
  return (
    <div>
      <label for='favoriteColor'>Enter Your Favorite Color: </label>
      <input id="favoriteColor" onChange={(e) => setColor(e.target.value)}/>
      <button onClick={handelClick}>Display Color</button>
      {
      favColor && <p>Your Favorite Color is: {favColor}</p>
      }
    </div>
  )
}

const SearchQuery = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  const handleClick = () => {
    setQuery(search)
  }
  return (
    <div>
      <label for='searchBar'>Enter Your Search Query: </label>
      <input id="searchBar" onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
      {
        query && <p>Searching for: {query}</p>
      }
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ValidatePhoneNumber />
      <br />
      <CheckStrength />
      <br/>
      <CalculateDate/>
      <br/>
      <FavoriteColor/>
      <br/>
      <SearchQuery/>
    </main>
  );
}
