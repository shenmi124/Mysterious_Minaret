function retit(id1,id2){
	let special0 =  player.data.dehp.gt(0) ? player.data.removals.gt(0) ? `<red id="red">移除</red>` : "" : ""
	let special1 = player.data.dehp.gt(0) ? player.data['display'+id2+'copy']==false ? "" : "<small><small>复制" : ""
	if(player.data.effect[11].lte(0)){
		if(player.data[id1+id2].eq(1)){return special0+"攻击"+special1}
		if(player.data[id1+id2].eq(2)){return special0+"防御"+special1}
		if(player.data[id1+id2].eq(3)){return special0+"治疗"+special1}
		if(player.data[id1+id2].eq(4)){return special0+"魔力飞弹"+special1}
		if(player.data[id1+id2].eq(5)){return special0+"冥想"+special1}
		if(player.data[id1+id2].eq(6)){return special0+"魔力再生"+special1}
		if(player.data[id1+id2].eq(7)){return special0+"连斩"+special1}
		if(player.data[id1+id2].eq(8)){return special0+"愤怒"+special1}
		if(player.data[id1+id2].eq(9)){return special0+"传染"+special1}
		if(player.data[id1+id2].eq(10)){return special0+"病原体"+special1}
		if(player.data[id1+id2].eq(11)){return special0+"思考"+special1}
		if(player.data[id1+id2].eq(12)){return special0+"重击"+special1}
		if(player.data[id1+id2].eq(13)){return special0+"回旋镖"+special1}
		if(player.data[id1+id2].eq(14)){return special0+"无中生有"+special1}
		if(player.data[id1+id2].eq(15)){return special0+"烨"+special1}
		if(player.data[id1+id2].eq(16)){return special0+"灵能冲击"+special1}
		if(player.data[id1+id2].eq(17)){return special0+"破魂打击"+special1}
		if(player.data[id1+id2].eq(18)){return special0+"魔能调换"+special1}
		if(player.data[id1+id2].eq(19)){return special0+"阻梦"+special1}
		if(player.data[id1+id2].eq(20)){return special0+"毒素扩散"+special1}
		if(player.data[id1+id2].eq(21)){return special0+"血清"+special1}
		if(player.data[id1+id2].eq(22)){return special0+"隐秘扩散"+special1}
		if(player.data[id1+id2].eq(23)){return special0+"病毒爆发"+special1}
		if(player.data[id1+id2].eq(24)){return special0+"墓地增生"+special1}
		if(player.data[id1+id2].eq(25)){return special0+"肉体再生"+special1}
		if(player.data[id1+id2].eq(26)){return special0+"重构"+special1}
		if(player.data[id1+id2].eq(27)){return special0+"嗜血斩"+special1}
		if(player.data[id1+id2].eq(28)){return special0+"自信"+special1}
		if(player.data[id1+id2].eq(29)){return special0+"魔力源泉"+special1}
		if(player.data[id1+id2].eq(30)){return special0+"治疗术"+special1}
		if(player.data[id1+id2].eq(31)){return special0+"绷带"+special1}
		if(player.data[id1+id2].eq(32)){return special0+"卡牌魔法"+special1}
		if(player.data[id1+id2].eq(33)){return special0+"献祭"+special1}
		if(player.data[id1+id2].eq(34)){return special0+"天平"+special1}
		if(player.data[id1+id2].eq(35)){return special0+"墓地衍生"+special1}
		if(player.data[id1+id2].eq(36)){return special0+"滴血"+special1}
		if(player.data[id1+id2].eq(37)){return special0+"破财消灾"+special1}
		if(player.data[id1+id2].eq(38)){return special0+"灵魂吸取"+special1}
		if(player.data[id1+id2].eq(39)){return special0+"魔法结晶"+special1}
		if(player.data[id1+id2].eq(40)){return special0+"提取器"+special1}
		if(player.data[id1+id2].eq(41)){return special0+"应急干粮"+special1}
		if(player.data[id1+id2].eq(42)){return special0+"老千"+special1}
		if(player.data[id1+id2].eq(43)){return special0+"破釜沉舟"+special1}
		if(player.data[id1+id2].eq(44)){return special0+"能量护盾"+special1}
		if(player.data[id1+id2].eq(45)){return special0+"不定性病毒"+special1}
		if(player.data[id1+id2].eq(46)){return special0+"格挡"+special1}
		if(player.data[id1+id2].eq(47)){return special0+"急救"+special1}
		if(player.data[id1+id2].eq(48)){return special0+"背刺"+special1}
		if(player.data[id1+id2].eq(49)){return special0+"蔓延"+special1}
		if(player.data[id1+id2].eq(50)){return special0+"聚集"+special1}
		if(player.data[id1+id2].eq(51)){return special0+"再生"+special1}
	}else{
		return `???`
	}
}

function redis(id1,id2){
	if(player.data.effect[11].lte(0)){
		if(player.data[id1+id2].eq(1)){return `对敌方造成 <red id="red">13 物理伤害</red><br>消耗:1 体力`}
		if(player.data[id1+id2].eq(2)){return `增加 15 护甲<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(3)){return `恢复 13 血,获得 3 恢复<br>消耗:2 体力`}
		if(player.data[id1+id2].eq(4)){return `对敌方造成 <blue id="blue">15 魔法伤害</blue><br>消耗:5 魔力`}
		if(player.data[id1+id2].eq(5)){return `先获得 2 智慧,再增加 1 体力, 2 魔力<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(6)){return `恢复 7 魔力<br>消耗:无`}
		if(player.data[id1+id2].eq(7)){return `对敌方造成 <red id="red">4 物理伤害</red>5次<br>消耗:2 体力`}
		if(player.data[id1+id2].eq(8)){return `获得 3 力量<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(9)){return `给敌方 6 中毒<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(10)){return `给敌方 3 感染,我方 2 感染<br>消耗:2 体力`}
		if(player.data[id1+id2].eq(11)){return `抽一张牌,恢复 1 体力,如果有智慧效果则再触发一次<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(12)){return `对敌方造成 <red id="red">28 物理伤害</red>并附带 1 眩晕<br>移除<br>消耗:3 体力`}
		if(player.data[id1+id2].eq(13)){return `对敌方造成 <red id="red">10 物理伤害</red>并获得 1 回旋镖<br>销毁<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(14)){return `恢复 1 体力,1 魔力和 1 血,造成 1 <red id="red">物理伤害</red>和 <blue id="blue">1 魔法伤害</blue>,给敌方恢复 2 血,自己减少 1 血<br>消耗:1 体力,1 魔力`}
		if(player.data[id1+id2].eq(15)){return `造成 <blue id="blue">x 魔法伤害</blue>,获得 4 魔力枯竭.给敌方 2 焱<br>销毁<br>消耗:x 魔力`}
		if(player.data[id1+id2].eq(16)){return `造成 <blue id="blue">36 魔法伤害</blue>,敌方获得 2 魔力枯竭<br>消耗:17 魔力`}
		if(player.data[id1+id2].eq(17)){return `造成 <blue id="blue">3x+8 魔法伤害</blue>,获得 2 魔力枯竭<br>消耗:x 魔力`}
		if(player.data[id1+id2].eq(18)){return `恢复 1 体力<br>消耗:10 魔力`}
		if(player.data[id1+id2].eq(19)){return `每有一张阻梦在手上就少抽一种牌<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(20)){return `使敌人中毒层数翻倍,抽1张牌<br>消耗:3 体力`}
		if(player.data[id1+id2].eq(21)){return `为敌人添加3层中毒,然后恢复等同于敌人中毒层数的生命值<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(22)){return `为敌人添加5层中毒,如果敌人中毒层数＞15则抽2张牌<br>消耗:2 体力`}
		if(player.data[id1+id2].eq(23)){return `清除敌人所有中毒层数,每清除1层造成<red id="red"> 4 物理伤害</red><br>消耗:1 体力`}
		if(player.data[id1+id2].eq(24)){return `先将一张当前墓地里最多的牌的复制至手上<br>移除<br>消耗:6 魔力`}
		if(player.data[id1+id2].eq(25)){return `恢复自己损失血量/3的生命<br>消耗:11 魔力`}
		if(player.data[id1+id2].eq(26)){return `将手牌移回牌库并重新抽取等量的手牌且每移回一张牌+3护甲<br>消耗:15 魔力`}
		if(player.data[id1+id2].eq(27)){return `造成<red id="red">min((自己损失血量*敌方损失血量)/150的物理伤害,200)</red><br>现在能造成 <red id="red">`+format(Decimal.min(player.data.hpmax.sub(player.data.hp).mul(player.data.dehpmax.sub(player.data.dehp)).div(150),200).floor(),0)+` 物理伤害</red><br>消耗:3 体力`}
		if(player.data[id1+id2].eq(28)){return `造成<red id="red">8*持有手牌的物理伤害</red><br>消耗:1体力`}
		if(player.data[id1+id2].eq(29)){return `获得2魔力恢复效果<br>消耗:无`}
		if(player.data[id1+id2].eq(30)){return `恢复20血,获得 5 恢复<br>消耗:13 魔力`}
		if(player.data[id1+id2].eq(31)){return `恢复4血并获得5恢复,5护甲<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(32)){return `将手上所有的牌移到墓地并获得等量的布朗魔术<br>消耗:1体力,5 魔力`}
		if(player.data[id1+id2].eq(33)){return `随机获得以下效果中的其中二个①获得7力量②获得7减伤③获得7体力<br>消耗:42 血`}
		if(player.data[id1+id2].eq(34)){return `按降低的比例重新分配血,魔力,体力<br>移除<br>现在的比例为`+format((player.data.hp/player.data.hpmax+player.data.mp/player.data.mpmax+player.data.ps/player.data.psmax)/3.3,2)+`<br>消耗:无`}
		if(player.data[id1+id2].eq(35)){return `使墓地中的牌*2<br>消耗:1 体力,8 魔力`}
		if(player.data[id1+id2].eq(36)){return `移除任意最多3张牌<br>消耗:7 血`}
		if(player.data[id1+id2].eq(37)){return `造成 <red id="red">15%拥有的$的物理伤害</red><br>消耗:20% $`}
		if(player.data[id1+id2].eq(38)){return `造成 <blue id="blue">10 魔法伤害</blue>,并永久吸取同等血量上限,<br>消耗:15 魔力`}
		if(player.data[id1+id2].eq(39)){return `恢复15法力<br>移除<br>消耗:无`}
		if(player.data[id1+id2].eq(40)){return `使用后开始记录,之后本回合你受到/造成的伤害都会增加到效果凝血,回合结束取消记录<br>移除<br>消耗:5 血`}
		if(player.data[id1+id2].eq(41)){return `恢复5血和1体力<br>移除<br>消耗:无`}
		if(player.data[id1+id2].eq(42)){return `50%获得抽取3张卡,50%减去15血<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(43)){return `血量低于5%时可以使用,造成300伤害,永久移除这张卡<br>消耗:无`}
		if(player.data[id1+id2].eq(44)){return `获得20护甲<br>消耗:8 魔力`}
		if(player.data[id1+id2].eq(45)){return `50%给敌方+5感染,50%给我方+3感染<br>消耗:无`}
		if(player.data[id1+id2].eq(46)){return `获得24防御,2易伤<br>消耗:1 体力`}
		if(player.data[id1+id2].eq(47)){return `恢复50血<br>永久移除这张卡<br>消耗:2 体力`}
		if(player.data[id1+id2].eq(48)){return `75%造成 <red id="red">36 物理伤害</red>,25%造成 <red id="red">4 物理伤害</red><br>消耗:2 体力`}
		if(player.data[id1+id2].eq(49)){return `在手牌中添加一张蔓延,此卡不会使用后进入墓地<br>消耗:无`}
		if(player.data[id1+id2].eq(50)){return `恢复[(当前血*当前魔力*当前体力)/500]%的血,魔力,体力<br>当前恢复量`+format(player.data.hp.mul(player.data.mp).mul(player.data.ps).div(500).floor(),0)+`<br>消耗:1 体力,3 魔力,10 血`}
		if(player.data[id1+id2].eq(51)){return `恢复层数*2,恢复恢复层数的血量<br>消耗:10 魔力`}
	}else{
		return `???`
	}
}

function recan(id){
	if(player.data.removals.gt(0)){
		return true
	}else if(player.data.effect[5].lte(0)){
		if(player.data['display'+id].eq(1)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(2)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(3)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(4)){return card_consumption(0,5,0)}
		if(player.data['display'+id].eq(5)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(6)){return true}
		if(player.data['display'+id].eq(7)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(8)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(9)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(10)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(11)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(12)){return card_consumption(3,0,0)}
		if(player.data['display'+id].eq(13)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(14)){return card_consumption(1,1,0)}
		if(player.data['display'+id].eq(15)){return card_consumption(0,1,0)}
		if(player.data['display'+id].eq(16)){return card_consumption(0,17,0)}
		if(player.data['display'+id].eq(17)){return card_consumption(0,1,0)}
		if(player.data['display'+id].eq(18)){return card_consumption(0,10,0)}
		if(player.data['display'+id].eq(19)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(20)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(21)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(22)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(23)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(24)){return card_consumption(0,6,0)}
		if(player.data['display'+id].eq(25)){return card_consumption(0,11,0)}
		if(player.data['display'+id].eq(26)){return card_consumption(0,15,0)}
		if(player.data['display'+id].eq(27)){return card_consumption(3,0,0)}
		if(player.data['display'+id].eq(28)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(29)){return true}
		if(player.data['display'+id].eq(30)){return card_consumption(0,13,0)}
		if(player.data['display'+id].eq(31)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(32)){return card_consumption(1,5,0)}
		if(player.data['display'+id].eq(33)){return card_consumption(0,0,42)}
		if(player.data['display'+id].eq(34)){return true}
		if(player.data['display'+id].eq(35)){return card_consumption(1,8,0)}
		if(player.data['display'+id].eq(36)){return card_consumption(1,0,7)}
		if(player.data['display'+id].eq(37)){return true}
		if(player.data['display'+id].eq(38)){return card_consumption(0,10,0)}
		if(player.data['display'+id].eq(39)){return true}
		if(player.data['display'+id].eq(40)){return card_consumption(0,0,5)}
		if(player.data['display'+id].eq(41)){return true}
		if(player.data['display'+id].eq(42)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(43)){return player.data.hpmax.mul(0.05).gte(player.data.hp)}
		if(player.data['display'+id].eq(44)){return card_consumption(0,8,0)}
		if(player.data['display'+id].eq(45)){return true}
		if(player.data['display'+id].eq(46)){return card_consumption(1,0,0)}
		if(player.data['display'+id].eq(47)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(48)){return card_consumption(2,0,0)}
		if(player.data['display'+id].eq(49)){return true}
		if(player.data['display'+id].eq(50)){return card_consumption(1,3,10)}
		if(player.data['display'+id].eq(51)){return card_consumption(0,10,0)}
	}else{
		return false 
	}
}

function reonc(id){
	if(player.data.removals.lte(0)){
		if(player.data['display'+id].eq(1)){
			//攻击
			attributes(0,0,-1,13,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,1,true,true)
			return
		}
		if(player.data['display'+id].eq(2)){
			//防御
			attributes(0,0,-1,0,0,15,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,2,true,true)
			return
		}
		if(player.data['display'+id].eq(3)){
			//治疗
			attributes(13,0,-2,0,0,0,"card")
			player.data.effect[2] = player.data.effect[2].add(3)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,3,true,true)
			return
		}
		if(player.data['display'+id].eq(4)){
			//魔力飞弹
			attributes(0,-5,0,0,15,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,4,true,true)
			return
		}
		if(player.data['display'+id].eq(5)){
			//冥想
			player.data.effect[0] = player.data.effect[0].add(2)
			attributes(0,2,-1,0,0,0,"card")
			player.data.ps = player.data.ps.add(1)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,5,true,true)
			return
		}
		if(player.data['display'+id].eq(6)){
			//魔力再生
			attributes(0,7,0,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,6,true,true)
			return
		}
		if(player.data['display'+id].eq(7)){
			//连斩
			attributes(0,0,-2,4,0,0,"card")
			attributes(0,0,0,4,0,0)
			attributes(0,0,0,4,0,0)
			attributes(0,0,0,4,0,0)
			attributes(0,0,0,4,0,0)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,7,true,true)
			return
		}
		if(player.data['display'+id].eq(8)){
			//愤怒
			player.data.effect[1] = player.data.effect[1].add(3)
			attributes(0,0,-1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,8,true,true)
			return
		}
		if(player.data['display'+id].eq(9)){
			//传染
			getdeeffect(3,6)
			attributes(0,0,-1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,9,true,true)
			return
		}
		if(player.data['display'+id].eq(10)){
			//病原体
			getdeeffect(4,3)
			geteffect(4,2)
			attributes(0,0,-2,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,10,true,true)
			return
		}
		if(player.data['display'+id].eq(11)){
			//思考
			attributes(0,0,-1,0,0,0,"card")
			getcard("display",1)
			attributes(0,0,1,0,0,0)
			if(player.data.effect[0].gt(0)){
				getcard("display",1)
				attributes(0,0,1,0,0,0)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,11,true,true)
			return
		}
		if(player.data['display'+id].eq(12)){
			//重击
			player.data.deeffect[5] = player.data.deeffect[5].add(1)
			attributes(0,0,-3,28,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,12,false,true)
			return
		}
		if(player.data['display'+id].eq(13)){
			//回旋镖
			attributes(0,0,-1,10,0,0,"card")
			return
		}
		if(player.data['display'+id].eq(14)){
			//无中生有
			attributes(-1,-1,-1,0,0,0,"card")
			attributes(1,1,1,1,1,0)
			player.data.dehp = player.data.dehp.add(2)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,14,true,true)
			return
		}
		if(player.data['display'+id].eq(15)){
			//烨
			player.data.deeffect[7] = player.data.deeffect[7].add(2)
			player.data.effect[6] = player.data.effect[6].add(4)
			let a = player.data.mp
			attributes(0,-a,0,0,a,0,"card")
			card_usage(id,15,true,true)
			return
		}
		if(player.data['display'+id].eq(16)){
			//灵能冲击
			player.data.deeffect[6] = player.data.deeffect[6].add(2)
			attributes(0,-17,0,0,36,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,16,true,true)
			return
		}
		if(player.data['display'+id].eq(17)){
			//破魂打击
			player.data.effect[6] = player.data.effect[6].add(2)
			let a = player.data.mp
			let b = player.data.mp.mul(3).add(8)
			attributes(0,-a,0,0,b,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,17,true,true)
			return
		}
		if(player.data['display'+id].eq(18)){
			//魔能调换
			attributes(0,-10,1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,18,true,true)
			return
		}
		if(player.data['display'+id].eq(19)){
			//阻梦
			attributes(0,0,-1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,19,true,true)
			return
		}
		if(player.data['display'+id].eq(20)){
			//毒素扩散
			attributes(0,0,-3,0,0,0,"card")
			player.data.deeffect[3] = player.data.deeffect[3].mul(2)
			getcard("display",1)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,20,true,true)
			return
		}
		if(player.data['display'+id].eq(21)){
			//血清
			attributes(0,0,-1,0,0,0,"card")
			getdeeffect(3,3)
			player.data.hp = player.data.hp.add(player.data.deeffect[3])
			player.data['display'+id] = new Decimal(0)
			card_usage(id,21,true,true)
			return
		}
		if(player.data['display'+id].eq(22)){
			//隐秘扩散
			attributes(0,0,-2,0,0,0,"card")
			getdeeffect(3,5)
			if(player.data.deeffect[3].gte(15)){
				getcard("display",2)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,22,true,true)
			return
		}
		if(player.data['display'+id].eq(23)){
			//病毒爆发
			attributes(0,0,-1,player.data.deeffect[3].mul(4),0,0,"card")
			player.data.deeffect[3] = new Decimal(0)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,23,true,true)
			return
		}
		if(player.data['display'+id].eq(24)){
			//墓地增生
			attributes(0,-6,0,0,0,0,"card")
			let base = 1
			let dead = [0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,0,0,0,0,
			0,]
			let dead2 = [false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,false,false,false,false,
			false,
			]
			let randomdec = 0
			let cao = 1
			let cancol6 = true
			for(id24col=0;id24col<=player.data.allcard;id24col++){
				dead[id24col] = player.data.carddead[id24col]
			}
			for(id24col2=0;id24col2<=player.data.allcard;id24col2++){
				if(dead[id24col2]>base){
					base = dead[id24col2]
				}
			}
			for(id24col3=0;id24col3<=player.data.allcard;id24col3++){
				if(dead[id24col3]==base){
					dead2[id24col3] = true
					randomdec += 1
				}
			}
			let randomcard = Math.floor(Math.random() * randomdec)
			for(id24col5=0;id24col5<=player.data.allcard;id24col5++){
				if(randomcard>=1 && dead2[id24col5]==true && cancol6==true){
					randomcard -= 1
				}else if(dead2[id24col5]==true && cancol6==true){
					for(id24col6=1;id24col6<=cao;id24col6++){
						if(player.data.holdcard.lte(player.data.maxcard.sub(1))){
							if(player.data['display'+id24col6].eq(0)){
								player.data['display'+id24col6] = new Decimal(id24col5)
								player.data['display'+id24col6+'copy'] = true
								player.data.holdcard = player.data.holdcard.add(1)
								cancol6 = false
							}else{
								cao++
							}
						}
					}
				}else{
					
				}
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,24,false,true)
			return
		}
		if(player.data['display'+id].eq(25)){
			//肉体再生
			attributes(player.data.hpmax.sub(player.data.hp).div(3).floor(),-11,0,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,25,true,true)
			return
		}
		if(player.data['display'+id].eq(26)){
			//重构
			attributes(0,-15,0,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,26,true,true)
			for(card26col=1;card26col<=20;card26col++){
				if(player.data['display'+card26col].eq(0)){
				}else{
					player.data.card[player.data['display'+card26col]] = player.data.card[player.data['display'+card26col]].add(1)
					player.data['display'+card26col] = new Decimal(0)
					attributes(0,0,0,0,0,3)
					player.data.holdcard = player.data.holdcard.sub(1)
					getcard("display",1)
				}
				player.data['display'+card26col+'copy'] = false
			}
			return
		}
		if(player.data['display'+id].eq(27)){
			//嗜血斩
			attributes(0,0,-3,Decimal.min(player.data.hpmax.sub(player.data.hp).mul(player.data.dehpmax.sub(player.data.dehp)).div(150),200).floor(),0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,27,true,true)
			return
		}
		if(player.data['display'+id].eq(28)){
			//自信
			let cardatk = 0
			for(col=1;col<=20;col++){
				if(player.data['display'+col].eq(0)){
				}else{
					cardatk += 8
				}
			}
			attributes(0,0,-1,cardatk,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,28,true,true)
			return
		}
		if(player.data['display'+id].eq(29)){
			//魔力源泉
			attributes(0,0,0,0,0,0,"card")
			geteffect(12,2)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,29,false,true)
			return
		}
		if(player.data['display'+id].eq(30)){
			//治疗术
			attributes(20,-13,0,0,0,0,"card")
			geteffect(2,5)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,30,true,true)
			return
		}
		if(player.data['display'+id].eq(31)){
			//绷带
			attributes(4,0,-1,0,0,5,"card")
			player.data.effect[2] = player.data.effect[2].add(5)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,31,true,true)
			return
		}
		if(player.data['display'+id].eq(32)){
			//卡牌魔法
			attributes(0,0,-1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,32,true,true)
			for(col=1;col<=20;col++){
				if(player.data['display'+col].eq(0)){
				}else{
					player.data.carddead[player.data['display'+col]] = player.data.carddead[player.data['display'+col]].add(1)
					player.data['display'+col] = new Decimal(0)
					player.data.effect[10] = player.data.effect[10].add(1)
				}
			}
			player.data.holdcard = new Decimal(0)
			return
		}
		if(player.data['display'+id].eq(33)){
			//献祭
			attributes(-42,0,0,0,0,0,"card")
			let eff1 = Math.floor((Math.random() * 3))+1
			let eff2 = Math.floor((Math.random() * 3))+1
			for(col=0;col<=0;col++){
				if(eff2==eff1){
					col--
					eff2 = Math.floor((Math.random() * 3))+1
				}
			}
			if(eff1==1){
				geteffect(1,7)
			}else if(eff1==2){
				geteffect(13,7)
			}else if(eff1==3){
				attributes(0,0,7,0,0,0)
			}
			if(eff2==1){
				geteffect(1,7)
			}else if(eff2==2){
				geteffect(13,7)
			}else if(eff2==3){
				attributes(0,0,7,0,0,0)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,33,true,true)
			return
		}
		if(player.data['display'+id].eq(34)){
			//天平
			let first = (player.data.hp/player.data.hpmax+player.data.mp/player.data.mpmax+player.data.ps/player.data.psmax)/3.3
			let gethp = first*player.data.hpmax
			let getmp = first*player.data.mpmax
			let getps = first*player.data.psmax
			player.data.hp = new Decimal(gethp).round()
			player.data.mp = new Decimal(getmp).round()
			player.data.ps = new Decimal(getps).round()
			player.data['display'+id] = new Decimal(0)
			card_usage(id,34,false,true)
			return
		}
		if(player.data['display'+id].eq(35)){
			//墓地衍生
			attributes(0,-8,-1,0,0,0,"card")
			for(col=1;col<=player.data.allcard;col++){
				player.data.carddead[col] = player.data.carddead[col].mul(2)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,35,true,true)
			return
		}
		if(player.data['display'+id].eq(36)){
			//滴血
			attributes(-7,0,0,0,0,0,"card")
			player.data.removals = player.data.removals.add(3)
			player.data.remove_removals = true
			player.data['display'+id] = new Decimal(0)
			card_usage(id,36,true,true)
			return
		}
		if(player.data['display'+id].eq(37)){
			//破财消灾
			attributes(0,0,0,player.data.money.mul(0.15).floor(),0,0)
			player.data.money = player.data.money.mul(0.8).floor()
			player.data['display'+id] = new Decimal(0)
			card_usage(id,37,true,true)
			return
		}
		if(player.data['display'+id].eq(38)){
			//灵魂吸取
			attributes(0,-10,0,0,10,0,"card")
			player.data.card38hpmax = player.data.card38hpmax.add(10)
			player.data.hpmax = player.data.hpmax.add(10)
			attributes(10,0,0,0,0,0)
			player.data.dehpmax = player.data.dehpmax.sub(10)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,38,true,true)
			return
		}
		if(player.data['display'+id].eq(39)){
			//魔法结晶
			attributes(0,15,0,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,15,false,true)
			return
		}
		if(player.data['display'+id].eq(40)){
			//提取器
			attributes(-5,0,0,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			player.data.card40eff14 = true
			card_usage(id,40,false,true)
			return
		}
		if(player.data['display'+id].eq(41)){
			//应急干粮
			attributes(5,0,1,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,41,false,true)
			return
		}
		if(player.data['display'+id].eq(42)){
			//老千
			attributes(0,0,-1,0,0,0,"card")
			let randomcar = Math.floor((Math.random() * 100))+1
			if(randomcar<=50){
				getcard("display",3)
			}else{
				player.data.hp = player.data.hp.sub(15)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,42,true,true)
			return
		}
		if(player.data['display'+id].eq(43)){
			//破釜沉舟
			attributes(0,0,0,300,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,43,false,true)
			player.data.cardmax[43] = player.data.cardmax[43].sub(1)
			return
		}
		if(player.data['display'+id].eq(44)){
			//能量护盾
			attributes(0,-8,0,0,0,20,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,44,true,true)
			return
		}
		if(player.data['display'+id].eq(45)){
			//不定性病毒
			attributes(0,0,0,0,0,0,"card")
			let randomeff = Math.floor((Math.random() * 100))+1
			if(randomeff<=50){
				player.data.effect[4] = player.data.effect[4].add(3)
			}else{
				player.data.deeffect[4] = player.data.deeffect[4].add(5)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,45,true,true)
			return
		}
		if(player.data['display'+id].eq(46)){
			//格挡
			attributes(0,0,-1,0,0,24,"card")
			geteffect(15,2)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,46,true,true)
			return
		}
		if(player.data['display'+id].eq(47)){
			//急救
			attributes(50,0,-2,0,0,0,"card")
			player.data['display'+id] = new Decimal(0)
			card_usage(id,46,false,true)
			player.data.cardmax[47] = player.data.cardmax[47].sub(1)
			return
		}
		if(player.data['display'+id].eq(48)){
			//背刺
			attributes(0,0,-2,0,0,0,"card")
			let randomatk = new Decimal(Math.floor((Math.random() * 100)))+1
			if(randomatk<=25){
				attributes(0,0,0,4,0,0)
			}else{
				attributes(0,0,0,36,0,0)
			}
			player.data['display'+id] = new Decimal(0)
			card_usage(id,48,true,true)
			return
		}
		if(player.data['display'+id].eq(49)){
			//蔓延
			attributes(0,0,0,0,0,0,"card")
			let cao = 1
			for(col=1;col<=cao;col++){
				if(player.data.holdcard.lte(player.data.maxcard.sub(1))){
					if(player.data['display'+col].eq(0)){
						player.data['display'+col] = new Decimal(49)
						player.data.holdcard = player.data.holdcard.add(1)
					}else{
						cao++
					}
				}
			}
			return
		}
		if(player.data['display'+id].eq(50)){
			//聚集
			let added = player.data.hp.mul(player.data.mp).mul(player.data.ps).div(500).floor()
			attributes(added,added,added,0,0,0)
			attributes(-10,-3,-1,0,0,0)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,50,true,true)
			return
		}
		if(player.data['display'+id].eq(51)){
			//再生
			attributes(0,-10,0,0,0,0,"card")
			player.data.effect[2] = player.data.effect[2].mul(2)
			attributes(player.data.effect[2],0,0,0,0,0)
			player.data['display'+id] = new Decimal(0)
			card_usage(id,51,true,true)
			return
		}
	}else{
		player.data.removals = player.data.removals.sub(1)
		player.data['display'+id] = new Decimal(0)
	}
}
