import { useEffect, useState } from 'react';
import './App.css';
import tbdm from './tmdb'
import Movierow from './components/movierow';
import Featuremovie from './components/featuremovie.js';
import tmdb from './tmdb';
import Header from './components/Header'

function App() {
  const [movielist, setmovielist] =  useState([]);
  const [featuredata, setfeaturedata] = useState (null)
  const [blackheader , setblackheader] = useState (false)


  useEffect(()=>{
    const loadall = async () =>{
      let list = await tbdm.getHomelist();
      setmovielist(list);

      let originals = list.filter(i=>i.slug=='originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosenmovie = originals[0].items.results[random];
      if (chosenmovie.name == "Amor Amor"){
        loadall();
        console.log("trocando de filme")
      }
      let choseninfo = await tmdb.getMovieinfo(chosenmovie.id, 'tv')
      if (choseninfo.overview == ""){
        loadall();
        console.log("trocando de filme")
      }
      setfeaturedata(choseninfo)
    }
    loadall();
  },[])
  useEffect(()=>{
    const scrolllister = () =>{
      if(window.scrollY > 1){
        setblackheader(true)
      } else{
        setblackheader(false)
      }
    }
    window.addEventListener('scroll', scrolllister);
    return () => {
      window.removeEventListener('scroll', scrolllister);
    }
  },[])


  return (
    <div className="page">
      <Header black={blackheader}/>
      {featuredata && <Featuremovie item={featuredata}/>}
      <section className="lists">
        {movielist.map((item, key)=>(
          <Movierow key={key} title={item.title} items = {item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
