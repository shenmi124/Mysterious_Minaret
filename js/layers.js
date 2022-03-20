function effectdisplay(id){
	if(id == 0){return "智慧:每一层使获得魔力时多获得1,每回合减少一层<br><br>"}
	if(id == 1){return "愤怒:每一层使物理伤害+1,每回合减少一层<br><br>"}
	if(id == 2){return "恢复:回合结束时恢复层级血量,每回合减少一层<br><br>"}
	if(id == 3){return "中毒:回合结束减少层级血量,无视护甲,每回合减少一层,如果有恢复格外减少一层<br><br>"}
	if(id == 4){return "感染:中毒每回合加一层<br><br>"+effectdisplay(3)}
	if(id == 5){return "眩晕:此回合无法攻击,抽排,每回合减少一层<br><br>"}
	if(id == 6){return "魔力枯竭:此回合无法获得魔力,每回合减少一层<br><br>"}
	if(id == 7){return "卍:敌方每次被攻击时给予敌方 1 焕,回合结束将所有效果 卍 变为 效果 卐<br><br>"+"卐:敌方每次被攻击时若有焕则移除 1 焕并格外造成 3 物理伤害,回合结束将所有效果 卐 变为 效果 卍<br><br>"+effectdisplay(9)}
	if(id == 8){return "卐:敌方每次被攻击时若有焕则移除 1 焕并格外造成 3 对应属性伤害,回合结束将所有效果 卐 变为 效果 卍<br><br>"+"卍:敌方每次被攻击时给予敌方 1 焕,回合结束将所有效果 卍 变为 效果 卐<br><br>"+effectdisplay(9)}
	if(id == 9){return "焕:和效果 卐 搭配使用<br><br>"}
}

function monsterdisplay(id){
	if(id==0){return "感染者:消耗4魔力,给敌方附加1感染,每回合回复1魔力<br><br>"+effectdisplay(4)}
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
	if(id == 8){return "传染:给敌方 6 中毒<br>消耗:1 体力<br><br>"+effectdisplay(3)}
	if(id == 9){return "病原体:给敌方 3 感染,我方 2 感染<br>消耗:2 体力<br><br>"+effectdisplay(4)}
	if(id == 10){return "思考:抽一张牌,恢复 1 体力,如果有智慧效果则再触发一次<br>消耗:1 体力<br><br>"+effectdisplay(0)}
	if(id == 11){return "重击:对敌方造成 18 物理伤害并附带 1 眩晕<br>消耗:3 体力<br><br>"+effectdisplay(5)}
	if(id == 12){return "回旋镖:对敌方造成 10 物理伤害并获得 1 回旋镖<br>销毁<br>消耗:1 体力<br><br>"}
	if(id == 13){return "无中生有:恢复 1 体力和 1 魔力,造成 1 物理伤害和 1 魔法伤害,给敌方恢复 2 血<br>消耗:1 体力,1 魔力<br><br>"}
	if(id == 14){return "烨:造成 x 魔法伤害,获得 5 魔力枯竭.给敌方 1 卍<br>销毁<br>消耗:x 魔力<br><br>"+effectdisplay(6)+effectdisplay(7)}
	if(id == 15){return "灵能冲击:造成 15 魔法伤害,敌方获得 2 魔力枯竭<br>消耗:17 魔力<br><br>"+effectdisplay(6)}
	if(id == 16){return "破魂打击:造成 x+5 魔法伤害,获得 2 魔力枯竭<br>消耗:x 魔力<br><br>"+effectdisplay(6)}
	if(id == 17){return "魔能调换:恢复 1 体力<br>消耗:10 魔力<br><br>"}
}

function card2display(id){
	if(id==0){return "阻梦:<br>每有1张在手上就少抽一张牌<br>消耗:1 体力<br><br>"}
}

function haveefffunction(id){
	if(player.data.effect[id].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
}

function dehaveefffunction(id){
	if(player.data.deeffect[id].gt(0)){player.data.dehaveeff = player.data.dehaveeff.add(1)}
}

function havecardfunction(id){
	if(!player.data['display'+id].eq(0)){player.data.holdcard = player.data.holdcard.add(1)}
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
		mp:new Decimal(30),
		mpmax:new Decimal(30),
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
		id6:魔力枯竭:此回合无法获得魔力,每回合减少一层
		id7:卍:敌方每次被攻击时给予敌方 1 焕,回合结束将所有效果 卍 变为 效果 卐
		id8:卐:敌方每次被攻击时若有焕则移除 1 焕并格外造成 3 物理伤害,回合结束将所有效果 卐 变为 效果 卍
		id9:焕:和效果 卐 搭配使用
		*/
		effect:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		],
		deeffect:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		],
		alleffect:new Decimal(10),
		
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
		id12:重击
		*/
		card:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),
		],
		carddead:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),
		],
		cardintermediary:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),
		],
		cardmax:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),
		],
		allcard:new Decimal(18),
		maxcard:new Decimal(10),
		holdcard:new Decimal(0),
		
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
		
		wan:false,
		dewan:false,
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
		player.data.holdcard = new Decimal(0)
		if(player.data.de.gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		haveefffunction(0)
		haveefffunction(1)
		haveefffunction(2)
		haveefffunction(3)
		haveefffunction(4)
		haveefffunction(5)
		haveefffunction(6)
		haveefffunction(7)
		haveefffunction(8)
		haveefffunction(9)
		if(player.data.dede.gt(0)){player.data.haveeff = player.data.dehaveeff.add(1)}
		dehaveefffunction(0)
		dehaveefffunction(1)
		dehaveefffunction(2)
		dehaveefffunction(3)
		dehaveefffunction(4)
		dehaveefffunction(5)
		dehaveefffunction(6)
		dehaveefffunction(7)
		dehaveefffunction(8)
		dehaveefffunction(9)
		
		havecardfunction(1)
		havecardfunction(2)
		havecardfunction(3)
		havecardfunction(4)
		havecardfunction(5)
		havecardfunction(6)
		havecardfunction(7)
		havecardfunction(8)
		havecardfunction(9)
		havecardfunction(10)
		havecardfunction(11)
		havecardfunction(12)
		
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
		 wordStyle()
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
		18:{
			title:"魔力枯竭",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(7)},
		},
		19:{
			title:"卍",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(8)},
		},
		20:{
			title:"卐",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(9)},
		},
		21:{
			title:"焕",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(10)},
		},
	},
	tabFormat: [
		["display-text", function() {return "效果图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20],["clickable", 21],]],
		"blank",
		["display-text", function() {
			let eff0 = player.pokedex.eff.eq(1) ? effectdisplay(0):""
			let eff1 = player.pokedex.eff.eq(2) ? effectdisplay(1):""
			let eff2 = player.pokedex.eff.eq(3) ? effectdisplay(2):""
			let eff3 = player.pokedex.eff.eq(4) ? effectdisplay(3):""
			let eff4 = player.pokedex.eff.eq(5) ? effectdisplay(4):""
			let eff5 = player.pokedex.eff.eq(6) ? effectdisplay(5):""
			let eff6 = player.pokedex.eff.eq(7) ? effectdisplay(6):""
			let eff7 = player.pokedex.eff.eq(8) ? effectdisplay(7):""
			let eff8 = player.pokedex.eff.eq(9) ? effectdisplay(8):""
			let eff9 = player.pokedex.eff.eq(10) ? effectdisplay(9):""
			return eff0+eff1+eff2+eff3+eff4+eff5+eff6+eff7+eff8+eff9
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
		23:{
			title:"重击",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(12)},
		},
		24:{
			title:"回旋镖",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(13)},
		},
		25:{
			title:"无中生有",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(14)},
		},
		26:{
			title:"烨",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(15)},
		},
		27:{
			title:"灵能冲击",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(16)},
		},
		28:{
			title:"破魂打击",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(17)},
		},
		29:{
			title:"魔能调换",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(18)},
		},
	},
	tabFormat: [
		["display-text", function() {return "卡牌图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20],["clickable", 21],["clickable", 22],["clickable", 23],["clickable", 24],["clickable", 25],["clickable", 26],["clickable", 27],["clickable", 28],["clickable", 29],]],
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
			let car11 = player.pokedex.car1.eq(12) ? carddisplay(11):""
			let car12 = player.pokedex.car1.eq(13) ? carddisplay(12):""
			let car13 = player.pokedex.car1.eq(14) ? carddisplay(13):""
			let car14 = player.pokedex.car1.eq(15) ? carddisplay(14):""
			let car15 = player.pokedex.car1.eq(16) ? carddisplay(15):""
			let car16 = player.pokedex.car1.eq(17) ? carddisplay(16):""
			let car17 = player.pokedex.car1.eq(18) ? carddisplay(17):""
			return car0+car1+car2+car3+car4+car5+car6+car7+car8+car9+car10+car11+car12+car13+car14+car15+car16+car17
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