export default function Button({className="btn btn-primary",text="Submit",onClick}){
	
	
	return(
		<button className={className} onClick={onClick}>{text}</button>
		)
}