import { useState } from 'react'
export default function Form({handleAdd}){
	//State
	const [nouveauFruit, setNouveauFruit]=useState("")
	//Comportements
	const gererSoumission=(event)=>{
		event.preventDefault()
		const id= new Date().getTime()
		const nom= nouveauFruit
		const fruitAAjouter= {id,nom}
		handleAdd(fruitAAjouter)
		setNouveauFruit("")
	}
	const gererChangement=(event)=>{
		setNouveauFruit(event.target.value)
	}
	//Affichage
	return(
		<form action="submit" onSubmit={gererSoumission}>
			<input className="form-control" value={nouveauFruit} onChange={gererChangement} type="text" placeholder="Nouveau fruit..."/>
			<button className="btn btn-primary">Ajouter</button>
		</form>
	)
}