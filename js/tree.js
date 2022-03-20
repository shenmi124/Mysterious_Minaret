function awardmoney(){
	let money = Math.floor(Math.random() * 50)+20
	player.data.money = player.data.money.add(money)
	player.data.moneyaward = false
}

function awardcard(id1,id2){
	for(col=1;col<=id2;col++){
		let card = Math.floor(Math.random() * player.data.allcard)
		for(col2=0;col2<=player.data.allcard-1;col2++){
			if(card==col2){
				player.data[id1+col] = new Decimal(col2+1)
			}
		}
	}
	player.data.cardaward = false
}

function levelnew(){
	let newdehp = Math.floor((Math.random() * ((player.data.level+1)*8))+30)^(((player.data.level+1)/50)+1)
	let newdemp = Math.floor((Math.random() * ((player.data.level+1)*2)+2))^(((player.data.level+1)/25)+1)
	let newdeatk = Math.floor((Math.random() * ((player.data.level+1)*2)+6))^(((player.data.level+1)/75)+1)
	let monsterup = Math.floor((Math.random() * 5))
	if(monsterup==0){
		player.data.monster = new Decimal(Math.floor((Math.random() * 1)) + 1)
	}else{
		player.data.monster = new Decimal(0)
	}
	player.data.level = player.data.level.add(1)
	player.data.dehp = new Decimal(newdehp)
	player.data.dehpmax = new Decimal(newdehp)
	player.data.demp = new Decimal(newdemp)
	player.data.dempmax = new Decimal(newdemp)
	player.data.deatk = new Decimal(newdeatk)
	player.data.newlevel = false
	player.data.dedead = false
	player.data.start = true
	player.data.moneyaward = false
	player.data.cardaward = false
	for(col=1;col<=player.data.allcard;col++){
		player.data['cardget'+col] = new Decimal(0)
	}
	for(col=1;col<=player.data.allcard;col++){
		player.data['display'+col] = new Decimal(0)
	}
	for(col=0;col<=player.data.alleffect;col++){
		player.data.effect[col] = new Decimal(0)
	}
	for(col=0;col<=player.data.alleffect;col++){
		player.data.deeffect[col] = new Decimal(0)
	}
	for(col=1;col<=player.data.allcard;col++){
		player.data.card[col] = new Decimal(player.data.cardmax[col])
		player.data.carddead[col] = new Decimal(0)
	}
	player.data.de = new Decimal(0)
}

function typemoster(){
	if(player.data.monster.eq(1) && player.data.demp.gte(4)){
		player.data.effect[4] = player.data.effect[4].add(1)
		player.data.demp = player.data.demp.sub(4)
		player.data.demp = player.data.demp.add(1)
	}
}

function getcard(id1,id2){
	player.data.ps = new Decimal(player.data.psmax)
	player.data.wan = false
	player.data.dewan = false
	let cao = id2
	for(col=1;col<=cao;col++){
		if(player.data.holdcard.lte(player.data.maxcard.sub(1))){
			if(player.data[id1+col].eq(0)){
				let card = Math.floor(Math.random() * player.data.allcard)+1
				var cards = player.data.card
				var nothing = true
				for(i in cards){if(cards[i].gt(0)){nothing = false}}
				if(nothing){
					for(col3=1;col3<=player.data.allcard;col3++){
						player.data.cardintermediary[col3] = new Decimal(player.data.carddead[col3])
					}
				}else if(player.data.card[card].lt(1)){
					col--
				}
				for(col2=1;col2<=player.data.allcard;col2++){
					if(player.data.card[col2].gte(1) && col2==card){
						player.data[id1+col] = new Decimal(col2)
						player.data.card[col2] = player.data.card[col2].sub(1)
						player.data.holdcard = player.data.holdcard.add(1)
					}
				}
			}else{
				cao++
			}
		}
	}
	player.data.start = false
}

function enemy_action(){
	typemoster()
	player.data.deatkto = new Decimal(player.data.deatk)
	if(player.data.de.gte(player.data.deatk)){
		player.data.de = player.data.de.sub(player.data.deatk)
		player.data.deatkto = new Decimal(0)
	}else if(player.data.de.gt(0)){
		player.data.deatkto = player.data.deatkto.sub(player.data.de)
		player.data.de = new Decimal(0)
	}else{
	}
	player.data.hp = player.data.hp.sub(player.data.deatkto)
	player.data.dehp = player.data.dehp.sub(player.data.deeffect[3])
	player.data.dede = player.data.dede.div(2).floor()
}

function our_action(){
	getcard("display",3)
	var cards = player.data.card
	var nothing = true
	for(col=1;col<=20;col++){
		let cards2 = player.data['display'+col]
		if(cards2!=0){
			nothing = false
		}
	}
	for(i in cards){
		if(cards[i].gt(0)){nothing = false}
	}
	if(nothing){
		for(col=1;col<=player.data.allcard;col++){
			player.data.card[col] = player.data.card[col].add(player.data.cardintermediary[col])
			player.data.cardintermediary[col] = new Decimal(0)
			player.data.carddead[col] = new Decimal(0)
		}
	}
	player.data.hp = player.data.hp.sub(player.data.effect[3])
	player.data.hp = player.data.hp.add(player.data.effect[2])
	player.data.de = player.data.de.div(2).floor()
}

function recard(){
	if(player.data.effect[5].lte(0)){
		our_action()
	}
	if(player.data.deeffect[5].lte(0)){
		enemy_action()
	}
	//id0:智慧
	if(player.data.effect[0].gt(0)){
		player.data.effect[0] = player.data.effect[0].sub(1)
	}
	//id1:愤怒
	if(player.data.effect[1].gt(0)){
		player.data.effect[1] = player.data.effect[1].sub(1)
	}
	//id2:恢复
	if(player.data.effect[2].gt(0)){
		player.data.effect[2] = player.data.effect[2].sub(1)
	}
	//id3:中毒
	if(player.data.effect[3].gt(0) && player.data.effect[2].gt(0)){
		player.data.effect[3] = player.data.effect[3].sub(2)
	}else if(player.data.effect[3].gt(0)){
		player.data.effect[3] = player.data.effect[3].sub(1)
	}
	
	if(player.data.deeffect[3].gt(0) && player.data.deeffect[2].gt(0)){
		player.data.deeffect[3] = player.data.deeffect[3].sub(2)
	}else if(player.data.deeffect[3].gt(0)){
		player.data.deeffect[3] = player.data.deeffect[3].sub(1)
	}
	//id4:感染
	if(player.data.effect[4].gt(0)){
		player.data.effect[3] = player.data.effect[3].add(player.data.effect[4])
	}
	
	if(player.data.deeffect[4].gt(0)){
		player.data.deeffect[3] = player.data.deeffect[3].add(player.data.deeffect[4])
	}
	//id5:眩晕
	if(player.data.effect[5].gt(0)){
		player.data.effect[5] = player.data.effect[5].sub(1)
	}
	
	if(player.data.deeffect[5].gt(0)){
		player.data.deeffect[5] = player.data.deeffect[5].sub(1)
	}
	//id6:魔力枯竭
	if(player.data.effect[6].gt(0)){
		player.data.effect[6] = player.data.effect[6].sub(1)
	}
	
	if(player.data.deeffect[6].gt(0)){
		player.data.deeffect[6] = player.data.deeffect[6].sub(1)
	}
	//id7:卍
	if(player.data.effect[7].gt(0) && player.data.wan == false){
		player.data.effect[8] = player.data.effect[7].add(player.data.effect[8])
		player.data.effect[7] = new Decimal(0)
		player.data.wan = true
	}
	
	if(player.data.deeffect[7].gt(0) && player.data.dewan == false){
		player.data.deeffect[8] = player.data.deeffect[7].add(player.data.deeffect[8])
		player.data.deeffect[7] = new Decimal(0)
		player.data.dewan = true
	}
	//id8:卐
	if(player.data.effect[8].gt(0) && player.data.wan == false){
		player.data.effect[7] = player.data.effect[8].add(player.data.effect[7])
		player.data.effect[8] = new Decimal(0)
		player.data.wan = true
	}
	
	if(player.data.deeffect[8].gt(0) && player.data.dewan == false){
		player.data.deeffect[7] = player.data.deeffect[8].add(player.data.deeffect[7])
		player.data.deeffect[8] = new Decimal(0)
		player.data.dewan = true
	}
}

function atktode(id){
	if(id > 0){
		player.data.atkto = new Decimal(id).add(player.data.effect[1])
		if(player.data.deeffect[9].gte(1) && player.data.deeffect[8].gte(1)){
			player.data.atkto = player.data.atkto.add(3)
			player.data.deeffect[9] = player.data.deeffect[9].sub(1)
		}
		if(player.data.deeffect[7].gte(1)){
			player.data.deeffect[9] = player.data.deeffect[9].add(player.data.deeffect[7])
		}
	}else{
		player.data.atkto = new Decimal(id)
	}
	if(player.data.dede.gte(player.data.atkto)){
		player.data.dede = player.data.dede.sub(player.data.atkto)
		player.data.atkto = new Decimal(0)
	}else if(player.data.dede.gt(0)){
		player.data.atkto = player.data.atkto.sub(player.data.dede)
		player.data.dede = new Decimal(0)
	}else{
	}
	player.data.dehp = player.data.dehp.sub(player.data.atkto)
}

function mtktode(id){
	if(id > 0){
		player.data.mtkto = new Decimal(id)
		if(player.data.deeffect[9].gte(1) && player.data.deeffect[8].gte(1)){
			player.data.mtkto = player.data.mtkto.add(3)
			player.data.deeffect[9] = player.data.deeffect[9].sub(1)
		}
		if(player.data.deeffect[7].gte(1)){
			player.data.deeffect[9] = player.data.deeffect[9].add(player.data.deeffect[7])
		}
	}else{
		player.data.mtkto = new Decimal(id)
	}
	if(player.data.dede.gte(player.data.mtkto)){
		player.data.dede = player.data.dede.sub(player.data.matkto)
		player.data.mtkto = new Decimal(0)
	}else if(player.data.dede.gt(0)){
		player.data.mtkto = player.data.mtkto.sub(player.data.dede)
		player.data.dede = new Decimal(0)
	}else{
	}
	player.data.dehp = player.data.dehp.sub(player.data.mtkto)
}

function gethp(id){
	if(id > 0){
		player.data.hp = player.data.hp.add(id)
	}else{
		player.data.hp = player.data.hp.add(id)
	}
}

function getmp(id){
	if(id > 0){
		if(player.data.effect[6].lte(0)){
			player.data.mp = player.data.mp.add(id).add(player.data.effect[0])
		}
	}else{
		player.data.mp = player.data.mp.add(id)
	}
}

function retit(id1,id2){
	if(player.data[id1+id2].eq(1)){return "攻击"}
	if(player.data[id1+id2].eq(2)){return "防御"}
	if(player.data[id1+id2].eq(3)){return "治疗"}
	if(player.data[id1+id2].eq(4)){return "魔力飞弹"}
	if(player.data[id1+id2].eq(5)){return "冥想"}
	if(player.data[id1+id2].eq(6)){return "魔力源泉"}
	if(player.data[id1+id2].eq(7)){return "连斩"}
	if(player.data[id1+id2].eq(8)){return "愤怒"}
	if(player.data[id1+id2].eq(9)){return "传染"}
	if(player.data[id1+id2].eq(10)){return "病原体"}
	if(player.data[id1+id2].eq(11)){return "思考"}
	if(player.data[id1+id2].eq(12)){return "重击"}
	if(player.data[id1+id2].eq(13)){return "回旋镖"}
	if(player.data[id1+id2].eq(14)){return "无中生有"}
	if(player.data[id1+id2].eq(15)){return "烨"}
	if(player.data[id1+id2].eq(16)){return "灵能冲击"}
	if(player.data[id1+id2].eq(17)){return "破魂打击"}
	if(player.data[id1+id2].eq(18)){return "魔能调换"}
}

function redis(id1,id2){
	if(player.data[id1+id2].eq(1)){return `对敌方造成 <red id="red">12 物理伤害</red><br>消耗:1 体力`}
	if(player.data[id1+id2].eq(2)){return `增加 15 护甲<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(3)){return `恢复 12 血,获得 3 恢复<br>消耗:2 体力`}
	if(player.data[id1+id2].eq(4)){return `对敌方造成 <blue id="blue">15 魔法伤害</blue><br>消耗:5 魔力`}
	if(player.data[id1+id2].eq(5)){return `先获得 2 智慧,再增加 1 体力, 2 魔力<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(6)){return `恢复 7 魔力<br>消耗:无`}
	if(player.data[id1+id2].eq(7)){return `对敌方造成 <red id="red">7 物理伤害</red>3次<br>消耗:2 体力`}
	if(player.data[id1+id2].eq(8)){return `获得 3 力量<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(9)){return `给敌方 6 中毒<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(10)){return `给敌方 3 感染,我方 2 感染<br>消耗:2 体力`}
	if(player.data[id1+id2].eq(11)){return `抽一张牌,恢复 1 体力,如果有智慧效果则再触发一次<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(12)){return `对敌方造成 <red id="red">18 物理伤害</red>并附带 1 眩晕<br>消耗:3 体力`}
	if(player.data[id1+id2].eq(13)){return `对敌方造成 <red id="red">8 物理伤害</red>并获得 1 回旋镖<br>消耗:1 体力`}
	if(player.data[id1+id2].eq(14)){return `恢复 1 体力,1 魔力和 1 血,造成 1 <red id="red">物理伤害</red>和 <blue id="blue">1 魔法伤害</blue>,给敌方恢复 2 血,自己减少 1 血<br>消耗:1 体力,1 魔力`}
	if(player.data[id1+id2].eq(15)){return `造成 <blue id="blue">x 魔法伤害</blue>,获得 5 魔力枯竭.给敌方 1 卍<br>消耗:x 魔力`}
	if(player.data[id1+id2].eq(16)){return `造成 <blue id="blue">15 魔法伤害</blue>,敌方获得 2 魔力枯竭<br>消耗:17 魔力`}
	if(player.data[id1+id2].eq(17)){return `造成 <blue id="blue">x+5 魔法伤害</blue>,获得 2 魔力枯竭<br>消耗:x 魔力`}
	if(player.data[id1+id2].eq(18)){return `恢复 1 体力<br>消耗:10 魔力`}
}

function recan(id){
	if(player.data.effect[5].lte(0)){
		if(player.data['display'+id].eq(1)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(2)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(3)){return player.data.ps.gte(2)}
		if(player.data['display'+id].eq(4)){return player.data.mp.gte(5)}
		if(player.data['display'+id].eq(5)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(6)){return true}
		if(player.data['display'+id].eq(7)){return player.data.ps.gte(2)}
		if(player.data['display'+id].eq(8)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(9)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(10)){return player.data.ps.gte(2)}
		if(player.data['display'+id].eq(11)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(12)){return player.data.ps.gte(3)}
		if(player.data['display'+id].eq(13)){return player.data.ps.gte(1)}
		if(player.data['display'+id].eq(14)){return player.data.ps.gte(1)&&player.data.mp.gte(1)}
		if(player.data['display'+id].eq(15)){return player.data.mp.gte(1)}
		if(player.data['display'+id].eq(16)){return player.data.mp.gte(17)}
		if(player.data['display'+id].eq(17)){return player.data.mp.gte(1)}
		if(player.data['display'+id].eq(18)){return player.data.mp.gte(10)}
	}else{
		return false 
	}
}

function attributes(id1,id2,id3,id4,id5,id6){
	gethp(id1)
	getmp(id2)
	player.data.ps = player.data.ps.add(id3)
	atktode(id4)
	mtktode(id5)
	player.data.de = player.data.de.add(id6)
}

function reonc(id){
	if(player.data['display'+id].eq(1)){
		//攻击
		attributes(0,0,-1,12,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[1] = player.data.carddead[1].add(1)
		return
	}
	if(player.data['display'+id].eq(2)){
		//防御
		attributes(0,0,-1,0,0,15)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[2] = player.data.carddead[2].add(1)
		return
	}
	if(player.data['display'+id].eq(3)){
		//治疗
		attributes(12,0,-2,0,0,0)
		player.data.effect[2] = player.data.effect[2].add(3)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[3] = player.data.carddead[3].add(1)
		return
	}
	if(player.data['display'+id].eq(4)){
		//魔力飞弹
		attributes(0,-5,0,0,15,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[4] = player.data.carddead[4].add(1)
		return
	}
	if(player.data['display'+id].eq(5)){
		//冥想
		player.data.effect[0] = player.data.effect[0].add(2)
		attributes(0,2,-1,0,0,0)
		player.data.ps = player.data.ps.add(1)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[5] = player.data.carddead[5].add(1)
		return
	}
	if(player.data['display'+id].eq(6)){
		//魔力源泉
		attributes(0,7,0,0,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[6] = player.data.carddead[6].add(1)
		return
	}
	if(player.data['display'+id].eq(7)){
		//连斩
		attributes(0,0,-2,7,0,0)
		attributes(0,0,0,7,0,0)
		attributes(0,0,0,7,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[7] = player.data.carddead[7].add(1)
		return
	}
	if(player.data['display'+id].eq(8)){
		//愤怒
		player.data.effect[1] = player.data.effect[1].add(3)
		attributes(0,0,-1,0,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[8] = player.data.carddead[8].add(1)
		return
	}
	if(player.data['display'+id].eq(9)){
		//传染
		player.data.deeffect[3] = player.data.deeffect[3].add(6)
		attributes(0,0,-1,0,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[9] = player.data.carddead[9].add(1)
		return
	}
	if(player.data['display'+id].eq(10)){
		//病原体
		player.data.deeffect[4] = player.data.deeffect[4].add(3)
		player.data.effect[4] = player.data.effect[4].add(2)
		attributes(0,0,-2,0,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[10] = player.data.carddead[10].add(1)
		return
	}
	if(player.data['display'+id].eq(11)){
		//思考
		getcard("display",1)
		attributes(0,0,1,0,0,0)
		if(player.data.effect[0].gt(0)){
			getcard("display",1)
			attributes(0,0,1,0,0,0)
		}
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[11] = player.data.carddead[11].add(1)
		return
	}
	if(player.data['display'+id].eq(12)){
		//重击
		player.data.deeffect[5] = player.data.deeffect[5].add(1)
		attributes(0,0,-3,18,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[12] = player.data.carddead[12].add(1)
		return
	}
	if(player.data['display'+id].eq(13)){
		//回旋镖
		attributes(0,0,-1,8,0,0)
		player.data['display'+id] = new Decimal(13)
		player.data.carddead[13] = player.data.carddead[13].add(1)
		return
	}
	if(player.data['display'+id].eq(14)){
		//无中生有
		attributes(-1,-1,-1,0,0,0)
		attributes(1,1,1,1,1,0)
		player.data.dehp = player.data.dehp.add(2)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[14] = player.data.carddead[14].add(1)
		return
	}
	if(player.data['display'+id].eq(15)){
		//烨
		player.data.deeffect[7] = player.data.deeffect[7].add(1)
		player.data.effect[6] = player.data.effect[6].add(5)
		let a = player.data.mp
		attributes(0,-a,0,0,a,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[15] = player.data.carddead[15].add(1)
		return
	}
	if(player.data['display'+id].eq(16)){
		//灵能冲击
		player.data.deeffect[6] = player.data.deeffect[6].add(2)
		attributes(0,-17,0,0,15,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[16] = player.data.carddead[16].add(1)
		return
	}
	if(player.data['display'+id].eq(17)){
		//破魂打击
		player.data.effect[6] = player.data.effect[6].add(2)
		let a = player.data.mp
		attributes(0,-a,0,0,a+5,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[17] = player.data.carddead[17].add(1)
		return
	}
	if(player.data['display'+id].eq(18)){
		//魔能调换
		attributes(0,-10,1,0,0,0)
		player.data['display'+id] = new Decimal(0)
		player.data.carddead[18] = player.data.carddead[18].add(1)
		return
	}
}

function recardonc(id){
	if(player.data['cardget'+id].eq(1)){
		player.data.cardmax[1] = player.data.cardmax[1].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(2)){
		player.data.cardmax[2] = player.data.cardmax[2].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(3)){
		player.data.cardmax[3] = player.data.cardmax[3].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(4)){
		player.data.cardmax[4] = player.data.cardmax[4].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(5)){
		player.data.cardmax[5] = player.data.cardmax[5].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(6)){
		player.data.cardmax[6] = player.data.cardmax[6].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(7)){
		player.data.cardmax[7] = player.data.cardmax[7].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(8)){
		player.data.cardmax[8] = player.data.cardmax[8].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(9)){
		player.data.cardmax[9] = player.data.cardmax[9].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(10)){
		player.data.cardmax[10] = player.data.cardmax[10].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(11)){
		player.data.cardmax[11] = player.data.cardmax[11].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(12)){
		player.data.cardmax[12] = player.data.cardmax[12].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(13)){
		player.data.cardmax[13] = player.data.cardmax[13].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(14)){
		player.data.cardmax[14] = player.data.cardmax[14].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(15)){
		player.data.cardmax[15] = player.data.cardmax[15].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(16)){
		player.data.cardmax[16] = player.data.cardmax[16].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(17)){
		player.data.cardmax[17] = player.data.cardmax[17].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
	if(player.data['cardget'+id].eq(18)){
		player.data.cardmax[18] = player.data.cardmax[18].add(1)
		player.data['cardget'+id] = new Decimal(0)
	}
}

var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}

addNode("blank", {
    layerShown: "ghost",
}, 
)

addLayer("tree-tab", {
    previousTab: "",
    leftTab: true,
	bars:{
		dehpbar:{
			display() {return "血量 "+format(player.data.dehp,0)+" / "+format(player.data.dehpmax,0)},	
			direction: RIGHT,
			width: 500,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.dehp.div(player.data.dehpmax)).toNumber()},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#ec1c24"},
			textStyle: {"color": "#000000"}
		},
		dempbar:{
			display() {return "魔力 "+format(player.data.demp,0)+" / "+format(player.data.dempmax,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.demp.div(player.data.dempmax)).toNumber()},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#00a8f3"},
			textStyle: {"color": "#000000"}
		},
		deatkbar:{
			display() {return "攻击 "+format(player.data.deatk,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return true},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#fff200"},
			textStyle: {"color": "#000000"}
		},
		dedebar:{
			display() {return "防御 "+format(player.data.dede,0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.dede.gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#c3c3c3"},
			fillStyle: {"background-color": "#c3c3c3"},
			textStyle: {"color": "#000000"}
		},
		deeff3bar:{
			display() {return "中毒 "+format(player.data.deeffect[3],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[3].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#0ab23f"},
			fillStyle: {"background-color": "#0ab23f"},
			textStyle: {"color": "#000000"}
		},
		deeff4bar:{
			display() {return "感染 "+format(player.data.deeffect[4],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[4].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#2ee5b1"},
			fillStyle: {"background-color": "#2ee5b1"},
			textStyle: {"color": "#000000"}
		},
		deeff5bar:{
			display() {return "眩晕 "+format(player.data.deeffect[5],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[5].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#fff3dd"},
			fillStyle: {"background-color": "#fff3dd"},
			textStyle: {"color": "#000000"}
		},
		deeff6bar:{
			display() {return "魔力枯竭 "+format(player.data.deeffect[6],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[6].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ccfffd"},
			fillStyle: {"background-color": "#ccfffd"},
			textStyle: {"color": "#000000"}
		},
		deeff7bar:{
			display() {return "卍 "+format(player.data.deeffect[7],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[7].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec1b1b"},
			fillStyle: {"background-color": "#ec1b1b"},
			textStyle: {"color": "#000000"}
		},
		deeff8bar:{
			display() {return "卐 "+format(player.data.deeffect[8],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[8].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec6e1b"},
			fillStyle: {"background-color": "#ec6e1b"},
			textStyle: {"color": "#000000"}
		},
		deeff9bar:{
			display() {return "焕 "+format(player.data.deeffect[9],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[9].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec531b"},
			fillStyle: {"background-color": "#ec531b"},
			textStyle: {"color": "#000000"}
		},
		//↑敌方 ↓我方
		hpbar:{
			display() {return "血量 "+format(player.data.hp,0)+" / "+format(player.data.hpmax,0)},	
			direction: RIGHT,
			width: 500,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.hp.div(player.data.hpmax)).toNumber()},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#ec1c24"},
			textStyle: {"color": "#000000"}
		},
		mpbar:{
			display() {return "魔力 "+format(player.data.mp,0)+" / "+format(player.data.mpmax,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.mp.div(player.data.mpmax)).toNumber()},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#00a8f3"},
			textStyle: {"color": "#000000"}
		},
		psbar:{
			display() {return "体力 "+format(player.data.ps,0)+" / "+format(player.data.psmax,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.ps.div(player.data.psmax)).toNumber()},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#fff200"},
			textStyle: {"color": "#000000"}
		},
		debar:{
			display() {return "防御 "+format(player.data.de,0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.de.gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#c3c3c3"},
			fillStyle: {"background-color": "#c3c3c3"},
			textStyle: {"color": "#000000"}
		},
		eff0bar:{
			display() {return "智慧 "+format(player.data.effect[0],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[0].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#54d4ff"},
			fillStyle: {"background-color": "#54d4ff"},
			textStyle: {"color": "#000000"}
		},
		eff1bar:{
			display() {return "力量 "+format(player.data.effect[1],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[1].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#d01118"},
			fillStyle: {"background-color": "#d01118"},
			textStyle: {"color": "#000000"}
		},
		eff2bar:{
			display() {return "恢复 "+format(player.data.effect[2],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[2].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#00ff48"},
			fillStyle: {"background-color": "#00ff48"},
			textStyle: {"color": "#000000"}
		},
		eff3bar:{
			display() {return "中毒 "+format(player.data.effect[3],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[3].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#0ab23f"},
			fillStyle: {"background-color": "#0ab23f"},
			textStyle: {"color": "#000000"}
		},
		eff4bar:{
			display() {return "感染 "+format(player.data.effect[4],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[4].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#2ee5b1"},
			fillStyle: {"background-color": "#2ee5b1"},
			textStyle: {"color": "#000000"}
		},
		eff5bar:{
			display() {return "眩晕 "+format(player.data.effect[5],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[5].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#fff3dd"},
			fillStyle: {"background-color": "#fff3dd"},
			textStyle: {"color": "#000000"}
		},
		eff6bar:{
			display() {return "魔力枯竭 "+format(player.data.effect[6],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[6].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ccfffd"},
			fillStyle: {"background-color": "#ccfffd"},
			textStyle: {"color": "#000000"}
		},
		eff7bar:{
			display() {return "卍 "+format(player.data.effect[7],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[7].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec1b1b"},
			fillStyle: {"background-color": "#ec1b1b"},
			textStyle: {"color": "#000000"}
		},
		eff8bar:{
			display() {return "卐 "+format(player.data.effect[8],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[8].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec6e1b"},
			fillStyle: {"background-color": "#ec6e1b"},
			textStyle: {"color": "#000000"}
		},
		eff9bar:{
			display() {return "焕 "+format(player.data.effect[9],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[9].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec531b"},
			fillStyle: {"background-color": "#ec531b"},
			textStyle: {"color": "#000000"}
		},
		moneybar:{
			display() {return format(player.data.money,0)+"$"},	
			direction: RIGHT,
			width: 76,
			height: 54,
			unlocked(){return true},
			progress(){return true},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#FFFFFF"},
			textStyle: {"color": "#000000"}
		},
	},
	clickables:{
		1021:{
			title:`<other id="other1">把鼠标对准我查看全属性`,
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "25px","min-height": "25px",'width': '225px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00"}},
			tooltip(){
				let effde = player.data.de.gt(0) ? format(player.data.de,0)+"防御<br>":""
				let eff0 = player.data.effect[0].gt(0) ? format(player.data.effect[0],0)+"智慧<br>":""
				let eff1 = player.data.effect[1].gt(0) ? format(player.data.effect[1],0)+"愤怒<br>":""
				let eff2 = player.data.effect[2].gt(0) ? format(player.data.effect[2],0)+"恢复<br>":""
				let eff3 = player.data.effect[3].gt(0) ? format(player.data.effect[3],0)+"中毒<br>":""
				let eff4 = player.data.effect[4].gt(0) ? format(player.data.effect[4],0)+"感染<br>":""
				let eff5 = player.data.effect[5].gt(0) ? format(player.data.effect[5],0)+"眩晕<br>":""
				let eff6 = player.data.effect[6].gt(0) ? format(player.data.effect[6],0)+"魔力枯竭<br>":""
				let eff7 = player.data.effect[7].gt(0) ? format(player.data.effect[7],0)+"卍<br>":""
				let eff8 = player.data.effect[8].gt(0) ? format(player.data.effect[8],0)+"卐<br>":""
				let eff9 = player.data.effect[9].gt(0) ? format(player.data.effect[9],0)+"焕<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9
			}
		},
		1022:{
			title:`<other id="other1">把鼠标对准我查看全属性`,
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "25px","min-height": "25px",'width': '225px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00"}},
			tooltip(){
				let effde = player.data.dede.gt(0) ? format(player.data.dede,0)+"防御<br>":""
				let eff0 = player.data.deeffect[0].gt(0) ? format(player.data.deeffect[0],0)+"智慧<br>":""
				let eff1 = player.data.deeffect[1].gt(0) ? format(player.data.deeffect[1],0)+"愤怒<br>":""
				let eff2 = player.data.deeffect[2].gt(0) ? format(player.data.deeffect[2],0)+"恢复<br>":""
				let eff3 = player.data.deeffect[3].gt(0) ? format(player.data.deeffect[3],0)+"中毒<br>":""
				let eff4 = player.data.deeffect[4].gt(0) ? format(player.data.deeffect[4],0)+"感染<br>":""
				let eff5 = player.data.deeffect[5].gt(0) ? format(player.data.deeffect[5],0)+"眩晕<br>":""
				let eff6 = player.data.deeffect[6].gt(0) ? format(player.data.deeffect[6],0)+"魔力枯竭<br>":""
				let eff7 = player.data.deeffect[7].gt(0) ? format(player.data.deeffect[7],0)+"卍<br>":""
				let eff8 = player.data.deeffect[8].gt(0) ? format(player.data.deeffect[8],0)+"卐<br>":""
				let eff9 = player.data.deeffect[9].gt(0) ? format(player.data.deeffect[9],0)+"焕<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9
			}
		},
		1023:{
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "220px",'width': '750px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00" }},
		},
		1002:{
			title: "下一回合!<br><h6>恢复体力直到上限<br>向下取整保留一半的防御",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return recard()},
		},
		1003:{
			title: "开始!",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == true},
			onClick(){return getcard("display",3)},
		},
		1004:{
			title: "钱!",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.moneyaward == true && player.data.start == false},
			onClick(){return awardmoney()},
		},
		1005:{
			title: "牌!",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.cardaward == true && player.data.start == false},
			onClick(){return awardcard("cardget",3)},
		},
		1006:{
			title: "下一关!<br><h6>到达下一关无法再获得本关的钱和牌",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.newlevel == true},
			onClick(){return levelnew()},
		},
		1011:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		1012:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		1013:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		1:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		2:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		3:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		4:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		5:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		6:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		7:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		8:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		9:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		10:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		11:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		12:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		13:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		14:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		15:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		16:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		17:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		18:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		19:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		20:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px'}},
		},
	},
	tabFormat: [
		["row",[
			["display-text", function() {
			let card0 = "牌库:("+format(player.data.holdcard,0)+"/"+format(player.data.maxcard,0)+")<br>"
			let card1 = player.data.cardmax[1].gte(1) ? format(player.data.card[1],0)+"/"+format(player.data.cardmax[1],0)+" 攻击<br>":""
			let card2 = player.data.cardmax[2].gte(1) ? format(player.data.card[2],0)+"/"+format(player.data.cardmax[2],0)+" 防御<br>":""
			let card3 = player.data.cardmax[3].gte(1) ? format(player.data.card[3],0)+"/"+format(player.data.cardmax[3],0)+" 治疗<br>":""
			let card4 = player.data.cardmax[4].gte(1) ? format(player.data.card[4],0)+"/"+format(player.data.cardmax[4],0)+" 魔法飞弹<br>":""
			let card5 = player.data.cardmax[5].gte(1) ? format(player.data.card[5],0)+"/"+format(player.data.cardmax[5],0)+" 冥想<br>":""
			let card6 = player.data.cardmax[6].gte(1) ? format(player.data.card[6],0)+"/"+format(player.data.cardmax[6],0)+" 魔力源泉<br>":""
			let card7 = player.data.cardmax[7].gte(1) ? format(player.data.card[7],0)+"/"+format(player.data.cardmax[7],0)+" 连斩<br>":""
			let card8 = player.data.cardmax[8].gte(1) ? format(player.data.card[8],0)+"/"+format(player.data.cardmax[8],0)+" 愤怒<br>":""
			let card9 = player.data.cardmax[9].gte(1) ? format(player.data.card[9],0)+"/"+format(player.data.cardmax[9],0)+" 传染<br>":""
			let card10 = player.data.cardmax[10].gte(1) ? format(player.data.card[10],0)+"/"+format(player.data.cardmax[10],0)+" 病原体<br>":""
			let card11 = player.data.cardmax[11].gte(1) ? format(player.data.card[11],0)+"/"+format(player.data.cardmax[11],0)+" 思考<br>":""
			let card12 = player.data.cardmax[12].gte(1) ? format(player.data.card[12],0)+"/"+format(player.data.cardmax[12],0)+" 重击<br>":""
			let card13 = player.data.cardmax[13].gte(1) ? format(player.data.card[13],0)+"/"+format(player.data.cardmax[13],0)+" 回旋镖<br>":""
			let card14 = player.data.cardmax[14].gte(1) ? format(player.data.card[14],0)+"/"+format(player.data.cardmax[14],0)+" 无中生有<br>":""
			let card15 = player.data.cardmax[15].gte(1) ? format(player.data.card[15],0)+"/"+format(player.data.cardmax[15],0)+" 烨<br>":""
			let card16 = player.data.cardmax[16].gte(1) ? format(player.data.card[16],0)+"/"+format(player.data.cardmax[16],0)+" 灵能冲击<br>":""
			let card17 = player.data.cardmax[17].gte(1) ? format(player.data.card[17],0)+"/"+format(player.data.cardmax[17],0)+" 破魂打击<br>":""
			let card18 = player.data.cardmax[18].gte(1) ? format(player.data.card[18],0)+"/"+format(player.data.cardmax[18],0)+" 魔能调换<br>":""
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18
			}],
			["column",[
				["display-text", function() {return '<h6>(tip:左上角设置可以更换材质)'}],
				["display-text", function() {return '你在关卡'+format(player.data.level,0)+",怪物会随着关卡提升越来越强."}],
				["bar", "dehpbar"],
				["row", [["bar", "dempbar"],["bar", "deatkbar"]]],
				["row", [["bar", "dedebar"],["bar", "deeff3bar"],["bar", "deeff4bar"],["bar", "deeff5bar"],["bar", "deeff6bar"],["bar", "deeff7bar"],["bar", "deeff8bar"],["bar", "deeff9bar"]]],
				["bar", "dedebar"],
				["display-text", function() {
					let monster0 = player.data.monster.eq(0) ? "":""
					let monster1 = player.data.monster.eq(1) ? "感染者:消耗4魔力,给敌方附加1感染,每回合回复1魔力":""
					return monster0 + monster1
				}],
				["row", [["clickable", 1022]]],
				["row", [["clickable", 1023]]],
				["row", [
					["column",[
						["bar", "hpbar"],
							["row", [
								["bar", "mpbar"],["bar", "psbar"]
							]],
					]],
				["bar", "moneybar"]
				]],
				["row", [["bar", "debar"],["bar", "eff0bar"],["bar", "eff1bar"],["bar", "eff2bar"],["bar", "eff3bar"],["bar", "eff4bar"],["bar", "eff5bar"],["bar", "eff6bar"],["bar", "eff7bar"],["bar", "eff8bar"],["bar", "eff9bar"]]],
				["row", [["clickable", 1021]]],
				["row", [["clickable", 1],["clickable", 2],["clickable", 3],["clickable", 4],["clickable", 5],["clickable", 6],["clickable", 7],["clickable", 8],["clickable", 9],["clickable", 10],["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20]]],
				["row", [["clickable", 1002],["clickable", 1003],["clickable", 1004],["clickable", 1005]]],
				["row", [["clickable", 1011],["clickable", 1012],["clickable", 1013]]],
				["clickable", 1006]
			]],
			["display-text", function() {
			let card0 = "墓地:<br>"
			let card1 = player.data.carddead[1].gte(1) ? format(player.data.carddead[1],0)+" 攻击<br>":""
			let card2 = player.data.carddead[2].gte(1) ? format(player.data.carddead[2],0)+" 防御<br>":""
			let card3 = player.data.carddead[3].gte(1) ? format(player.data.carddead[3],0)+" 治疗<br>":""
			let card4 = player.data.carddead[4].gte(1) ? format(player.data.carddead[4],0)+" 魔法飞弹<br>":""
			let card5 = player.data.carddead[5].gte(1) ? format(player.data.carddead[5],0)+" 冥想<br>":""
			let card6 = player.data.carddead[6].gte(1) ? format(player.data.carddead[6],0)+" 魔力源泉<br>":""
			let card7 = player.data.carddead[7].gte(1) ? format(player.data.carddead[7],0)+" 连斩<br>":""
			let card8 = player.data.carddead[8].gte(1) ? format(player.data.carddead[8],0)+" 愤怒<br>":""
			let card9 = player.data.carddead[9].gte(1) ? format(player.data.carddead[9],0)+" 传染<br>":""
			let card10 = player.data.carddead[10].gte(1) ? format(player.data.carddead[10],0)+" 病原体<br>":""
			let card11 = player.data.carddead[11].gte(1) ? format(player.data.carddead[11],0)+" 思考<br>":""
			let card12 = player.data.carddead[12].gte(1) ? format(player.data.carddead[12],0)+" 重击<br>":""
			let card13 = player.data.carddead[13].gte(1) ? format(player.data.carddead[13],0)+" 回旋镖<br>":""
			let card14 = player.data.carddead[14].gte(1) ? format(player.data.carddead[14],0)+" 无中生有<br>":""
			let card15 = player.data.carddead[15].gte(1) ? format(player.data.carddead[15],0)+" 烨<br>":""
			let card16 = player.data.carddead[16].gte(1) ? format(player.data.carddead[16],0)+" 灵能冲击<br>":""
			let card17 = player.data.carddead[17].gte(1) ? format(player.data.carddead[17],0)+" 破魂打击<br>":""
			let card18 = player.data.carddead[18].gte(1) ? format(player.data.carddead[18],0)+" 魔能调换<br>":""
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18
			}],
		]],
	]
})