import './App.css';
import Navbar from './My_components/Navbar';
import Main from './My_components/Main';
import React from 'react';

function App() {
  // Search data and Api Calls
  const [apidata, setapidata] = React.useState(
    {
      "id": 3,
      "name": "Abin Sur",
      "slug": "3-abin-sur",
      "powerstats": {
        "intelligence": 50,
        "strength": 90,
        "speed": 53,
        "durability": 64,
        "power": 99,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Ungaran",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lagzia"
        ],
        "placeOfBirth": "Ungara",
        "firstAppearance": "Showcase #22 (October, 1959)",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "work": {
        "occupation": "Green Lantern, former history professor",
        "base": "Oa"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps, Black Lantern Corps",
        "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
      },
      "images": {
        "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg",
        "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg",
        "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg",
        "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg"
      }
    }
  )
  const [search, setSearch] = React.useState("")
  const searching = search ? "?hero=" + { search } : ""

  function toggleSearch(val) {
    setSearch(val)
  }

  function changeapidata(optiondata) {
    setapidata(apidata)
  }

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'X-RapidAPI-Key': '0a38bc4df8mshc3f580867395f02p15af7djsn121abbc4f899' }
    };
    async function getdata() {
      const res = await fetch(`https://superhero-search.p.rapidapi.com/api/${searching}`, options)
      const data = await res.json()
      setapidata(data)
    }
    getdata()

  }, [search])


  return (
    <div className='bg-[#0f0f0f] h-screen overflow-x-hidden '>
      <Navbar toggleSearch={toggleSearch} changedata={changeapidata} />
      <Main data={apidata} />
    </div>
  );
}

export default App;
