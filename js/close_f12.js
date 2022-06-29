document.oncontextmenu = function(event){
	event.preventDefault()
}

if(document.all){
	document.onselectstart = function(){
		return false
	}
}else{
	document.onmousedown = function(){
		return false
	}
	document.onmouseup = function(){
		return true
	}
}

document.oncopy = function(event){
	if(window.event){
		event = window.event
	}
	try{
		var the = event.srcElement
		if(
			!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') ||  the.tagName == 'TEXTAREA')
		){
			return false
		}
		return true
	}catch(e){
		return false
	}
}