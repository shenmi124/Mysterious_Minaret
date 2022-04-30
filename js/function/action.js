function enemy_action(){
	typemoster()
	enemy_attack_action(1)
	player.data.dehp = player.data.dehp.sub(player.data.deeffect[3])
	player.data.dede = player.data.dede.div(2).floor()
}

function our_action(){
	getcard("display",3)
	player.data.ps = new Decimal(player.data.psmax)

	var cards = player.data.card
	var cards2 = player.data.cardintermediary
	var nothing = true
	for(i in cards){
		for(o in cards2){		
			if(cards[i].gt(0)&&cards2[o].lte(0)){nothing = false}
		}
	}
	if(player.data.backdeckCD){
		for(col=1;col<=player.data.allcard;col++){
			player.data.card[col] = player.data.card[col].add(player.data.cardintermediary[col])
			player.data.cardintermediary[col] = new Decimal(0)
			player.data.carddead[col] = new Decimal(0)
		}
		player.data.backdeckCD = false
	}else if(nothing){
		player.data.backdeckCD = true
	}

	//回合结束
	player.data.Rare_Artifacts_Sole[0].gte(1) ? attributes(player.data.effect[3].div(2).floor(),0,0,0,0,0) : attributes(player.data.effect[3],0,0,0,0,0)
	attributes(player.data.effect[2],0,0,0,0,0)
	player.data.card40eff14 = false
	player.data.effect[14] = player.data.effect[14].add(player.data.card40geteff14)
	player.data.card40geteff14 = new Decimal(0)
}

function typemoster(){
	if(player.data.monster.eq(1)){
		player.data.effect[4] = player.data.effect[4].add(1)
	}
	
	if(player.data.monster.eq(2)){
		let cao = 1
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
	
	if(player.data.monster.eq(3)){
		let eff5 = new Decimal(Math.floor((Math.random() * 100)) + 1)
		if(eff5<=25){player.data.effect[5] = player.data.effect[5].add(2)}
	}
	
	if(player.data.monster.eq(4)){
		player.data.deatk = player.data.deatk.mul(2)
	}
	
	if(player.data.monster.eq(5)){
		if(player.data.dehp.lte(player.data.dehpmax.mul(0.3))){
			enemy_attack_action(1)
		}
	}
	
	if(player.data.monster.eq(6)){
		player.data.effect[11] = player.data.effect[11].add(2)
		player.data.effect[3] = player.data.effect[3].add(3)
	}
}
