function levelnew(){
	showTab('none')
	let monsterup =  Math.floor((Math.random() * 4))
	let newdehp = new Decimal(30).add(player.data.level.mul(5)).add(Math.random() * player.data.level.mul(6).pow(Decimal.add(1).add(player.data.level.div(100)))).mul(Decimal.add(1).sub(player.data.Normal_Artifacts_Sole[0].mul(5))).floor()
	let newdemp =  new Decimal(4).add(player.data.level.mul(0.5)).add(Math.random() * player.data.level.mul(1).pow(Decimal.add(1).add(player.data.level.div(100)))).floor()
	let newdeatk =  new Decimal(6).add(player.data.level.mul(1)).add(Math.random() * player.data.level.mul(1).pow(Decimal.add(1.25).add(player.data.level.div(100)))).floor()
	if(monsterup==0){
		player.data.monster = new Decimal(Math.floor((Math.random() * 6)) + 1)
	}else{
		player.data.monster = new Decimal(0)
	}
	if(player.data.monster.eq(1)){
		newdehp = newdehp.mul(1.65).floor()
	}
	if(player.data.monster.eq(3)){
		newdehp = newdehp.mul(1.3).floor()
		newdeatk = newdeatk.mul(1.15).floor()
	}
	if(player.data.monster.eq(4)){
		newdehp = newdehp.mul(1.45).floor()
		newdeatk = new Decimal(2)
	}
	if(player.data.monster.eq(5)){
		newdehp = newdehp.mul(1.4).floor()
		newdeatk = newdeatk.mul(1.4).floor()
	}
	if(player.data.monster.eq(6)){
		newdehp = newdehp.mul(0.75).floor()
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
	player.data.artifactsaward = false
	player.data.storeaward = false
	player.data.holdcard = new Decimal(0)
	player.data.removals = new Decimal(0)
	player.data.remove_removals = false
	player.data.card40eff14 = false
	player.data.card40geteff14 = new Decimal(0)
	for(col=1;col<=player.data.allcard;col++){
		player.data['cardget'+col] = new Decimal(0)
	}
	for(col=1;col<=20;col++){
		player.data['display'+col] = new Decimal(0)
	}
	for(col=1;col<=20;col++){
		player.data['display'+col+'copy'] = new Decimal(0)
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
	player.data.cardmax[19] = new Decimal(0)
	player.data.eff10times = new Decimal(0)
	player.data.de = new Decimal(0)
	player.data.wan = false
	player.data.dewan = false
	
	//开局
	let hpmaxadd0 = new Decimal(0)
	let hpmaxadd1 = new Decimal(0)
	let mpmaxadd0 = new Decimal(0)
	let psmaxadd0 = new Decimal(0)
	if(player.data.Normal_Artifacts[0].gt(0)){hpmaxadd0 = player.data.Normal_Artifacts[0].mul(45)}
	if(player.data.Normal_Artifacts[1].gt(0)){player.data.effect[2] = player.data.effect[2].add(player.data.Normal_Artifacts[1].mul(6))}
	if(player.data.Normal_Artifacts[2].gt(0)){mpmaxadd0 = player.data.Normal_Artifacts[2].mul(9)}
	if(player.data.Normal_Artifacts[3].gt(0)){hpmaxadd1 = player.data.money.div(10).floor().mul(player.data.Normal_Artifacts[3])}
	if(player.data.Super_Rare_Artifacts[0].gt(0)){psmaxadd0 = player.data.Super_Rare_Artifacts[0]}
	player.data.hpmax = new Decimal(100).add(hpmaxadd0).add(hpmaxadd1).add(player.data.hpmaxadd2.min(1000)).add(player.data.card38hpmax)
	player.data.mpmax = new Decimal(30).add(mpmaxadd0)
	player.data.psmax = new Decimal(3).add(psmaxadd0)
	
	let startatk = player.data.Rare_Artifacts[1].gte(1) ? player.data.Rare_Artifacts[1].mul(35) : 0
	let startde = player.data.Rare_Artifacts[2].gte(1) ? player.data.Rare_Artifacts[2].mul(35) : 0
	attributes(0,0,0,startatk,0,startde)
	
	if(player.data.Super_Rare_Artifacts[2].gt(0)){player.data.deeffect[4] = player.data.deeffect[4].add(player.data.Super_Rare_Artifacts[2].mul(2))}
	
	player.data.ps = new Decimal(player.data.psmax)
	
	player.data.maxcard = new Decimal(10).add(player.data.Rare_Artifacts_Sole[1].mul(4))
}

function carddeg(i){
	var all_amount = player.data.holdcard
	var deg = i
	for(col3=1;col3<=20;col3++){
		if(col3 == i){
			col3 = 999
		}else if(player.data['display'+col3].eq(0)){
			deg = deg.sub(1)
		}
	}
	for(col2=1;col2<=20;col2++){
		if(col2 == i){
			if(deg.eq(all_amount.add(1).div(2))){
				return `rotate(0deg)`
			}else if(deg.lte(all_amount.mul(0.5))){
				let a = all_amount.div(2).sub(deg).mul(7)
				return `rotate(${Decimal.add(0).sub(a)}deg)`
			}else if(deg.gte(all_amount.mul(0.5))){
				let a = deg.sub(all_amount.add(2).div(2)).mul(7)
				return `rotate(${Decimal.add(0).add(a)}deg)`
			}
		}
	}
}

function cardtop(i){
	var all_amount = player.data.holdcard
	var deg = i
	for(col3=1;col3<=20;col3++){
		if(col3 == i){
			col3 = 999
		}else if(player.data['display'+col3].eq(0)){
			deg = deg.sub(1)
		}
	}
	for(col2=1;col2<=20;col2++){
		if(col2 == i){
			if(deg.eq(all_amount.add(1).div(2))){
				return `0px`
			}else if(deg.lte(all_amount.mul(0.5))){
				let a = all_amount.div(2).sub(deg).mul(30)
				let b = all_amount.div(2).sub(deg).floor()
				if(b==1){b = -10}
				if(b==2){b = -5}
				if(b==3){b = 20}
				if(b==4){b = 60}
				return `${Decimal.add(0).add(a).add(b)}px`
			}else if(deg.gte(all_amount.mul(0.5))){
				let a = deg.sub(all_amount.add(2).div(2)).mul(30)
				let b = deg.sub(all_amount.add(2).div(2)).floor()
				if(b==1){b = -10}
				if(b==2){b = -5}
				if(b==3){b = 20}
				if(b==4){b = 60}
				return `${Decimal.add(0).add(a).add(b)}px`
			}
		}
	}
}

function rotateDeg(){
	var rotateDeg1 = carddeg(new Decimal(1))
	var rotateDeg2 = carddeg(new Decimal(2))
	var rotateDeg3 = carddeg(new Decimal(3))
	var rotateDeg4 = carddeg(new Decimal(4))
	var rotateDeg5 = carddeg(new Decimal(5))
	var rotateDeg6 = carddeg(new Decimal(6))
	var rotateDeg7 = carddeg(new Decimal(7))
	var rotateDeg8 = carddeg(new Decimal(8))
	var rotateDeg9 = carddeg(new Decimal(9))
	var rotateDeg10 = carddeg(new Decimal(10))
	var rotateDeg11 = carddeg(new Decimal(11))
	var rotateDeg12 = carddeg(new Decimal(12))
	var rotateDeg13 = carddeg(new Decimal(13))
	var rotateDeg14 = carddeg(new Decimal(14))
	var rotateDeg15 = carddeg(new Decimal(15))
	var rotateDeg16 = carddeg(new Decimal(16))
	var rotateDeg17 = carddeg(new Decimal(17))
	var rotateDeg18 = carddeg(new Decimal(18))
	var rotateDeg19 = carddeg(new Decimal(19))
	var rotateDeg20 = carddeg(new Decimal(20))
	document.body.style.setProperty("--styleRotateDeg1", rotateDeg1);
	document.body.style.setProperty("--styleRotateDeg2", rotateDeg2);
	document.body.style.setProperty("--styleRotateDeg3", rotateDeg3);
	document.body.style.setProperty("--styleRotateDeg4", rotateDeg4);
	document.body.style.setProperty("--styleRotateDeg5", rotateDeg5);
	document.body.style.setProperty("--styleRotateDeg6", rotateDeg6);
	document.body.style.setProperty("--styleRotateDeg7", rotateDeg7);
	document.body.style.setProperty("--styleRotateDeg8", rotateDeg8);
	document.body.style.setProperty("--styleRotateDeg9", rotateDeg9);
	document.body.style.setProperty("--styleRotateDeg10", rotateDeg10);
	document.body.style.setProperty("--styleRotateDeg11", rotateDeg11);
	document.body.style.setProperty("--styleRotateDeg12", rotateDeg12);
	document.body.style.setProperty("--styleRotateDeg13", rotateDeg13);
	document.body.style.setProperty("--styleRotateDeg14", rotateDeg14);
	document.body.style.setProperty("--styleRotateDeg15", rotateDeg15);
	document.body.style.setProperty("--styleRotateDeg16", rotateDeg16);
	document.body.style.setProperty("--styleRotateDeg17", rotateDeg17);
	document.body.style.setProperty("--styleRotateDeg18", rotateDeg18);
	document.body.style.setProperty("--styleRotateDeg19", rotateDeg19);
	document.body.style.setProperty("--styleRotateDeg20", rotateDeg20);
}

function retateTop(){
	var rotateTop1 = cardtop(new Decimal(1))
	var rotateTop2 = cardtop(new Decimal(2))
	var rotateTop3 = cardtop(new Decimal(3))
	var rotateTop4 = cardtop(new Decimal(4))
	var rotateTop5 = cardtop(new Decimal(5))
	var rotateTop6 = cardtop(new Decimal(6))
	var rotateTop7 = cardtop(new Decimal(7))
	var rotateTop8 = cardtop(new Decimal(8))
	var rotateTop9 = cardtop(new Decimal(9))
	var rotateTop10 = cardtop(new Decimal(10))
	var rotateTop11 = cardtop(new Decimal(11))
	var rotateTop12 = cardtop(new Decimal(12))
	var rotateTop13 = cardtop(new Decimal(13))
	var rotateTop14 = cardtop(new Decimal(14))
	var rotateTop15 = cardtop(new Decimal(15))
	var rotateTop16 = cardtop(new Decimal(16))
	var rotateTop17 = cardtop(new Decimal(17))
	var rotateTop18 = cardtop(new Decimal(18))
	var rotateTop19 = cardtop(new Decimal(19))
	var rotateTop20 = cardtop(new Decimal(20))
	document.body.style.setProperty("--styleRotateTop1", rotateTop1);
	document.body.style.setProperty("--styleRotateTop2", rotateTop2);
	document.body.style.setProperty("--styleRotateTop3", rotateTop3);
	document.body.style.setProperty("--styleRotateTop4", rotateTop4);
	document.body.style.setProperty("--styleRotateTop5", rotateTop5);
	document.body.style.setProperty("--styleRotateTop6", rotateTop6);
	document.body.style.setProperty("--styleRotateTop7", rotateTop7);
	document.body.style.setProperty("--styleRotateTop8", rotateTop8);
	document.body.style.setProperty("--styleRotateTop9", rotateTop9);
	document.body.style.setProperty("--styleRotateTop10", rotateTop10);
	document.body.style.setProperty("--styleRotateTop11", rotateTop11);
	document.body.style.setProperty("--styleRotateTop12", rotateTop12);
	document.body.style.setProperty("--styleRotateTop13", rotateTop13);
	document.body.style.setProperty("--styleRotateTop14", rotateTop14);
	document.body.style.setProperty("--styleRotateTop15", rotateTop15);
	document.body.style.setProperty("--styleRotateTop16", rotateTop16);
	document.body.style.setProperty("--styleRotateTop17", rotateTop17);
	document.body.style.setProperty("--styleRotateTop18", rotateTop18);
	document.body.style.setProperty("--styleRotateTop19", rotateTop19);
	document.body.style.setProperty("--styleRotateTop20", rotateTop20);
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
			display() {
				let dis1 = player.data.effect[11].lte(0) ? "血量 "+format(player.data.hp,0)+" / "+format(player.data.hpmax,0) : "血量 ??? / ???"
				let dis2 = player.data.card40eff14 == true ? "("+format(player.data.card40geteff14,0)+")" : ""
				return dis1+dis2
			},	
			direction: RIGHT,
			width: 500,
			height: 25,
			unlocked(){return true},
			progress(){return player.data.effect[11].lte(0) ? (player.data.hp.div(player.data.hpmax)).toNumber() : true},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#ec1c24"},
			textStyle: {"color": "#000000"}
		},
		deadbar1:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(1) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(1) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar2:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 96,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(2) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(2) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar3:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(3) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(3) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar4:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 96,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(4) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(4) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar5:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(5) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(5) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar6:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0) && player.data.Special_Artifacts[1].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(6) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(6) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar7:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 96,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0) && player.data.Special_Artifacts[1].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(7) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(7) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar8:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0) && player.data.Special_Artifacts[1].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(8) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(8) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar9:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 96,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0) && player.data.Special_Artifacts[1].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(9) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(9) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		deadbar10:{
			display() {
				return 
			},	
			direction: RIGHT,
			width: 97,
			height: 5,
			unlocked(){return player.data.Special_Artifacts[0].gt(0) && player.data.Special_Artifacts[1].gt(0)},
			progress(){return player.data.Special_Artifacts0.gte(10) ? true : false},
			baseStyle(){return player.data.Special_Artifacts0.gte(10) ? {"background-color": "#3e3e3e"} : {"background-color": "#FFFFFF00"}},
			fillStyle: {"background-color": "#3e3e3e"},
			textStyle: {"color": "#000000"}
		},
		mpbar:{
			display() {return player.data.effect[11].lte(0) ? "魔力 "+format(player.data.mp,0)+" / "+format(player.data.mpmax,0) : "魔力 ??? / ???"},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return player.data.effect[11].lte(0) ? (player.data.mp.div(player.data.mpmax)).toNumber() : true},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#00a8f3"},
			textStyle: {"color": "#000000"}
		},
		psbar:{
			display() {return player.data.effect[11].lte(0) ? "体力 "+format(player.data.ps,0)+" / "+format(player.data.psmax,0) : "体力 ??? / ???"},	
			direction: RIGHT,
			width: 248,
			height: 25,
			unlocked(){return true},
			progress(){return player.data.effect[11].lte(0) ? (player.data.ps.div(player.data.psmax)).toNumber() : true},
			baseStyle: {"background-color": "#FFFFFF"},
			fillStyle: {"background-color": "#fff200"},
			textStyle: {"color": "#000000"}
		},
		debar:{
			display() {return "护甲 "+format(player.data.de,0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.de.gt(0)},
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
			unlocked(){return player.data.effect[0].gt(0)},
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
			unlocked(){return player.data.effect[1].gt(0)},
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
			unlocked(){return player.data.effect[2].gt(0)},
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
			unlocked(){return player.data.effect[3].gt(0)},
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
			unlocked(){return player.data.effect[4].gt(0)},
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
			unlocked(){return player.data.effect[5].gt(0)},
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
			unlocked(){return player.data.effect[6].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#ccfffd"},
			fillStyle: {"background-color": "#ccfffd"},
			textStyle: {"color": "#000000"}
		},
		eff7bar:{
			display() {return "焱 "+format(player.data.effect[7],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[7].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#ec1b1b"},
			fillStyle: {"background-color": "#ec1b1b"},
			textStyle: {"color": "#000000"}
		},
		eff8bar:{
			display() {return "炎 "+format(player.data.effect[8],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[8].gt(0)},
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
			unlocked(){return player.data.effect[9].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#ec531b"},
			fillStyle: {"background-color": "#ec531b"},
			textStyle: {"color": "#000000"}
		},
		eff10bar:{
			display() {return "布朗魔术 "+format(player.data.effect[10],0)+"("+format(this.eff10c(),0)+")"},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[10].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#fffbf2"},
			fillStyle: {"background-color": "#fffbf2"},
			textStyle: {"color": "#000000"},
			eff10c() {return new Decimal(2).pow(player.data.eff10times.add(1))},
		},
		eff11bar:{
			display() {return "混乱 "+format(player.data.effect[11],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[11].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#3b3b3b"},
			fillStyle: {"background-color": "#3b3b3b"},
			textStyle: {"color": "#000000"}
		},
		eff12bar:{
			display() {return "魔力再生 "+format(player.data.effect[12],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[12].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#53dde2"},
			fillStyle: {"background-color": "#53dde2"},
			textStyle: {"color": "#000000"}
		},
		eff13bar:{
			display() {return "减伤 "+format(player.data.effect[13],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[13].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#3cf5fc"},
			fillStyle: {"background-color": "#3cf5fc"},
			textStyle: {"color": "#000000"}
		},
		eff14bar:{
			display() {return "凝血 "+format(player.data.effect[14],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[14].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#6a1723"},
			fillStyle: {"background-color": "#6a1723"},
			textStyle: {"color": "#FFFFFF"}
		},
		eff15bar:{
			display() {return "易伤 "+format(player.data.effect[15],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[15].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#b8b8b8"},
			fillStyle: {"background-color": "#b8b8b8"},
			textStyle: {"color": "#000000"}
		},
		moneybar:{
			display() {return format(player.data.money,0)+"$"},	
			direction: RIGHT,
			width: 76,
			height(){
				let a = 54
				let b = player.data.Special_Artifacts[0].gt(0) ? 9 : 0
				let c = player.data.Special_Artifacts[1].gt(0)&&player.data.Special_Artifacts[0].gt(0) ? 9 : 0
				let fin = a+b+c
				return fin
			},
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
			style() {return {'height': "25px","min-height": "25px",'width': '750px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00"}},
			tooltip(){
				let effde = player.data.de.gt(0) ? format(player.data.de,0)+"护甲<br>":""
				let eff0 = player.data.effect[0].gt(0) ? format(player.data.effect[0],0)+"智慧<br>":""
				let eff1 = player.data.effect[1].gt(0) ? format(player.data.effect[1],0)+"力量<br>":""
				let eff2 = player.data.effect[2].gt(0) ? format(player.data.effect[2],0)+"恢复<br>":""
				let eff3 = player.data.effect[3].gt(0) ? format(player.data.effect[3],0)+"中毒<br>":""
				let eff4 = player.data.effect[4].gt(0) ? format(player.data.effect[4],0)+"感染<br>":""
				let eff5 = player.data.effect[5].gt(0) ? format(player.data.effect[5],0)+"眩晕<br>":""
				let eff6 = player.data.effect[6].gt(0) ? format(player.data.effect[6],0)+"魔力枯竭<br>":""
				let eff7 = player.data.effect[7].gt(0) ? format(player.data.effect[7],0)+"焱<br>":""
				let eff8 = player.data.effect[8].gt(0) ? format(player.data.effect[8],0)+"炎<br>":""
				let eff9 = player.data.effect[9].gt(0) ? format(player.data.effect[9],0)+"焕<br>":""
				let eff10 = player.data.effect[10].gt(0) ? format(player.data.effect[10],0)+"布朗魔法<br>":""
				let eff11 = player.data.effect[11].gt(0) ? format(player.data.effect[11],0)+"混乱<br>":""
				let eff12 = player.data.effect[12].gt(0) ? format(player.data.effect[12],0)+"魔力再生<br>":""
				let eff13 = player.data.effect[13].gt(0) ? format(player.data.effect[13],0)+"减伤<br>":""
				let eff14 = player.data.effect[14].gt(0) ? format(player.data.effect[14],0)+"凝血<br>":""
				let eff15 = player.data.effect[15].gt(0) ? format(player.data.effect[15],0)+"易伤<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9 + eff10 + eff11 + eff12 + eff13 + eff14
			}
		},
		1022:{
			title:`<other id="other1">把鼠标对准我查看全属性`,
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'height': "25px","min-height": "25px",'width': '750px','background-color':"#FFFFFF00",'border-color': "#FFFFFF00"}},
			tooltip(){
				let effde = player.data.dede.gt(0) ? format(player.data.dede,0)+"护甲<br>":""
				let eff0 = player.data.deeffect[0].gt(0) ? format(player.data.deeffect[0],0)+"智慧<br>":""
				let eff1 = player.data.deeffect[1].gt(0) ? format(player.data.deeffect[1],0)+"力量<br>":""
				let eff2 = player.data.deeffect[2].gt(0) ? format(player.data.deeffect[2],0)+"恢复<br>":""
				let eff3 = player.data.deeffect[3].gt(0) ? format(player.data.deeffect[3],0)+"中毒<br>":""
				let eff4 = player.data.deeffect[4].gt(0) ? format(player.data.deeffect[4],0)+"感染<br>":""
				let eff5 = player.data.deeffect[5].gt(0) ? format(player.data.deeffect[5],0)+"眩晕<br>":""
				let eff6 = player.data.deeffect[6].gt(0) ? format(player.data.deeffect[6],0)+"魔力枯竭<br>":""
				let eff7 = player.data.deeffect[7].gt(0) ? format(player.data.deeffect[7],0)+"焱<br>":""
				let eff8 = player.data.deeffect[8].gt(0) ? format(player.data.deeffect[8],0)+"炎<br>":""
				let eff9 = player.data.deeffect[9].gt(0) ? format(player.data.deeffect[9],0)+"焕<br>":""
				let eff10 = player.data.deeffect[10].gt(0) ? format(player.data.deeffect[10],0)+"布朗魔法<br>":""
				let eff11 = player.data.deeffect[11].gt(0) ? format(player.data.deeffect[11],0)+"混乱<br>":""
				let eff12 = player.data.deeffect[12].gt(0) ? format(player.data.deeffect[12],0)+"魔力再生<br>":""
				let eff13 = player.data.effect[13].gt(0) ? format(player.data.effect[13],0)+"减伤<br>":""
				let eff14 = player.data.effect[14].gt(0) ? format(player.data.effect[14],0)+"凝血<br>":""
				let eff15 = player.data.effect[15].gt(0) ? format(player.data.effect[15],0)+"易伤<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9 + eff10 + eff11 + eff12 + eff13 + eff14
			}
		},
		1001:{
			title: "开始!",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == true},
			onClick(){return getcard("display",3)},
		},
		1002:{
			title: "下一回合!<br><h6>+3体力<br>÷2护甲",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return recard()},
		},
		1007:{
			title: "重新开始并统计分数",
			canClick(){return true},
			unlocked(){return player.data.hp.lte(0)},
			onClick(){return ResetPoint()},
		},
		1008:{
			title: "结束移除",
			canClick(){return true},
			unlocked(){return player.data.remove_removals==true},
			onClick(){
				player.data.removals = new Decimal(0)
				player.data.remove_removals == false
			},
		},
		1:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg1)', 'top': 'var(--styleRotateTop1)'}},
		},
		2:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg2)', 'top': 'var(--styleRotateTop2)'}},
		},
		3:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg3)', 'top': 'var(--styleRotateTop3)'}},
		},
		4:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg4)', 'top': 'var(--styleRotateTop4)'}},
		},
		5:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg5)', 'top': 'var(--styleRotateTop5)'}},
		},
		6:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg6)', 'top': 'var(--styleRotateTop6)'}},
		},
		7:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg7)', 'top': 'var(--styleRotateTop7)'}},
		},
		8:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg8)', 'top': 'var(--styleRotateTop8)'}},
		},
		9:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg9)', 'top': 'var(--styleRotateTop9)'}},
		},
		10:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg10)', 'top': 'var(--styleRotateTop10)'}},
		},
		11:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg11)', 'top': 'var(--styleRotateTop11)'}},
		},
		12:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg12)', 'top': 'var(--styleRotateTop12)'}},
		},
		13:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg13)', 'top': 'var(--styleRotateTop13)'}},
		},
		14:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg14)', 'top': 'var(--styleRotateTop14)'}},
		},
		15:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg15)', 'top': 'var(--styleRotateTop15)'}},
		},
		16:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg16)', 'top': 'var(--styleRotateTop16)'}},
		},
		17:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg17)', 'top': 'var(--styleRotateTop17)'}},
		},
		18:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg18)', 'top': 'var(--styleRotateTop18)'}},
		},
		19:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg19)', 'top': 'var(--styleRotateTop19)'}},
		},
		20:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': 'var(--styleRotateDeg20)', 'top': 'var(--styleRotateTop20)'}},
		},
	},
	tabFormat: [
		["row",[
			["display-text", function() {
			let card0 = "<hr>牌库:("+format(player.data.holdcard,0)+"/"+format(player.data.maxcard,0)+")<br>"
			let card1 = tabFormatCard(1,"攻击",0)
			let card2 = tabFormatCard(2,"防御",0)
			let card3 = tabFormatCard(3,"治疗",0)
			let card4 = tabFormatCard(4,"魔法飞弹",0)
			let card5 = tabFormatCard(5,"冥想",0)
			let card6 = tabFormatCard(6,"魔力再生",0)
			let card7 = tabFormatCard(7,"连斩",0)
			let card8 = tabFormatCard(8,"愤怒",0)
			let card9 = tabFormatCard(9,"传染",0)
			let card10 = tabFormatCard(10,"病原体",0)
			let card11 = tabFormatCard(11,"思考",0)
			let card12 = tabFormatCard(12,"重击",0)
			let card13 = tabFormatCard(13,"回旋镖",0)
			let card14 = tabFormatCard(14,"无中生有",0)
			let card15 = tabFormatCard(15,"烨",0)
			let card16 = tabFormatCard(16,"灵能冲击",0)
			let card17 = tabFormatCard(17,"破魂打击",0)
			let card18 = tabFormatCard(18,"魔能调换",0)
			let card19 = tabFormatCard(19,"阻梦",1) 
			let card20 = tabFormatCard(20,"毒素扩散",0)
			let card21 = tabFormatCard(21,"血清",0)
			let card22 = tabFormatCard(22,"隐秘扩散",0)
			let card23 = tabFormatCard(23,"病毒爆发",0)
			let card24 = tabFormatCard(24,"墓地增生",0)
			let card25 = tabFormatCard(25,"肉体再生",0)
			let card26 = tabFormatCard(26,"重构",0)
			let card27 = tabFormatCard(27,"嗜血斩",0)
			let card28 = tabFormatCard(28,"自信",0)
			let card29 = tabFormatCard(29,"魔力源泉",0)
			let card30 = tabFormatCard(30,"治疗术",0)
			let card31 = tabFormatCard(31,"绷带",0)
			let card32 = tabFormatCard(32,"卡牌魔法",0)
			let card33 = tabFormatCard(33,"献祭",0)
			let card34 = tabFormatCard(34,"天平",0)
			let card35 = tabFormatCard(35,"墓地衍生",0)
			let card36 = tabFormatCard(36,"滴血",0)
			let card37 = tabFormatCard(37,"破财消灾",0)
			let card38 = tabFormatCard(38,"灵魂吸取",0)
			let card39 = tabFormatCard(39,"魔法结晶",0)
			let card40 = tabFormatCard(40,"提取器",0)
			let card41 = tabFormatCard(41,"应急干粮",0)
			let card42 = tabFormatCard(42,"老千",0)
			let card43 = tabFormatCard(43,"破釜沉舟",0)
			let card44 = tabFormatCard(44,"能量护盾",0)
			let card45 = tabFormatCard(45,"不定性病毒",0)
			let card46 = tabFormatCard(46,"格挡",0)
			let card47 = tabFormatCard(47,"急救",0)
			let card48 = tabFormatCard(48,"背刺",0)
			let card49 = tabFormatCard(49,"蔓延",0)
			let card50 = tabFormatCard(50,"聚集",0)
			let card51 = tabFormatCard(51,"再生",0)
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18 + card19 + card20 + card21 + card22 + card23 + card24 + card25 + card26 + card27 + card28 + card29 + card30 + card31 + card32 + card33 + card34 + card35 + card36 + card37 + card38 + card39 + card40 + card41 + card42 + card43 + card44 + card45 + card46 + card47 + card48 + card49 + card50 + card51
			}],
			["column",[
				["display-text", function() {
					let themestart = '<h6>(tip:你有5种不同的背景可以换(包括亮色),当前背景:'
					let themelast = ')'
					let theme0 = options.theme=="default" ? "经典" : ""
					let theme1 = options.theme=="aqua" ? "海蓝" : ""
					let theme2 = options.theme=="TheGameTree" ? "游戏树特殊页面" : ""
					let theme3 = options.theme=="lightblue" ? "亮蓝" : ""
					let theme4 = options.theme=="light" ? "纯白" : ""
					return themestart + theme0 + theme1 + theme2 + theme3 + theme4 + themelast
				}],
				["display-text", function() {return 'QQ群:688646311|左上角设置,信息,捐助|右上角版本,图鉴,背包,成就'}],
				["display-text", function() {return '<hr>你的最高分是:'+format(player.point.tob_points,0)+'.你上次的得分是:'+format(player.point.last_points,0)+'.'}],
				["display-text", function() {return '你在关卡'+format(player.data.level,0)+",怪物会随着关卡提升越来越强."}],
				["bar", "dehpbar"],
				["row", [["bar", "dempbar"],["bar", "deatkbar"]]],
				["row", [["bar", "dedebar"],["bar", "deeff3bar"],["bar", "deeff4bar"],["bar", "deeff5bar"],["bar", "deeff6bar"],["bar", "deeff7bar"],["bar", "deeff8bar"],["bar", "deeff9bar"]]],
				["bar", "dedebar"],
				["display-text", function() {
					let monster0 = player.data.monster.eq(0) ? "":""
					let monster1 = player.data.monster.eq(1) ? "感染者:每回合给敌方附加2感染<br>*1.65血":""
					let monster2 = player.data.monster.eq(2) ? "蛊梦师:每回合给敌方一张阻梦":""
					let monster3 = player.data.monster.eq(3) ? "野蛮人:攻击有25%的几率造成晕眩1在双方行动之后<br>*1.3血,*1.15攻击":""
					let monster4 = player.data.monster.eq(4) ? "截:初始攻击2,每攻击一次攻击翻倍<br>*1.45血":""
					let monster5 = player.data.monster.eq(5) ? "狂战士:血量低于30%时每回合格外攻击1次<br>*1.4血,*1.4攻击":""
					let monster6 = player.data.monster.eq(6) ? "混乱者:每回合给予对方2混乱与3中毒<br>*0.75血":""
					return monster0 + monster1 + monster2 + monster3 + monster4 + monster5 + monster6
				}],
				["row", [["clickable", 1022]]],
				["blank", '170px'],
				["row", [
					["column",[
						["bar", "hpbar"],
						["row", [["bar", "deadbar1"],["bar", "deadbar2"],["bar", "deadbar3"],["bar", "deadbar4"],["bar", "deadbar5"]]],
						["row", [["bar", "deadbar6"],["bar", "deadbar7"],["bar", "deadbar8"],["bar", "deadbar9"],["bar", "deadbar10"]]],
							["row", [
								["bar", "mpbar"],["bar", "psbar"]
							]],
					]],
				["bar", "moneybar"]
				]],
				["row", [
				["bar", "debar"],["bar", "eff0bar"],
				["bar", "eff1bar"],["bar", "eff2bar"],["bar", "eff3bar"],["bar", "eff4bar"],["bar", "eff5bar"],
				["bar", "eff6bar"],["bar", "eff7bar"],["bar", "eff8bar"],["bar", "eff9bar"],["bar", "eff10bar"],
				["bar", "eff11bar"],["bar", "eff12bar"],["bar", "eff13bar"],["bar", "eff14bar"],["bar", "eff15bar"]
				]],
				["row", [["clickable", 1021]]],
				["row", [["clickable", 1],["clickable", 2],["clickable", 3],["clickable", 4],["clickable", 5],["clickable", 6],["clickable", 7],["clickable", 8],["clickable", 9],["clickable", 10],["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20]]],
				["blank", '70px'],
				["row", [["clickable", 1001],["clickable", 1002],["clickable", 99]]],
				["row", [["clickable", 1011],["clickable", 1012],["clickable", 1013],["clickable", 1007],["clickable", 1024]]],
			]],
			["display-text", function() {
			let card0 = "<hr>墓地:<br>"
			let card1 = tabFormatDeadCard(1,"攻击")
			let card2 = tabFormatDeadCard(2,"防御")
			let card3 = tabFormatDeadCard(3,"治疗")
			let card4 = tabFormatDeadCard(4,"魔法飞弹")
			let card5 = tabFormatDeadCard(5,"冥想")
			let card6 = tabFormatDeadCard(6,"魔力再生")
			let card7 = tabFormatDeadCard(7,"连斩")
			let card8 = tabFormatDeadCard(8,"愤怒")
			let card9 = tabFormatDeadCard(9,"传染")
			let card10 = tabFormatDeadCard(10,"病原体")
			let card11 = tabFormatDeadCard(11,"思考")
			let card12 = tabFormatDeadCard(12,"重击")
			let card13 = tabFormatDeadCard(13,"回旋镖")
			let card14 = tabFormatDeadCard(14,"无中生有")
			let card15 = tabFormatDeadCard(15,"烨")
			let card16 = tabFormatDeadCard(16,"灵能冲击")
			let card17 = tabFormatDeadCard(17,"破魂打击")
			let card18 = tabFormatDeadCard(18,"魔能调换")
			let card19 = tabFormatDeadCard(19,"阻梦")
			let card20 = tabFormatDeadCard(20,"毒素扩散")
			let card21 = tabFormatDeadCard(21,"血清")
			let card22 = tabFormatDeadCard(22,"隐秘扩散")
			let card23 = tabFormatDeadCard(23,"病毒爆发")
			let card24 = tabFormatDeadCard(24,"墓地增生")
			let card25 = tabFormatDeadCard(25,"肉体再生")
			let card26 = tabFormatDeadCard(26,"重构")
			let card27 = tabFormatDeadCard(27,"嗜血斩")
			let card28 = tabFormatDeadCard(28,"自信")
			let card29 = tabFormatDeadCard(29,"魔力源泉")
			let card30 = tabFormatDeadCard(30,"治疗术")
			let card31 = tabFormatDeadCard(31,"绷带")
			let card32 = tabFormatDeadCard(32,"卡牌魔法")
			let card33 = tabFormatDeadCard(33,"献祭")
			let card34 = tabFormatDeadCard(34,"天平")
			let card35 = tabFormatDeadCard(35,"墓地衍生")
			let card36 = tabFormatDeadCard(36,"滴血")
			let card37 = tabFormatDeadCard(37,"破财消灾")
			let card38 = tabFormatDeadCard(38,"灵魂吸取")
			let card39 = tabFormatDeadCard(39,"魔法结晶")
			let card40 = tabFormatDeadCard(40,"提取器")
			let card41 = tabFormatDeadCard(41,"应急干粮")
			let card42 = tabFormatDeadCard(42,"老千")
			let card43 = tabFormatDeadCard(43,"破釜沉舟")
			let card44 = tabFormatDeadCard(44,"能量护盾")
			let card45 = tabFormatDeadCard(45,"不定性病毒")
			let card46 = tabFormatDeadCard(46,"格挡")
			let card47 = tabFormatDeadCard(47,"急救")
			let card48 = tabFormatDeadCard(48,"背刺")
			let card49 = tabFormatDeadCard(49,"蔓延")
			let card50 = tabFormatDeadCard(50,"聚集")
			let card51 = tabFormatDeadCard(51,"再生")
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18 + card19 + card20 + card21 + card22 + card23 + card24 + card25 + card26 + card27 + card28 + card29 + card30 + card31 + card32 + card33 + card34 + card35 + card36 + card37 + card38 + card39 + card40 + card41 + card42 + card43 + card44 + card45 + card46 + card47 + card48 + card49 + card50 + card51
			}],
		]],
	]
})