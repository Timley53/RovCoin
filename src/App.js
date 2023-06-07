import './App.css';
import Company from './components/Company/Company';
import Faq from './components/Faq & Footer/Faq';
import Header from './components/Header';
import Team from './components/Team/Team';
import Timeline from './components/Timeline/Timeline';
import FirstHand from './components/services/FirstHand';
import Services from './components/services/Services';

import RovCoinContext from './components/Utils'
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Faq & Footer/Footer';
import Nav from './components/header/Nav';

function App() {
  const [int, setInt] = useState(false)
  const myRef = useRef()



useEffect(() => {
  const observer = new IntersectionObserver(([Entry])=>{

    console.log(Entry.boundingClientRect.top);
    console.log(Entry.isIntersecting);
    
    setInt(Entry.isIntersecting)
    
    

  }, {
    rootMargin: '',
    
  })

  observer.observe(myRef.current)

  return () => observer.disconnect()
}, [])



  return (

    <RovCoinContext.Provider value={{myRef, int}}>

    l<div className="App flex flex-col m-0 p-0">
      <Nav/>
      <Header/>
      <Company/>
      <Services/>
      <FirstHand/>
      <Timeline/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
    </RovCoinContext.Provider>
  );
}

export default App;
