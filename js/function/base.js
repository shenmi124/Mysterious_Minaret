function card_consumption(ps,mp,hp){
	return player.data.ps.gte(ps) && player.data.mp.gte(mp) && player.data.hp.gte(Decimal.add(hp).add(1).sub(player.data.effect[14]))
}

function attributes(hp,mp,ps,atk,mtk,de,sytlehp){
	gethp(hp,sytlehp)
	getmp(mp)
	player.data.ps = player.data.ps.add(ps)
	atktode(atk)
	mtktode(mtk)
	player.data.de = player.data.de.add(de)
}

function atktode(id){
	if(id > 0){
		player.data.atkto = new Decimal(id).add(player.data.effect[1])
		if(player.data.Special_Artifacts[2].gte(1)){
			player.data.dehp = player.data.dehp.sub(5)
		}
		if(player.data.deeffect[9].gte(1) && player.data.deeffect[8].gte(1)){
			player.data.atkto = player.data.atkto.add(3)
			getdeeffect(9,-1)
		}
		if(player.data.deeffect[7].gte(1)){
			getdeeffect(9,player.data.deeffect[7])
		}
	}else{
		player.data.atkto = new Decimal(id)
	}
	if(player.data.Super_Rare_Artifacts[1]){player.data.hp = player.data.hp.add(player.data.atkto.div(2).floor().mul(player.data.Super_Rare_Artifacts[1]))}
	if(player.data.dede.gte(player.data.atkto)){
		player.data.dede = player.data.dede.sub(player.data.atk)
		player.data.atkto = new Decimal(0)
	}else if(player.data.dede.gt(0)){
		player.data.atkto = player.data.atkto.sub(player.data.dede)
		player.data.dehp = player.data.dehp.sub(player.data.atkto)
		if(player.data.card40eff14 == true){
			player.data.card40geteff14 = player.data.card40geteff14.add(player.data.atkto)
		}
		player.data.dede = new Decimal(0)
	}else{
		player.data.dehp = player.data.dehp.sub(player.data.atkto)
		if(player.data.card40eff14 == true){
			player.data.card40geteff14 = player.data.card40geteff14.add(player.data.atkto)
		}
	}
}

function mtktode(id){
	if(id > 0){
		player.data.mtkto = new Decimal(id)
		if(player.data.deeffect[9].gte(1) && player.data.deeffect[8].gte(1)){
			player.data.mtkto = player.data.mtkto.add(3)
			getdeeffect(9,-1)
		}
		if(player.data.deeffect[7].gte(1)){
			getdeeffect(9,player.data.deeffect[7])
		}
	}else{
		player.data.mtkto = new Decimal(id)
	}
	player.data.dehp = player.data.dehp.sub(player.data.mtkto)
	if(player.data.card40eff14 == true){
		player.data.card40geteff14 = player.data.card40geteff14.add(player.data.mtkto)
	}
}

function gethp(id,id2){
	if(id > 0){
		player.data.hp = player.data.hp.add(id)
	}else if(id < 0){
		player.data.subhpto = new Decimal(0).sub(id)
		if(player.data.effect[13].gt(0)){
			player.data.subhpto = player.data.subhpto.sub(player.data.effect[13]).max(0)
			geteffect(13,-1)
		}
		if(player.data.effect[15].gt(0)){
			player.data.subhpto = player.data.subhpto.add(player.data.effect[15])
			geteffect(15,-1)
		}
		if(player.data.effect[14].gte(player.data.subhpto)&&id2=="card"){
			player.data.effect[14] = player.data.effect[14].sub(player.data.subhpto)
			player.data.subhpto = new Decimal(0)
		}else if(player.data.effect[14].gt(0)&&id2=="card"){
			player.data.effect[14] = player.data.effect[14].sub(player.data.subhpto)
			player.data.hp = player.data.hp.sub(player.data.subhpto)
			player.data.subhpto = new Decimal(0)
		}else{
			player.data.hp = player.data.hp.sub(player.data.subhpto)
		}
		if(player.data.card40eff14 == true){
			player.data.card40geteff14 = player.data.card40geteff14.add(player.data.subhpto)
		}
	}
}

function getmp(id){
	if(id > 0){
		if(player.data.effect[6].lte(0)){
			let getmpadd = player.data.Rare_Artifacts[0].gte(1) ? player.data.Rare_Artifacts[0].mul(1).add(1) : 1
			player.data.mp = player.data.mp.add(id).add(player.data.effect[0].mul(getmpadd))
		}
	}else{
		player.data.mp = player.data.mp.add(id)
	}
}

function enemy_attack_action(id){
	for(col=0;col<=id;col++){
		player.data.deatkto = new Decimal(player.data.deatk)
		if(player.data.de.gte(player.data.deatk)){
			player.data.de = player.data.de.sub(player.data.deatk)
			player.data.deatkto = new Decimal(0)
		}else if(player.data.de.gt(0)){
			player.data.deatkto = player.data.deatkto.sub(player.data.de)
			attributes(-player.data.deatkto.floor(),0,0,0,0,0)
			player.data.de = new Decimal(0)
		}else{
			attributes(-player.data.deatkto.floor(),0,0,0,0,0)
		}
	}
}

function tabFormatCard(id1,id2,id3){
	if(id3==0){
		return player.data.cardmax[id1].gte(1) ? format(player.data.card[id1],0)+"/"+format(player.data.cardmax[id1],0)+"&nbsp"+id2+"<br>":""
	}else{
		return player.data.card[id1].gte(1) ? format(player.data.card[id1],0)+"&nbsp"+id2+"<br>":""
	}
}

function tabFormatDeadCard(id1,id2){
	return player.data.carddead[id1].gte(1) ? format(player.data.carddead[id1],0)+"&nbsp"+id2+"<br>":""
}

function tabFormatMaxCard(id1,id2){
	return player.data.cardmax[id1].gte(1) ? format(player.data.cardmax[id1],0)+"&nbsp"+id2+"<br>":""
}

function getcard(id1,id2){
	let cao = id2
	for(row=1;row<=20;row++){
		if(player.data['display'+row].eq(19)){
			cao -= 1
		}
	}
	for(col=1;col<=cao;col++){
		if(player.data.holdcard.lt(player.data.maxcard)){
			if(player.data[id1+col].eq(0)){
				var card = Math.floor(Math.random() * player.data.allcard)+1
				var cards = player.data.card
				var nothing = true
				if(player.data.card[card].lt(1)){
					col--
				}
				for(col2=1;col2<=player.data.allcard;col2++){	
					if(player.data.card[col2].gte(1) && col2==card){
						player.data[id1+col] = new Decimal(col2)
						player.data.card[col2] = player.data.card[col2].sub(1)
						player.data.holdcard = player.data.holdcard.add(1)
					}
				}
				for(i in cards){if(cards[i].gt(0)){nothing = false}}
				if(nothing){
					for(col3=1;col3<=player.data.allcard;col3++){
						player.data.cardintermediary[col3] = new Decimal(player.data.carddead[col3])
						player.data.backdeckCD = true
					}
				}
			}else{
				cao++
			}
			if(player.data.backdeckCD){
				for(col4=1;col4<=player.data.allcard;col4++){
					player.data.card[col4] = player.data.card[col].add(player.data.cardintermediary[col4])
					player.data.cardintermediary[col4] = new Decimal(0)
					player.data.carddead[col4] = new Decimal(0)
				}
				player.data.backdeckCD = false
			}
		}
	}
	player.data.start = false
}

function recardonc(id){
	for(col=0;col<=player.data.allcard;col++){
		if(player.data['cardget'+id].eq(col)){
			player.data.cardmax[col] = player.data.cardmax[col].add(1)
			player.data['cardget'+id] = new Decimal(0)
		}
	}
}

function card_usage(id,id0,id1,id2){
	if(player.data['display'+id+'copy']==false){
		if(id1){player.data.carddead[id0] = player.data.carddead[id0].add(1)}
	}
	if(id2){player.data.holdcard = player.data.holdcard.sub(1)}
	player.data['display'+id+'copy'] = false
}

function geteffect(id,id2){
	if(id=="de"){
		player.data.de = player.data.de.add(id2)
	}else{
		player.data.effect[id] = player.data.effect[id].add(id2)
	}
}

function getdeeffect(id,id2){
	if(id=="de"){
		player.data.dede = player.data.dede.add(id2)
	}else{
		player.data.deeffect[id] = player.data.deeffect[id].add(id2)
	}
}

function softReset(){
	if (!!confirm("你确定要软重置吗?那样你本局游戏就会重置.且无法获得分数.成就,总分将保留")){
		layerDataReset('data')
		layerDataReset('mil')
		layerDataReset('map')
		showTab('none')
	}
}

function rehardReset(){
	if (!!confirm("你确定要硬重置吗?这样你将失去一切!!!或许你可以尝试软重置.成就,总分也会重置!!!")){
		if (!!confirm("这个存档将永远失去!(很长时间!)")){
			layerDataReset('data')
			layerDataReset('mil')
			layerDataReset('map')
			layerDataReset('point')
			layerDataReset('a')
			showTab('none')
		}
	}
}


function backnone(){
	if(player.data.newmap == true){
		showTab("map")
	}else if(player.data.dedead == true){
		showTab("over")
	}else{
		showTab("none")
	}
}