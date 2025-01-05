export default function Fruits({fruit,onClick,text="X"}){
	
	//State
	
	//Comportements
	
	//Affichage
	return(
		<div className="card m-3 p-2">
			<h3 className="card-title">{fruit.nom}</h3>
			<p>La {fruit.nom} est un fruit tres bon pour la sante. manger en trois fois par jour</p>
			<a className="link-info underline-0">see more...</a>
			<button className="btn btn-outline-danger" onClick={onClick}>{text}</button>
		</div>
		)
}