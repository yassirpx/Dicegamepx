
import './App.css';
import Scr from './score';
import Imqges from './images';
import Btn from './btn';
import User from'./user'
import {useEffect, useState} from 'react';

function App() {
  let [num,setNum]=useState(0);
  let [score, setScore]=useState(0);
  let [save,setSave]=useState(0);
  let [click,setClick]=useState(0);
  let [user,setuser]=useState('');
  let [player,setplayer]=useState('');
  let [title,setitle]=useState('Ur name ?');
  if(click===10 && save<100){
    alert("you lose "+JSON.stringify(player)+"  ;_;")
    setSave(0)
    setScore(0)
    setClick(0)
    setNum(0)
 } else if(save===100){
  alert("you win "+JSON.stringify(player)+"  *-*")
  setSave(0)
  setScore(0)
  setClick(0)
  setNum(0)
 }
  function Roll(){
   if(num!==1 && click!==10 && save<100){
    let n = Math.floor((Math.random()*6)+1)
    setNum(n)
   }else if(click===10 && save<100){
      setNum(0)
      setSave(0)
      setScore(0)
      setClick(0)
      
   } else if(save===100){
    setSave(0)
    setScore(0)
    setClick(0)
    setNum(0)
   }
  }
  function Ssave(){
    if(click<10){
    setSave(save+score)
    setScore(0)
    setNum(0)
    setClick(click+1)}
  }
  function hhh(){
    setSave(0)
    setScore(0)
    setClick(0)
    setNum(0)
    setplayer('')
    setuser('')
  } 

  function gg(event){
    event.preventDefault();
    if(user.length!==0){
     setplayer(user)
    }else{
      setitle('ur name pls -_- ???')
    }
  }
    
  useEffect(()=>{if(num!==1){
    setScore(s => s+num)}else{setScore(0)}},[num]
  )

 if(player.length!==0){
  return (
    <div className="App">
      <Imqges num={num}/>
      <Scr score={score} save = {save}  click ={click} />
     <Btn roll ={Roll} ssave={Ssave} hhhh={hhh} />

    </div>
  );}else{
    return(
      <div className="App">
        <User user={user} setuser={setuser} gg={gg} title={title} />
      </div>
    );

  }
}

export default App;
