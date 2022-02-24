function effectdisplay(id){
	if(id == 0){return "智慧:每一层使获得魔力时多获得1,每回合减少一层<br><br>"}
	if(id == 1){return "愤怒:每一层使物理伤害+1,每回合减少一层<br><br>"}
	if(id == 2){return "恢复:回合结束时恢复层级血量,每回合减少一层<br><br>"}
	if(id == 3){return "中毒:回合结束减少层级血量,无视护甲,每回合减少一层,如果有恢复格外减少一层<br><br>"}
	if(id == 4){return "感染:中毒每回合加一层<br><br>"+effectdisplay(3)}
	if(id == 5){return "眩晕:此回合无法攻击,抽排,每回合减少一层<br><br>"}
}

function monsterdisplay(id){
	if(id==0){return "感染者:每回合给敌方附加1感染<br><br>"+effectdisplay(4)}
	if(id==1){return "蛊梦师:每回合给敌方一张阻梦<br><br>"+card2display(0)}
}

function carddisplay(id){
	if(id==0){return "攻击:<br>对敌方造成 12 物理伤害<br>消耗:1 体力<br><br>"}
	if(id==1){return "防御:<br>增加 15 护甲<br>消耗:1 体力<br><br>"}
	if(id==2){return "治疗:<br>恢复 12 血,获得 3 恢复<br>消耗:2 体力<br><br>"+effectdisplay(2)}
	if(id==3){return "魔法飞弹:<br>对敌方造成 15 魔法伤害<br>消耗:5 魔力<br><br>"}
	if(id==4){return "冥想:<br>先获得 2 智慧,再增加 1 体力, 2 魔力<br>消耗:1 体力<br><br>"+effectdisplay(0)}
	if(id==5){return "魔力源泉:<br>恢复 7 魔力<br>消耗:无<br><br>"}
	if(id == 6){return "连斩:对敌方造成 7 物理伤害3次<br>消耗:2 体力<br><br>"}
	if(id == 7){return "愤怒:获得 3 力量<br>消耗:1 体力<br><br>"+effectdisplay(1)}
	if(id == 8){return "传染:给敌方 3 中毒<br>消耗:1 体力<br><br>"+effectdisplay(3)}
	if(id == 9){return "病原体:给双方 2 感染<br>消耗:2 体力<br><br>"+effectdisplay(4)}
	if(id == 10){return "思考:抽一张牌,恢复 1 体力,如果有智慧效果则再触发一次<br>消耗:1 体力<br><br>"+effectdisplay(0)}
}

function card2display(id){
	if(id==0){return "阻梦:<br>每有1张在手上就少抽一张牌<br>消耗:1 体力<br><br>"}
}

addLayer("afdian", {
    name: "afdian",
    symbol: "A",
    position: 10,
    startData() { return {
        unlocked: true,
    }},
	tooltip() { 
		return `捐助(donate)`
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	tabFormat: [
        "main-display",
        "prestige-button",
        ["display-text", function() {return '<h1>https://afdian.net/@Mysterious124'}],
        "blank",
        "upgrades"
    ]
})

addLayer("data", {
    name: "data",
    symbol: " ",
    position: 11,
    startData() { return {
        unlocked: true,
		
		money:new Decimal(0),
		
		hp:new Decimal(100),
		hpmax:new Decimal(100),
		mp:new Decimal(20),
		mpmax:new Decimal(20),
		ps:new Decimal(3),
		psmax:new Decimal(3),
		de:new Decimal(0),
		atkto:new Decimal(0),
		mtkto:new Decimal(0),
		
		/*
		id0:智慧:每一层使获得魔力时多获得1,每回合减少一层
		id1:愤怒:每一层使物理伤害+1,每回合减少一层
		id2:恢复:回合结束时恢复层级血量,每回合减少一层
		id3:中毒:回合结束减少层级血量,无视护甲,每回合减少一层,如果有恢复格外减少一层
		id4:感染:中毒每回合加一层
		id5:眩晕:此回合无法攻击,抽排,每回合减少一层
		*/
		effect:[new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),],
		deeffect:[new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),],
		alleffect:new Decimal(6),
		
		barpx:new Decimal(584),
		haveeff:new Decimal(0),
		debarpx:new Decimal(502),
		dehaveeff:new Decimal(0),
		
		dehp:new Decimal(30),
		dehpmax:new Decimal(30),
		demp:new Decimal(2),
		dempmax:new Decimal(2),
		deatk:new Decimal(6),
		deatkto:new Decimal(0),
		dede:new Decimal(0),
		
		/*
		id0:无
		id1:感染者:每回合给敌方附加1感染
		*/
		monster:new Decimal(0),
		
		/*
		id0:无
		id1:攻击
		id2:防御
		id3:治疗
		id4:魔法飞弹
		id5:冥想
		id6:魔力源泉
		id7:连斩
		id8:愤怒
		id9:传染
		id10:病原体
		id11:思考
		*/
		card:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0)],
		carddead:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),],
		cardintermediary:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),],
		cardmax:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),],
		allcard:new Decimal(11),
		
		display1:new Decimal(0),
		display2:new Decimal(0),
		display3:new Decimal(0),
		display4:new Decimal(0),
		display5:new Decimal(0),
		display6:new Decimal(0),
		display7:new Decimal(0),
		display8:new Decimal(0),
		display9:new Decimal(0),
		display10:new Decimal(0),
		display11:new Decimal(0),
		display12:new Decimal(0),
		display13:new Decimal(0),
		display14:new Decimal(0),
		display15:new Decimal(0),
		display16:new Decimal(0),
		display17:new Decimal(0),
		display18:new Decimal(0),
		display19:new Decimal(0),
		display20:new Decimal(0),
		
		cardget1:new Decimal(0),
		cardget2:new Decimal(0),
		cardget3:new Decimal(0),
		
		start:true,
		dedead:false,
		moneyaward:false,
		cardaward:false,
		newlevel:false,
		level:new Decimal(0),
    }},
	update(diff) {
		if(player.data.hp.gt(player.data.hpmax)){player.data.hp = new Decimal(player.data.hpmax)}
		if(player.data.mp.gt(player.data.mpmax)){player.data.mp = new Decimal(player.data.mpmax)}
		if(player.data.ps.gt(player.data.psmax)){player.data.ps = new Decimal(player.data.psmax)}
		if(player.data.dehp.gt(player.data.dehpmax)){player.data.dehp = new Decimal(player.data.dehpmax)}
		if(player.data.demp.gt(player.data.dempmax)){player.data.demp = new Decimal(player.data.dempmax)}
		if(player.data.dehp.lte(0) && player.data.dedead == false){
			player.data.moneyaward = true
			player.data.cardaward = true
			player.data.dedead = true
			player.data.newlevel = true
		}
		player.data.haveeff = new Decimal(0)
		player.data.dehaveeff = new Decimal(0)
		if(player.data.de.gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[0].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[1].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[2].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[3].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[4].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[5].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.dede.gt(0)){player.data.haveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[0].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[1].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[2].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[3].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[4].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		if(player.data.deeffect[5].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
		player.data.barpx = new Decimal(584).sub(player.data.haveeff.mul(4)).div(Decimal.max(player.data.haveeff,1)).add(0.5).floor()
		player.data.debarpx = new Decimal(502).sub(player.data.dehaveeff.mul(4)).div(Decimal.max(player.data.dehaveeff,1)).add(0.5).floor()
		/*
		var o = new Decimal(0)
		for(i=0;i<=8;i++){
			player.data.card.push(o)
			player.data.carddead.push(o)
			player.data.cardintermediary.push(o)
			player.data.cardmax.push(o)
		}
		player.data.cardmax[1] = new Decimal(3)
		player.data.cardmax[2] = new Decimal(2)
		player.data.cardmax[3] = new Decimal(1)
		*/
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
})

addLayer("pokedex", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 12,
    startData() { return {
        unlocked: true,
		eff:new Decimal(0),
		mon:new Decimal(0),
		car1:new Decimal(0),
		car2:new Decimal(0),
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	clickables:{
		11:{
			title:"返回战斗",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("none")},
		},
		12:{
			title:"效果图鉴",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_effect")},
		},
		13:{
			title:"怪物图鉴",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_monster")},
		},
		14:{
			title:"卡牌图鉴",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_card")},
		},
	},
	tabFormat: [
		["display-text", function() {return "图鉴会记录游戏中的东西"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12]]],
		["row", [["clickable", 13]]],
		["row", [["clickable", 14]]],
	]
})

addLayer("pokedex_effect", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 11,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
	clickables:{
		11:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex")},
		},
		12:{
			title:"智慧",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(1)},
		},
		13:{
			title:"愤怒",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(2)},
		},
		14:{
			title:"恢复",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(3)},
		},
		15:{
			title:"中毒",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(4)},
		},
		16:{
			title:"感染",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(5)},
		},
		17:{
			title:"眩晕",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(6)},
		},
	},
	tabFormat: [
		["display-text", function() {return "效果图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],]],
		"blank",
		["display-text", function() {
			let eff0 = player.pokedex.eff.eq(1) ? effectdisplay(0):""
			let eff1 = player.pokedex.eff.eq(2) ? effectdisplay(1):""
			let eff2 = player.pokedex.eff.eq(3) ? effectdisplay(2):""
			let eff3 = player.pokedex.eff.eq(4) ? effectdisplay(3):""
			let eff4 = player.pokedex.eff.eq(5) ? effectdisplay(4):""
			let eff5 = player.pokedex.eff.eq(6) ? effectdisplay(5):""
			return eff0+eff1+eff2+eff3+eff4+eff5
		}],
	]
})

addLayer("pokedex_monster", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 11,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
	clickables:{
		11:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex")},
		},
		12:{
			title:"感染者",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(1)},
		},
		13:{
			title:"蛊梦师",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(2)},
		},
	},
	tabFormat: [
		["display-text", function() {return "怪物图鉴"}],
		["row", [["clickable", 11]]],
		["display-text", function() {return "初始怪物除外,每个怪物都有20%的可能为精英怪"}],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],]],
		"blank",
		["display-text", function() {
			let mon0 = player.pokedex.mon.eq(1) ? monsterdisplay(0):""
			let mon1 = player.pokedex.mon.eq(2) ? monsterdisplay(1):""
			return mon0 + mon1
		}],
	]
})

addLayer("pokedex_card", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 11,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
	clickables:{
		11:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex")},
		},
		12:{
			title:"普通卡牌",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_card_tab1")},
		},
		13:{
			title:"诅咒卡牌",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_card_tab2")},
		},
	},
	tabFormat: [
		["display-text", function() {return "卡牌图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12]]],
		["row", [["clickable", 13]]],
	]
})

addLayer("pokedex_card_tab1", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 11,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
	clickables:{
		11:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_card")},
		},
		12:{
			title:"攻击",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(1)},
		},
		13:{
			title:"防御",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(2)},
		},
		14:{
			title:"治疗",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(3)},
		},
		15:{
			title:"魔法飞弹",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(4)},
		},
		16:{
			title:"冥想",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(5)},
		},
		17:{
			title:"魔力源泉",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(6)},
		},
		18:{
			title:"连斩",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(7)},
		},
		19:{
			title:"愤怒",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(8)},
		},
		20:{
			title:"传染",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(9)},
		},
		21:{
			title:"病原体",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(10)},
		},
		22:{
			title:"思考",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(11)},
		},
	},
	tabFormat: [
		["display-text", function() {return "卡牌图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20],["clickable", 21],["clickable", 22],]],
		"blank",
		["display-text", function() {
			let car0 = player.pokedex.car1.eq(1) ? carddisplay(0):""
			let car1 = player.pokedex.car1.eq(2) ? carddisplay(1):""
			let car2 = player.pokedex.car1.eq(3) ? carddisplay(2):""
			let car3 = player.pokedex.car1.eq(4) ? carddisplay(3):""
			let car4 = player.pokedex.car1.eq(5) ? carddisplay(4):""
			let car5 = player.pokedex.car1.eq(6) ? carddisplay(5):""
			let car6 = player.pokedex.car1.eq(7) ? carddisplay(6):""
			let car7 = player.pokedex.car1.eq(8) ? carddisplay(7):""
			let car8 = player.pokedex.car1.eq(9) ? carddisplay(8):""
			let car9 = player.pokedex.car1.eq(10) ? carddisplay(9):""
			let car10 = player.pokedex.car1.eq(11) ? carddisplay(10):""
			return car0+car1+car2+car3+car4+car5+car6+car7+car8+car9+car10
		}],
	]
})

addLayer("pokedex_card_tab2", {
    name: "pokedex",
    symbol: "<h6>图鉴",
	tooltip() { 
		return `图鉴`
	},
    position: 11,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
	clickables:{
		11:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("pokedex_card")},
		},
		12:{
			title:"阻梦",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car2 = new Decimal(1)},
		},
	},
	tabFormat: [
		["display-text", function() {return "卡牌图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],]],
		"blank",
		["display-text", function() {
			let car0 = player.pokedex.car2.eq(1) ? card2display(0):""
			return car0
		}],
	]
})