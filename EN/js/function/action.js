function enemy_action(){
	typemoster()
	enemy_attack_action(0)
}

function our_action(){
	getcard("display",3)
	player.data.ps = new Decimal(player.data.ps).add(3).min(player.data.psmax)
	if(player.data.initialize==false){
		remap()
		player.data.initialize = true
	}
}

function typemoster(){
	if(player.data.affix_1==true){
		player.data.effect[4] = player.data.effect[4].add(4)
	}
	
	if(player.data.affix_2==true){
		let cao = 1
		let tow = Math.floor((Math.random() * 2))
		if(tow==1){cao = 2}
		for(col=1;col<=cao;col++){
			if(player.data.holdcard.lte(player.data.maxcard.sub(1))){
				if(player.data['display'+col].eq(0)){
					player.data['display'+col] = new Decimal(19)
					player.data.holdcard = player.data.holdcard.add(1)
				}else{
					cao++
				}
			}
		}
	}
	
	if(player.data.affix_3==true){

	}
	
	if(player.data.affix_5==true){
		if(player.data.dehp.lte(player.data.dehpmax.mul(0.3))){
			enemy_attack_action(1)
		}
	}
	
	if(player.data.affix_6==true){
		player.data.effect[11] = player.data.effect[11].add(2)
		player.data.effect[3] = player.data.effect[3].add(5)
	}
	
	if(player.data.affix_7==true){

	}
}
