import react, { useState } from'react';
import axios from 'axios' ;
import YouTube from 'react-youtube';
import './App.css';
function App() {
  const API_URL='https://www.themoviedb.org/3';
  const API_KEY='9110b92a6b700babcd044371f656d282';
  const IMAGE_PATH='https://image.tmdb.org/t/p/original';
  const URL_IMAGE='https://image.tmdb.org/t/p/original';

  //variables de estado
  const [movies,setmovies]=useState([])
  const [searchkey, setsearchkey]=useState("")
  const [trailer, settrailer] = useState(null)
  const [movie, setMovie]=useState({title:"loading movie"});
  const [playing, setplaying]=useState(false);
//funcion para realizar peticion ppor get
  const pedir=async(searchkey)=>{
    const type=searchkey ? "search": "discover"
    const {data:{result},
  }=await axios.get('${API_URL}/${type}/movie',{
    parent:{
      api_key:API_KEY,
      query:searchkey,
    },
  });
  setmovies(result)
  setMovie(result[0])
  }

  return (
    <div>
      {/* contenedor poster peliculas actuales*/}
      <div className='contener'>
        <div className='row'>
          {movies.map((movie)=>(
            <div key={movie.id} className='col-1'>
              <img src={'${URL_IMGE+ movie.}'}>

              </img>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
