function recard(){
	//回合结束
	let overdetohp = player.data.Rare_Artifacts[3].gte(1) ? player.data.de.div(3).floor().mul(player.data.Rare_Artifacts[3]) : 0
	let overmpadd = player.data.Rare_Artifacts[4].gte(1) ? player.data.Rare_Artifacts[4].mul(3) : 0
	attributes(overdetohp,0,0,0,0,0)
	attributes(0,overmpadd,0,0,0,0)
	player.data.wan = false
	player.data.dewan = false

	let eff10c = new Decimal(2).pow(player.data.eff10times.add(1))
	if(player.data.effect[10].gte(eff10c)){
		player.data.effect10effect = true
		player.data.eff10times = player.data.eff10times.add(1)
	}
	
	if(player.data.deeffect[5].lte(0) && player.data.effect10effect == false){
		enemy_action()
	}
	if(player.data.effect[5].lte(0)){
		our_action()
	}
	//护盾
	if(player.data.Super_Rare_Artifacts_Sole[1].gt(0)){
		player.data.de = player.data.de.sub(1)
	}else{
		player.data.de = player.data.de.div(2).floor()
	}
	//id0:智慧
	if(player.data.effect[0].gt(0)){
		geteffect(0,-1)
	}
	//id1:愤怒
	if(player.data.effect[1].gt(0)){
		geteffect(1,-1)
	}
	//id2:恢复
	if(player.data.Ultra_Rare_Artifacts_Sole[0].gt(0)){
		if(player.data.effect[2].lte(player.data.hpmax.mul(0.25))){
			geteffect(2,3)
		}else if(player.data.effect[2].gt(0)){
			geteffect(2,-1)
		}
	}else if(player.data.effect[2].gt(0)){
		player.data.effect[2] = player.data.effect[2].sub(1)
	}
	//id3:中毒
	if(player.data.effect[3].gt(0) && player.data.Super_Rare_Artifacts_Sole[1].gt(0)){
		let subeff = player.data.effect[3].div(2).floor()
		geteffect(3,-subeff)
	}if(player.data.effect[3].gt(0) && player.data.effect[2].gt(0)){
		geteffect(3,-2)
	}else if(player.data.effect[3].gt(0)){
		geteffect(3,-1)
	}
	
	if(player.data.deeffect[3].gt(0) && player.data.deeffect[2].gt(0)){
		getdeeffect(3,-2)
	}else if(player.data.deeffect[3].gt(0)){
		getdeeffect(3,-1)
	}
	//id4:感染
	if(player.data.effect[4].gt(0)){
		geteffect(3,player.data.effect[4])
	}
	
	if(player.data.deeffect[4].gt(0)){
		getdeeffect(3,player.data.deeffect[4])
	}
	//id5:眩晕
	if(player.data.effect[5].gt(0)){
		geteffect(5,-1)
	}
	
	if(player.data.deeffect[5].gt(0)){
		getdeeffect(5,-1)
	}
	//id6:魔力枯竭
	if(player.data.effect[6].gt(0)){
		geteffect(6,-1)
	}
	
	if(player.data.deeffect[6].gt(0)){
		getdeeffect(6,-1)
	}
	//id7:卍
	if(player.data.effect[7].gt(0) && player.data.wan == false){
		geteffect(8,player.data.effect[7])
		player.data.effect[7] = new Decimal(0)
		player.data.wan = true
	}
	
	if(player.data.deeffect[7].gt(0) && player.data.dewan == false){
		getdeeffect(8,player.data.deeffect[7])
		player.data.deeffect[7] = new Decimal(0)
		player.data.dewan = true
	}
	//id8:卐
	if(player.data.effect[8].gt(0) && player.data.wan == false){
		geteffect(7,player.data.effect[8])
		player.data.effect[8] = new Decimal(0)
		player.data.wan = true
	}
	
	if(player.data.deeffect[8].gt(0) && player.data.dewan == false){
		getdeeffect(7,player.data.deeffect[8])
		player.data.deeffect[8] = new Decimal(0)
		player.data.dewan = true
	}
	//id9:焕
	//id10:布朗魔术
	player.data.effect10effect = false
	//id11:混乱
	if(player.data.effect[11].gt(0)){
		getdeeffect(11,-1)
	}
	//id12:魔力恢复
	if(player.data.effect[12].gt(0)){
		attributes(0,player.data.effect[12],0,0,0,0)
	}
	//id13:减伤
	//id14:凝血
	//id15:易伤
}