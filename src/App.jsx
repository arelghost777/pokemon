import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	//State
	const [pokemons, setPokemons]=useState([
		{id:"1",name:"Bulbasaur",url:"https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png"},
		{id:"2",name:"Ivysaur",url:"https://www.pokepedia.fr/images/4/44/Herbizarre-RFVF.png"},
		{id:"3",name:"Venusaur",url:"https://www.pokepedia.fr/images/4/42/Florizarre-RFVF.png"},
		{id:"4",name:"Charmander",url:"https://www.pokepedia.fr/images/8/89/Salamèche-RFVF.png"},
		{id:"5",name:"Charmeleon",url:"https://www.pokepedia.fr/images/6/64/Reptincel-RFVF.png"}
		])
	const [score,setScore]=useState(0)
	const [bestScore,setBestScore]=useState(0)
	const [count,setCount]=useState({})
	
	//Comportement
	const useShuffle=(array)=> {
    const shuffleArray = () => [...array].sort(() => Math.random() - 0.5);
		return shuffleArray;
	}
	const handleClick =(id)=>{
		setCount((prevCount)=>{
			setScore((prevScore)=>prevScore+1)
			setPokemons(useShuffle(pokemons))
			const newCount={...count}
			newCount[id]= (newCount[id] || 0) +1;
			if (newCount[id] === 2){
				setCount()
				setBestScore((prevBestScore)=> score > prevBestScore ? score : prevBestScore)
				setScore(0)
			}
			return newCount;
		})
		
		
		// setPokemons(shuffleArray(pokemons))
	}
	//Affichage
	
	return(
		<>
			<header className="text-wite">
				<ul className="list-group list-group-horizontal d-flex justify-content-center fixed-top mx-3">
					<li className="list-group-item">Score: {score}</li>
					<li className="list-group-item">Best Score: {bestScore}</li>
				</ul>
				<h1 className="mt-5 display-1 text-white">Pokemon Memory Game</h1>
				<h5>Get points by clicking on an image but don't click on any more than once!</h5>
			</header>
			<main className="my-5">
				<div className="d-flex flex-column gap-3">
					{pokemons.map((pokemon)=>(
						<div onClick={()=>handleClick(pokemon.id)} key={pokemon.id} className="w-75 card m-auto p-4 bg-dark pokemon">
							<img src={pokemon.url} alt={pokemon.name} className="img-fluid"/>
							<legend className="text-white text-center mt-3 bg-info rounded">{pokemon.name}</legend>
						</div>
					))}
				</div>
			</main>
		</>
	)
	}

export default App
