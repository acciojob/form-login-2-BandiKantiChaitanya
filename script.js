//your JS code here. If required.
let FirstName=document.getElementById('First Name')
let LastName=document.getElementById('Last Name')
let PhoneNumber=document.getElementById('Phone Number')
let EmailID=document.getElementById('Email ID')

function popup(e){
	e.preventDefault()
	alert(`First Name:${FirstName.value} Last Name:${LastName.value} Phone Number:${PhoneNumber.value} Email ID:${EmailID.value}   `)
}