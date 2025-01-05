import React from "react"
import {useState} from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx'
import Display from './Display.jsx'
export default function Section({title,state,setter,children}){
	
	const [display,setDisplay]=useState(true)
	const [newInfo,setNewInfo]=useState("")
	
	const handleSubmit=(event)=>{
		event.preventDefault()
	
		setter({...state,[key]:newInfo})
	}
	const handleChange=(event,setter,state,key)=>{
		const newInfo = event.target.value
	}
	const onClick=()=>{
		setDisplay((prevDisplay)=>!prevDisplay);
	}
	return(
		<div className="my-4 px-2 py-4 border shadow-sm ">
			<h3 className="m-auto text-success fs-3 mb-3">{title}</h3>
			{ !display && (
				<div>
					{Object.entries(state).map(([key,value]) => (
					<div className="d-flex" key={key}>
						<p><span className="h6 text-primary text-decoration-underline">{key}:</span> {value}</p>
					</div>
					))}
					<Button onClick={onClick} className="btn btn-secondary" text="Modify"/>
				</div>
			)}
			{display && (
				<form className={display} action="submit" onSubmit={handleSubmit}>
					{children}
					{Object.entries(state).map(([key,value]) => (
						<div className="mb-3" key={key}>
							<label className="form-label">Enter your {key}:</label>
							<Input value={value} type={key==="number" ? "number":key==="date" ? "date" : "text"}  setter={setter} state={state} text={key==="date" ? "" :`Enter your ${key}`}
							onChange={(event)=> setNewInfo((newInfo)=>event.target.value)}
							/>
							<p>{newInfo}</p>
						</div>
					))}
					<Button onClick={onClick} className="btn btn-primary"/>
				</form>
			)}
		</div>
		)
}