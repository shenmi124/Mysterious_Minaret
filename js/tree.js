function levelnew(){
	showTab('none')
	//let monsterup =  Math.floor((Math.random() * 4))
	let newdehp = new Decimal(30).add(player.data.level.mul(4)).add(Math.random() * player.data.level.mul(5.5).pow(Decimal.add(1).add(player.data.level.div(100)))).mul(Decimal.add(1).sub(player.data.Normal_Artifacts_Sole[0].mul(5))).floor()
	let newdemp =  new Decimal(4).add(player.data.level.mul(0.35)).add(Math.random() * player.data.level.mul(1.1).pow(Decimal.add(1).add(player.data.level.div(100)))).floor()
	let newdeatk =  new Decimal(6).add(player.data.level.mul(0.8)).add(Math.random() * player.data.level.mul(1.1).pow(Decimal.add(1).add(player.data.level.div(100)))).floor()
	/*/if(monsterup==0){
		player.data.monster = new Decimal(Math.floor((Math.random() * 6)) + 1)
	}else{
		player.data.monster = new Decimal(0)
	}
	*/
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
	if(player.data.monster.eq(7)){
		newdehp = newdehp.mul(1.25).floor()
	}
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
	player.data.newmap = false
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
	
	//??????
	let hpmaxadd0 = new Decimal(0)
	let hpmaxadd1 = new Decimal(0)
	let mpmaxadd0 = new Decimal(0)
	let psmaxadd0 = new Decimal(0)
	if(player.data.Normal_Artifacts[0].gt(0)){hpmaxadd0 = player.data.Normal_Artifacts[0].mul(45)}
	if(player.data.Normal_Artifacts[1].gt(0)){player.data.effect[2] = player.data.effect[2].add(player.data.Normal_Artifacts[1].mul(6))}
	if(player.data.Normal_Artifacts[2].gt(0)){mpmaxadd0 = player.data.Normal_Artifacts[2].mul(9)}
	if(player.data.Normal_Artifacts[3].gt(0)){hpmaxadd1 = player.data.money.div(10).floor().mul(player.data.Normal_Artifacts[3])}
	if(player.data.Super_Rare_Artifacts[0].gt(0)){psmaxadd0 = player.data.Super_Rare_Artifacts[0]}
	player.data.hpmax = new Decimal(100).add(hpmaxadd0).add(hpmaxadd1).add(player.data.hpmaxadd2).add(player.data.card38hpmax).mul(player.campfire.hpmax.mul(0.01).add(1))
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
			}else if(deg.lt(all_amount.mul(0.5))){
				let a = all_amount.div(2).sub(deg).mul(7)
				return `rotate(${Decimal.add(0).sub(a)}deg)`
			}else if(deg.gt(all_amount.mul(0.5))){
				let a = deg.sub(all_amount.add(2).div(2)).mul(7)
				return `rotate(${Decimal.add(0).add(a)}deg)`
			}
		}
	}
}

function cardtop(i){
	var all_amount = player.data.holdcard
	var deg = i
	if(tmp['tree-tab'].clickables[i].unlocked){
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
	}else{
		return `250px`
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
			display() {return format(player.data.dehp,0)+" / "+format(player.data.dehpmax,0)+`<img src="png/HP.png">`},	
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
			display() {return format(player.data.demp,0)+" / "+format(player.data.dempmax,0)+`<img src="png/MP.png">`},	
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
			display() {return "?????? "+format(player.data.deatk,0)},	
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
			display() {return "?????? "+format(player.data.dede,0)},	
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
			display() {return "?????? "+format(player.data.deeffect[3],0)},	
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
			display() {return "?????? "+format(player.data.deeffect[4],0)},	
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
			display() {return "?????? "+format(player.data.deeffect[5],0)},	
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
			display() {return "???????????? "+format(player.data.deeffect[6],0)},	
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
			display() {return "??? "+format(player.data.deeffect[7],0)},	
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
			display() {return "??? "+format(player.data.deeffect[8],0)},	
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
			display() {return "??? "+format(player.data.deeffect[9],0)},	
			direction: RIGHT,
			width(){return player.data.debarpx},
			height: 25,
			unlocked(){return player.data.deeffect[9].gte(1)},
			progress(){return true},
			baseStyle: {"background-color": "#ec531b"},
			fillStyle: {"background-color": "#ec531b"},
			textStyle: {"color": "#000000"}
		},
		//????????? ?????????
		hpbar:{
			display() {
				let dis1 = player.data.effect[11].lte(0) ? format(player.data.hp,0)+" / "+format(player.data.hpmax,0)+`<img src="png/HP.png">` : "??? / ???"+`<img src="png/HP.png">`
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
			display() {return player.data.effect[11].lte(0) ? format(player.data.mp,0)+" / "+format(player.data.mpmax,0)+`<img src="png/MP.png">` : "??? / ???"+`<img src="png/MP.png">`},	
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
			display() {return player.data.effect[11].lte(0) ? format(player.data.ps,0)+" / "+format(player.data.psmax,0)+`<img src="png/PS.png">` : "??? / ???"+`<img src="png/PS.png">`},	
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
			display() {return "?????? "+format(player.data.de,0)},	
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
			display() {return "?????? "+format(player.data.effect[0],0)},	
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
			display() {return "?????? "+format(player.data.effect[1],0)},	
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
			display() {return "?????? "+format(player.data.effect[2],0)},	
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
			display() {return "?????? "+format(player.data.effect[3],0)},	
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
			display() {return "?????? "+format(player.data.effect[4],0)},	
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
			display() {return "?????? "+format(player.data.effect[5],0)},	
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
			display() {return "???????????? "+format(player.data.effect[6],0)},	
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
			display() {return "??? "+format(player.data.effect[7],0)},	
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
			display() {return "??? "+format(player.data.effect[8],0)},	
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
			display() {return "??? "+format(player.data.effect[9],0)},	
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
			display() {return "???????????? "+format(player.data.effect[10],0)+"("+format(this.eff10c(),0)+")"},	
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
			display() {return "?????? "+format(player.data.effect[11],0)},	
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
			display() {return "???????????? "+format(player.data.effect[12],0)},	
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
			display() {return "?????? "+format(player.data.effect[13],0)},	
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
			display() {return "?????? "+format(player.data.effect[14],0)},	
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
			display() {return "?????? "+format(player.data.effect[15],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[15].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#b8b8b8"},
			fillStyle: {"background-color": "#b8b8b8"},
			textStyle: {"color": "#000000"}
		},
		eff16bar:{
			display() {return "?????? "+format(player.data.effect[16],0)},	
			direction: RIGHT,
			width(){return player.data.barpx},
			height: 25,
			unlocked(){return player.data.effect[16].gt(0)},
			progress(){return true},
			baseStyle: {"background-color": "#ffdec6"},
			fillStyle: {"background-color": "#ffdec6"},
			textStyle: {"color": "#000000"}
		},
		moneybar:{
			display() {return format(player.data.money,0)+`<img id="money" src="png/money.gif">`},	
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
			title:`<other id="other1">?????????????????????????????????`,
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'border-color': "rgb(255,255,255,0)",'height': "25px","min-height": "25px",'width': '750px','background-color':"rgb(255,255,255,0)"}},
			tooltip(){
				let effde = player.data.de.gt(0) ? format(player.data.de,0)+"??????<br>":""
				let eff0 = player.data.effect[0].gt(0) ? format(player.data.effect[0],0)+"??????<br>":""
				let eff1 = player.data.effect[1].gt(0) ? format(player.data.effect[1],0)+"??????<br>":""
				let eff2 = player.data.effect[2].gt(0) ? format(player.data.effect[2],0)+"??????<br>":""
				let eff3 = player.data.effect[3].gt(0) ? format(player.data.effect[3],0)+"??????<br>":""
				let eff4 = player.data.effect[4].gt(0) ? format(player.data.effect[4],0)+"??????<br>":""
				let eff5 = player.data.effect[5].gt(0) ? format(player.data.effect[5],0)+"??????<br>":""
				let eff6 = player.data.effect[6].gt(0) ? format(player.data.effect[6],0)+"????????????<br>":""
				let eff7 = player.data.effect[7].gt(0) ? format(player.data.effect[7],0)+"???<br>":""
				let eff8 = player.data.effect[8].gt(0) ? format(player.data.effect[8],0)+"???<br>":""
				let eff9 = player.data.effect[9].gt(0) ? format(player.data.effect[9],0)+"???<br>":""
				let eff10 = player.data.effect[10].gt(0) ? format(player.data.effect[10],0)+"????????????<br>":""
				let eff11 = player.data.effect[11].gt(0) ? format(player.data.effect[11],0)+"??????<br>":""
				let eff12 = player.data.effect[12].gt(0) ? format(player.data.effect[12],0)+"????????????<br>":""
				let eff13 = player.data.effect[13].gt(0) ? format(player.data.effect[13],0)+"??????<br>":""
				let eff14 = player.data.effect[14].gt(0) ? format(player.data.effect[14],0)+"??????<br>":""
				let eff15 = player.data.effect[15].gt(0) ? format(player.data.effect[15],0)+"??????<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9 + eff10 + eff11 + eff12 + eff13 + eff14
			}
		},
		1022:{
			title:`<other id="other1">?????????????????????????????????`,
			canClick(){return false},
			unlocked(){return true},
			onClick(){return},
			style() {return {'border-color': "rgb(255,255,255,0)",'height': "25px","min-height": "25px",'width': '750px','background-color':"rgb(255,255,255,0)"}},
			tooltip(){
				let effde = player.data.dede.gt(0) ? format(player.data.dede,0)+"??????<br>":""
				let eff0 = player.data.deeffect[0].gt(0) ? format(player.data.deeffect[0],0)+"??????<br>":""
				let eff1 = player.data.deeffect[1].gt(0) ? format(player.data.deeffect[1],0)+"??????<br>":""
				let eff2 = player.data.deeffect[2].gt(0) ? format(player.data.deeffect[2],0)+"??????<br>":""
				let eff3 = player.data.deeffect[3].gt(0) ? format(player.data.deeffect[3],0)+"??????<br>":""
				let eff4 = player.data.deeffect[4].gt(0) ? format(player.data.deeffect[4],0)+"??????<br>":""
				let eff5 = player.data.deeffect[5].gt(0) ? format(player.data.deeffect[5],0)+"??????<br>":""
				let eff6 = player.data.deeffect[6].gt(0) ? format(player.data.deeffect[6],0)+"????????????<br>":""
				let eff7 = player.data.deeffect[7].gt(0) ? format(player.data.deeffect[7],0)+"???<br>":""
				let eff8 = player.data.deeffect[8].gt(0) ? format(player.data.deeffect[8],0)+"???<br>":""
				let eff9 = player.data.deeffect[9].gt(0) ? format(player.data.deeffect[9],0)+"???<br>":""
				let eff10 = player.data.deeffect[10].gt(0) ? format(player.data.deeffect[10],0)+"????????????<br>":""
				let eff11 = player.data.deeffect[11].gt(0) ? format(player.data.deeffect[11],0)+"??????<br>":""
				let eff12 = player.data.deeffect[12].gt(0) ? format(player.data.deeffect[12],0)+"????????????<br>":""
				let eff13 = player.data.effect[13].gt(0) ? format(player.data.effect[13],0)+"??????<br>":""
				let eff14 = player.data.effect[14].gt(0) ? format(player.data.effect[14],0)+"??????<br>":""
				let eff15 = player.data.effect[15].gt(0) ? format(player.data.effect[15],0)+"??????<br>":""
				return effde + eff0 + eff1 + eff2 + eff3 + eff4 + eff5 + eff6 + eff7 + eff8 + eff9 + eff10 + eff11 + eff12 + eff13 + eff14
			}
		},
		1001:{
			title: "??????!",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == true},
			onClick(){return getcard("display",3)},
		},
		1002:{
			title: "????????????!<br><h6>+3??????<br>??2??????",
			display() {
			},
			canClick(){return true},
			unlocked(){return !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return recard()},
		},
		1007:{
			title: "???????????????????????????",
			canClick(){return true},
			unlocked(){return player.data.hp.lte(0)},
			onClick(){return ResetPoint()},
		},
		1008:{
			title: "????????????",
			canClick(){return true},
			unlocked(){return player.data.remove_removals==true && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false && player.data.removals.gt(0)},
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
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		2:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		3:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		4:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		5:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		6:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		7:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		8:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		9:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		10:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		11:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		12:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		13:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		14:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		15:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		16:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		17:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		18:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		19:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
		20:{
			title(){return retit('display',this.id)},
			display(){return redis('display',this.id)},
			canClick(){return recan(this.id)},
			unlocked(){return !player.data['display'+this.id].eq(0) && !player.data.dehp.lte(0) && player.data.hp.gt(0) && player.data.start == false},
			onClick(){return reonc(this.id)},
			style() {return {'height': "200px",'width': '150px','transform': `var(--styleRotateDeg${this.id})`, 'top': `var(--styleRotateTop${this.id})`}},
		},
	},
	tabFormat: [
		["row",[
			["display-text", function() {
			let card0 = "<hr>??????:("+format(player.data.holdcard,0)+"/"+format(player.data.maxcard,0)+")<br>"
			let card1 = tabFormatCard(1,"??????",0)
			let card2 = tabFormatCard(2,"??????",0)
			let card3 = tabFormatCard(3,"??????",0)
			let card4 = tabFormatCard(4,"????????????",0)
			let card5 = tabFormatCard(5,"??????",0)
			let card6 = tabFormatCard(6,"????????????",0)
			let card7 = tabFormatCard(7,"??????",0)
			let card8 = tabFormatCard(8,"??????",0)
			let card9 = tabFormatCard(9,"??????",0)
			let card10 = tabFormatCard(10,"?????????",0)
			let card11 = tabFormatCard(11,"??????",0)
			let card12 = tabFormatCard(12,"??????",0)
			let card13 = tabFormatCard(13,"?????????",0)
			let card14 = tabFormatCard(14,"????????????",0)
			let card15 = tabFormatCard(15,"???",0)
			let card16 = tabFormatCard(16,"????????????",0)
			let card17 = tabFormatCard(17,"????????????",0)
			let card18 = tabFormatCard(18,"????????????",0)
			let card19 = tabFormatCard(19,"??????",1) 
			let card20 = tabFormatCard(20,"????????????",0)
			let card21 = tabFormatCard(21,"??????",0)
			let card22 = tabFormatCard(22,"????????????",0)
			let card23 = tabFormatCard(23,"????????????",0)
			let card24 = tabFormatCard(24,"????????????",0)
			let card25 = tabFormatCard(25,"????????????",0)
			let card26 = tabFormatCard(26,"??????",0)
			let card27 = tabFormatCard(27,"?????????",0)
			let card28 = tabFormatCard(28,"??????",0)
			let card29 = tabFormatCard(29,"????????????",0)
			let card30 = tabFormatCard(30,"?????????",0)
			let card31 = tabFormatCard(31,"??????",0)
			let card32 = tabFormatCard(32,"????????????",0)
			let card33 = tabFormatCard(33,"??????",0)
			let card34 = tabFormatCard(34,"??????",0)
			let card35 = tabFormatCard(35,"????????????",0)
			let card36 = tabFormatCard(36,"??????",0)
			let card37 = tabFormatCard(37,"????????????",0)
			let card38 = tabFormatCard(38,"????????????",0)
			let card39 = tabFormatCard(39,"????????????",0)
			let card40 = tabFormatCard(40,"?????????",0)
			let card41 = tabFormatCard(41,"????????????",0)
			let card42 = tabFormatCard(42,"??????",0)
			let card43 = tabFormatCard(43,"????????????",0)
			let card44 = tabFormatCard(44,"????????????",0)
			let card45 = tabFormatCard(45,"???????????????",0)
			let card46 = tabFormatCard(46,"??????",0)
			let card47 = tabFormatCard(47,"??????",0)
			let card48 = tabFormatCard(48,"??????",0)
			let card49 = tabFormatCard(49,"??????",0)
			let card50 = tabFormatCard(50,"??????",0)
			let card51 = tabFormatCard(51,"??????",0)
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18 + card19 + card20 + card21 + card22 + card23 + card24 + card25 + card26 + card27 + card28 + card29 + card30 + card31 + card32 + card33 + card34 + card35 + card36 + card37 + card38 + card39 + card40 + card41 + card42 + card43 + card44 + card45 + card46 + card47 + card48 + card49 + card50 + card51
			}],
			["column",[
				["display-text", function() {
					let themestart = '<h6>(tip:??????5???????????????????????????(????????????),????????????:'
					let themelast = ')'
					let theme0 = options.theme=="default" ? "??????" : ""
					let theme1 = options.theme=="aqua" ? "??????" : ""
					let theme2 = options.theme=="TheGameTree" ? "?????????????????????" : ""
					let theme3 = options.theme=="lightblue" ? "??????" : ""
					let theme4 = options.theme=="light" ? "??????" : ""
					return themestart + theme0 + theme1 + theme2 + theme3 + theme4 + themelast
				}],
				["display-text", function() {return 'QQ???:688646311|???????????????,??????,??????|???????????????,??????,??????,??????'}],
				["display-text", function() {return '<hr>??????????????????:'+format(player.point.tob_points,0)+'.?????????????????????:'+format(player.point.last_points,0)+'.'}],
				["display-text", function() {return '?????????'+format(player.data.level,0)+",????????????????????????????????????."}],
				["bar", "dehpbar"],
				["row", [["bar", "dempbar"],["bar", "deatkbar"]]],
				["row", [["bar", "dedebar"],["bar", "deeff3bar"],["bar", "deeff4bar"],["bar", "deeff5bar"],["bar", "deeff6bar"],["bar", "deeff7bar"],["bar", "deeff8bar"],["bar", "deeff9bar"]]],
				["bar", "dedebar"],
				["display-text", function() {
					let monster0 = player.data.monster.eq(0) ? "":""
					let monster1 = player.data.monster.eq(1) ? "?????????:????????????????????????3??????<br>*1.65???":""
					let monster2 = player.data.monster.eq(2) ? "?????????:??????????????????1~2?????????":""
					let monster3 = player.data.monster.eq(3) ? "?????????:?????????30%?????????????????????1?????????????????????<br>*1.3???,*1.15??????":""
					let monster4 = player.data.monster.eq(4) ? "???:????????????2,???????????????????????????<br>*1.45???":""
					let monster5 = player.data.monster.eq(5) ? "?????????:????????????30%????????????????????????2???<br>*1.4???,*1.4??????":""
					let monster6 = player.data.monster.eq(6) ? "?????????:?????????????????????2?????????5??????<br>*0.75???":""
					let monster7 = player.data.monster.eq(7) ? "??????:???????????????????????????????????????????????????????????????2??????<br>*1.25???":""
					return monster0 + monster1 + monster2 + monster3 + monster4 + monster5 + monster6 + monster7
				}],
				["row", [["clickable", 1022]]],
				["blank", '170px'],
				["row", [
					["column",[
						["bar", "hpbar"],
						["row", [["bar", "deadbar1"],["bar", "deadbar2"],["bar", "deadbar3"],["bar", "deadbar4"],["bar", "deadbar5"]]],
						["row", [["bar", "deadbar6"],["bar", "deadbar7"],["bar", "deadbar8"],["bar", "deadbar9"],["bar", "deadbar10"]]],
						["row", [["bar", "mpbar"],["bar", "psbar"]]],
					]],
				["bar", "moneybar"]
				]],
				["row", [
				["bar", "debar"],["bar", "eff0bar"],
				["bar", "eff1bar"],["bar", "eff2bar"],["bar", "eff3bar"],["bar", "eff4bar"],["bar", "eff5bar"],
				["bar", "eff6bar"],["bar", "eff7bar"],["bar", "eff8bar"],["bar", "eff9bar"],["bar", "eff10bar"],
				["bar", "eff11bar"],["bar", "eff12bar"],["bar", "eff13bar"],["bar", "eff14bar"],["bar", "eff15bar"],["bar", "eff16bar"]
				]],
				["row", [["clickable", 1021]]],
				["row", [["clickable", 1],["clickable", 2],["clickable", 3],["clickable", 4],["clickable", 5],["clickable", 6],["clickable", 7],["clickable", 8],["clickable", 9],["clickable", 10],["clickable", 11],["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20]]],
				["blank", '70px'],
				["row", [["clickable", 1001],["clickable", 1002],["clickable", 99]]],
				["row", [["clickable", 1011],["clickable", 1012],["clickable", 1013],["clickable", 1007],["clickable", 1008],["clickable", 1024]]],
			]],
			["display-text", function() {
			let card0 = "<hr>??????:<br>"
			let card1 = tabFormatDeadCard(1,"??????")
			let card2 = tabFormatDeadCard(2,"??????")
			let card3 = tabFormatDeadCard(3,"??????")
			let card4 = tabFormatDeadCard(4,"????????????")
			let card5 = tabFormatDeadCard(5,"??????")
			let card6 = tabFormatDeadCard(6,"????????????")
			let card7 = tabFormatDeadCard(7,"??????")
			let card8 = tabFormatDeadCard(8,"??????")
			let card9 = tabFormatDeadCard(9,"??????")
			let card10 = tabFormatDeadCard(10,"?????????")
			let card11 = tabFormatDeadCard(11,"??????")
			let card12 = tabFormatDeadCard(12,"??????")
			let card13 = tabFormatDeadCard(13,"?????????")
			let card14 = tabFormatDeadCard(14,"????????????")
			let card15 = tabFormatDeadCard(15,"???")
			let card16 = tabFormatDeadCard(16,"????????????")
			let card17 = tabFormatDeadCard(17,"????????????")
			let card18 = tabFormatDeadCard(18,"????????????")
			let card19 = tabFormatDeadCard(19,"??????")
			let card20 = tabFormatDeadCard(20,"????????????")
			let card21 = tabFormatDeadCard(21,"??????")
			let card22 = tabFormatDeadCard(22,"????????????")
			let card23 = tabFormatDeadCard(23,"????????????")
			let card24 = tabFormatDeadCard(24,"????????????")
			let card25 = tabFormatDeadCard(25,"????????????")
			let card26 = tabFormatDeadCard(26,"??????")
			let card27 = tabFormatDeadCard(27,"?????????")
			let card28 = tabFormatDeadCard(28,"??????")
			let card29 = tabFormatDeadCard(29,"????????????")
			let card30 = tabFormatDeadCard(30,"?????????")
			let card31 = tabFormatDeadCard(31,"??????")
			let card32 = tabFormatDeadCard(32,"????????????")
			let card33 = tabFormatDeadCard(33,"??????")
			let card34 = tabFormatDeadCard(34,"??????")
			let card35 = tabFormatDeadCard(35,"????????????")
			let card36 = tabFormatDeadCard(36,"??????")
			let card37 = tabFormatDeadCard(37,"????????????")
			let card38 = tabFormatDeadCard(38,"????????????")
			let card39 = tabFormatDeadCard(39,"????????????")
			let card40 = tabFormatDeadCard(40,"?????????")
			let card41 = tabFormatDeadCard(41,"????????????")
			let card42 = tabFormatDeadCard(42,"??????")
			let card43 = tabFormatDeadCard(43,"????????????")
			let card44 = tabFormatDeadCard(44,"????????????")
			let card45 = tabFormatDeadCard(45,"???????????????")
			let card46 = tabFormatDeadCard(46,"??????")
			let card47 = tabFormatDeadCard(47,"??????")
			let card48 = tabFormatDeadCard(48,"??????")
			let card49 = tabFormatDeadCard(49,"??????")
			let card50 = tabFormatDeadCard(50,"??????")
			let card51 = tabFormatDeadCard(51,"??????")
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18 + card19 + card20 + card21 + card22 + card23 + card24 + card25 + card26 + card27 + card28 + card29 + card30 + card31 + card32 + card33 + card34 + card35 + card36 + card37 + card38 + card39 + card40 + card41 + card42 + card43 + card44 + card45 + card46 + card47 + card48 + card49 + card50 + card51
			}],
		]],
	]
})