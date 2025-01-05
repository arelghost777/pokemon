import {useState} from 'react'
export default function Input({type="text",text,value,setter,state,key,onChange}){
	
	return(
		<input value={value} className="form-control" type={type} placeholder={text}
		onChange={onChange}/>
		)
}