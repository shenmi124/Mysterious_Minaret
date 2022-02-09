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
	let newdehp = Math.floor((Math.random() * ((player.data.level+1)*10))+100)^(((player.data.level+1)/20)+1)
	let newdemp = Math.floor((Math.random() * ((player.data.level+1)*5)+5))^(((player.data.level+1)/18)+1)
	let newdeatk = Math.floor((Math.random() * ((player.data.level+1)*3)+12))^(((player.data.level+1)/23)+1)
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
	for(col=1;col<=player.data.allcard;col++){
		player.data.card[col] = new Decimal(player.data.cardmax[col])
		player.data.carddead[col] = new Decimal(0)
	}
	player.data.de = new Decimal(0)
}

function getcard(id1){
	player.data.ps = new Decimal(player.data.psmax)
	let cao = 3
	for(col=1;col<=cao;col++){
			if(player.data[id1+col].eq(0)){
				let card = Math.floor(Math.random() * (player.data.allcard+1))
					switch(card){
						case 0:
						if(player.data.card[1].gte(1)){
							player.data[id1+col] = new Decimal(1)
							player.data.card[1] = player.data.card[1].sub(1)
						}else{
							col--
						}
						break
						case 1:
						if(player.data.card[2].gte(1)){
							player.data[id1+col] = new Decimal(2)
							player.data.card[2] = player.data.card[2].sub(1)
						}else{
							col--
						}
						break
						case 2:
						if(player.data.card[3].gte(1)){
							player.data[id1+col] = new Decimal(3)
							player.data.card[3] = player.data.card[3].sub(1)
						}else{
							col--
						}
						break
						case 3:
						if(player.data.card[4].gte(1)){
							player.data[id1+col] = new Decimal(4)
							player.data.card[4] = player.data.card[4].sub(1)
						}else{
							col--
						}
						break
						case 4:
						if(player.data.card[5].gte(1)){
							player.data[id1+col] = new Decimal(5)
							player.data.card[5] = player.data.card[5].sub(1)
						}else{
							col--
						}
						break
						case 5:
						if(player.data.card[6].gte(1)){
							player.data[id1+col] = new Decimal(6)
							player.data.card[6] = player.data.card[6].sub(1)
						}else{
							col--
						}
						break
						case 6:
						if(player.data.card[7].gte(1)){
							player.data[id1+col] = new Decimal(7)
							player.data.card[7] = player.data.card[7].sub(1)
						}else{
							col--
						}
						break
						case 7:
						if(player.data.card[8].gte(1)){
							player.data[id1+col] = new Decimal(8)
							player.data.card[8] = player.data.card[8].sub(1)
						}else{
							col--
						}
						break
						default:
						var cards = player.data.card
						var nothing = true
						for(i in cards){if(cards[i].gt(0)){nothing = false}}
						if(nothing){
							for(col2=1;col2<=player.data.allcard;col2++){
								player.data.cardintermediary[col2] = new Decimal(player.data.carddead[col2])
							}
						}else{
							col--
						}
					}
			}else{
				cao++
			}
	}
	player.data.start = false
}

/*
function getcard(id1){
	player.data.ps = new Decimal(player.data.psmax)
	let cao = 3
	for(col=1;col<=cao;col++){
		if(player.data[id1+col].eq(0)){
			let card = Math.floor(Math.random() * (player.data.allcard+1))
				for(col2=1;col2<=player.data.allcard;col2++){
					if(player.data.card[col2].gte(1) && card<=player.data.allcard){
						player.data.[id1+col] = new Decimal(col2)
						player.data.card[col2] = player.data.card[col2].sub(1)
					}
				}
						default:
						var cards = player.data.card
						var nothing = true
						for(i in cards){if(cards[i].gt(0)){nothing = false}}
						if(nothing){
							for(col2=1;col2<=player.data.allcard;col2++){
								player.data.cardintermediary[col2] = new Decimal(player.data.carddead[col2])
							}
						}else{
							col--
						}
				}
		}else{
			cao++
		}
	}
	player.data.start = false
}
*/

function recard(){
	getcard("display")
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
	player.data.hp = player.data.hp.add(player.data.effect[2])
	player.data.de = player.data.de.div(2).floor()
	player.data.dede = player.data.dede.div(2).floor()
	if(player.data.effect[0].gt(0)){player.data.effect[0] = player.data.effect[0].sub(1)}
	if(player.data.effect[1].gt(0)){player.data.effect[1] = player.data.effect[1].sub(1)}
	if(player.data.effect[2].gt(0)){player.data.effect[2] = player.data.effect[2].sub(1)}
}

function atktode(id){
	if(id > 0){
		player.data.atkto = new Decimal(id).add(player.data.effect[1])
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
	player.data.mtkto = new Decimal(id)
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

function getmp(id){
	if(id > 0){
		let most_total_mp = id + player.data.effect[0]
		player.data.mp = player.data.mp.add(most_total_mp)
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
}

function redis(id1,id2){
	if(player.data[id1+id2].eq(1)){return "对敌方造成 12 物理伤害<br>消耗:1 体力"}
	if(player.data[id1+id2].eq(2)){return "增加 15 护甲<br>消耗:1 体力"}
	if(player.data[id1+id2].eq(3)){return "恢复 12 血,获得 3 恢复<br>消耗:2 体力"}
	if(player.data[id1+id2].eq(4)){return "对敌方造成 15 魔法伤害<br>消耗:5 魔力"}
	if(player.data[id1+id2].eq(5)){return "先获得 2 智慧,再增加 1 体力, 2 魔力<br>消耗:1 体力"}
	if(player.data[id1+id2].eq(6)){return "恢复 7 魔力<br>消耗:无"}
	if(player.data[id1+id2].eq(7)){return "对敌方造成 8 物理伤害2次<br>消耗:2 体力"}
	if(player.data[id1+id2].eq(8)){return "获得 3 力量<br>消耗:1 体力"}
}

function recan(id){
	if(player.data['display'+id].eq(1)){return player.data.ps.gte(1)}
	if(player.data['display'+id].eq(2)){return player.data.ps.gte(1)}
	if(player.data['display'+id].eq(3)){return player.data.ps.gte(2)}
	if(player.data['display'+id].eq(4)){return player.data.mp.gte(5)}
	if(player.data['display'+id].eq(5)){return player.data.ps.gte(1)}
	if(player.data['display'+id].eq(6)){return true}
	if(player.data['display'+id].eq(7)){return player.data.ps.gte(2)}
	if(player.data['display'+id].eq(8)){return player.data.ps.gte(1)}
}

function attributes(id1,id2,id3,id4,id5,id6){
	player.data.hp = player.data.hp.add(id1)
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
		attributes(0,0,-2,8,0,0)
		attributes(0,0,0,8,0,0)
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
		dehpbar:{
			display() {return "敌方血量 "+format(player.data.dehp,0)+" / "+format(player.data.dehpmax,0)},	
			direction: RIGHT,
			width: 500,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.dehp.div(player.data.dehpmax)).toNumber()},
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
		dempbar:{
			display() {return "敌方魔力 "+format(player.data.demp,0)+" / "+format(player.data.dempmax,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return (player.data.demp.div(player.data.dempmax)).toNumber()},
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
		deatkbar:{
			display() {return "敌方攻击 "+format(player.data.deatk,0)},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return true},
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
		dedebar:{
			display() {return "敌方防御 "+format(player.data.dede,0)},	
			direction: RIGHT,
			width: 500,
			height: 25,
			unlocked(){return player.data.dede.gte(1)},
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
		1001:{
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "250px",'width': '750px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00" }},
		},
		1021:{
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "25px","min-height": "25px",'width': '750px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00"}},
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
			onClick(){return getcard("display")},
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
			let card0 = "牌库:<br>"
			let card1 = player.data.cardmax[1].gte(1) ? format(player.data.card[1],0)+"/"+format(player.data.cardmax[1],0)+" 攻击<br>":""
			let card2 = player.data.cardmax[2].gte(1) ? format(player.data.card[2],0)+"/"+format(player.data.cardmax[2],0)+" 防御<br>":""
			let card3 = player.data.cardmax[3].gte(1) ? format(player.data.card[3],0)+"/"+format(player.data.cardmax[3],0)+" 治疗<br>":""
			let card4 = player.data.cardmax[4].gte(1) ? format(player.data.card[4],0)+"/"+format(player.data.cardmax[4],0)+" 魔法飞弹<br>":""
			let card5 = player.data.cardmax[5].gte(1) ? format(player.data.card[5],0)+"/"+format(player.data.cardmax[5],0)+" 冥想<br>":""
			let card6 = player.data.cardmax[6].gte(1) ? format(player.data.card[6],0)+"/"+format(player.data.cardmax[6],0)+" 魔力源泉<br>":""
			let card7 = player.data.cardmax[7].gte(1) ? format(player.data.card[7],0)+"/"+format(player.data.cardmax[7],0)+" 连斩<br>":""
			let card8 = player.data.cardmax[8].gte(1) ? format(player.data.card[8],0)+"/"+format(player.data.cardmax[8],0)+" 愤怒<br>":""
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8
			}],
			["column",[
				["display-text", function() {return '你在关卡'+format(player.data.level,0)+",怪物会随着关卡提升越来越强."}],
				["bar", "dehpbar"],
				["row", [["bar", "dempbar"],["bar", "deatkbar"]]],
				["bar", "dedebar"],
				["row", [["clickable", 1001]]],
				["row", [
					["column",[
						["bar", "hpbar"],
							["row", [
								["bar", "mpbar"],["bar", "psbar"]
							]],
					]],
				["bar", "moneybar"]
				]],
				["row", [["bar", "debar"],["bar", "eff0bar"],["bar", "eff1bar"],["bar", "eff2bar"]]],
				["row", [["clickable", 1021]]],
				["row", [["clickable", 1],["clickable", 2],["clickable", 3],["clickable", 4],["clickable", 5],["clickable", 6],["clickable", 7],["clickable", 8],["clickable", 9],["clickable", 10],["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20]]],
				["row", [["clickable", 1002],["clickable", 1003],["clickable", 1004],["clickable", 1005]]],
				["row", [["clickable", 1011],["clickable", 1012],["clickable", 1013]]],
				["clickable", 1006]
			]],
			["display-text", function() {
			let card0 = "墓地:<br>"
			let card1 = player.data.carddead[1].gte(1) || player.data.cardintermediary[1].gte(1) ? format(player.data.carddead[1],0)+" 攻击<br>":""
			let card2 = player.data.carddead[2].gte(1) || player.data.cardintermediary[2].gte(1) ? format(player.data.carddead[2],0)+" 防御<br>":""
			let card3 = player.data.carddead[3].gte(1) || player.data.cardintermediary[3].gte(1) ? format(player.data.carddead[3],0)+" 治疗<br>":""
			let card4 = player.data.carddead[4].gte(1) || player.data.cardintermediary[4].gte(1) ? format(player.data.carddead[4],0)+" 魔法飞弹<br>":""
			let card5 = player.data.carddead[5].gte(1) || player.data.cardintermediary[5].gte(1) ? format(player.data.carddead[5],0)+" 冥想<br>":""
			let card6 = player.data.carddead[6].gte(1) || player.data.cardintermediary[6].gte(1) ? format(player.data.carddead[6],0)+" 魔力源泉<br>":""
			let card7 = player.data.carddead[7].gte(1) || player.data.cardintermediary[7].gte(1) ? format(player.data.carddead[7],0)+" 连斩<br>":""
			let card8 = player.data.carddead[8].gte(1) || player.data.cardintermediary[8].gte(1) ? format(player.data.carddead[8],0)+" 愤怒<br>":""
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8
			}],
		]],
	]
})