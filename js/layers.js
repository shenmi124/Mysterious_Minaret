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
		*/
		effect:[new Decimal(0),new Decimal(0),new Decimal(0),],
		alleffect:new Decimal(3),
		
		barpx:new Decimal(581),
		haveeff:new Decimal(0),
		
		dehp:new Decimal(80),
		dehpmax:new Decimal(80),
		demp:new Decimal(5),
		dempmax:new Decimal(5),
		deatk:new Decimal(12),
		deatkto:new Decimal(0),
		dede:new Decimal(0),
		
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
		*/
		card:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
		carddead:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
		cardintermediary:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
		cardmax:[new Decimal(0),
		new Decimal(7),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
		allcard:new Decimal(8),
		
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
		if(player.data.de.gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[0].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[1].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		if(player.data.effect[2].gt(0)){player.data.haveeff = player.data.haveeff.add(1)}
		player.data.barpx = new Decimal(584).sub(player.data.haveeff.mul(4)).div(Decimal.max(player.data.haveeff,1)).add(0.5).floor()
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
