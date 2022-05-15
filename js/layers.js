function effectdisplay(id){
	if(id == 0){return "智慧:每一层使获得魔力时多获得1,每回合减少一层<br><br>"}
	if(id == 1){return "力量:每一层使物理伤害+1,每回合减少一层<br><br>"}
	if(id == 2){return "恢复:回合结束时恢复层级血量,每回合减少一层<br><br>"}
	if(id == 3){return "中毒:回合结束减少层级血量,无视护甲,每回合减少一层,如果有恢复格外减少一层<br><br>"}
	if(id == 4){return "感染:中毒每回合加一层<br><br>"+effectdisplay(3)}
	if(id == 5){return "眩晕:此回合无法攻击,抽排,每回合减少一层<br><br>"}
	if(id == 6){return "魔力枯竭:此回合无法获得魔力,每回合减少一层<br><br>"}
	if(id == 7){return "焱:敌方每次被攻击时给予敌方 1 焕,回合结束将所有效果 卍 变为 效果 卐<br><br>"+"卐:敌方每次被攻击时若有焕则移除 1 焕并格外造成 3 物理伤害,回合结束将所有效果 卐 变为 效果 卍<br><br>"+effectdisplay(9)}
	if(id == 8){return "炎:敌方每次被攻击时若有焕则移除 1 焕并格外造成 3 对应属性伤害,回合结束将所有效果 卐 变为 效果 卍<br><br>"+"卍:敌方每次被攻击时给予敌方 1 焕,回合结束将所有效果 卍 变为 效果 卐<br><br>"+effectdisplay(9)}
	if(id == 9){return "焕:和效果 卐 搭配使用<br><br>"}
	if(id == 10){return"布朗魔术:达到2时格外行动一回合,之后触发条件*2<br><br>"}
	if(id == 11){return"混乱:看不见血,体力,魔力,卡牌名字,卡牌效果,卡牌消耗<br><br>"}
	if(id == 12){return"魔力再生:回话结束恢复层级魔力<br><br>"}
	if(id == 13){return"减伤:减少对应层级伤害,每次受到伤害减少一层<br><br>"}
	if(id == 14){return"凝血:当消耗卡牌血量时优先消耗凝血<br><br>"}
	if(id == 15){return"易伤:受到伤害时格外受到伤害,每次受到伤害减少一层<br><br>"}
}

function monsterdisplay(id){
	if(id==0){return "感染者:每回合给敌方附加1感染<br>*1.65血<br><br>"+effectdisplay(4)}
	if(id==1){return "蛊梦师:每回合给敌方一张阻梦<br><br>"+card2display(0)}
	if(id==2){return "野蛮人:攻击有25%的概率造成晕眩2<br>*1.3血,*1.15攻击<br><br>"+effectdisplay(5)}
	if(id==3){return "截:初始攻击2，每攻击一次攻击翻倍<br>*1.45血<br><br>"}
	if(id==4){return "狂战士:血量低于30%每回合格外攻击1次<br>*1.4血,*1.4攻击<br><br>"}
	if(id==5){return "混乱者:每回合给予对方2混乱与3中毒<br>*0.75血<br><br>"+effectdisplay(11)+effectdisplay(3)}
}

function carddisplay(id){
	if(id==0){return "攻击:<br>对敌方造成 13 物理伤害<br>消耗:1 体力<br><br>"}
	if(id==1){return "防御:<br>增加 15 护甲<br>消耗:1 体力<br><br>"}
	if(id==2){return "治疗:<br>恢复 13 血,获得 3 恢复<br>消耗:2 体力<br><br>"+effectdisplay(2)}
	if(id==3){return "魔法飞弹:<br>对敌方造成 15 魔法伤害<br>消耗:5 魔力<br><br>"}
	if(id==4){return "冥想:<br>先获得 2 智慧,再增加 1 体力, 2 魔力<br>消耗:1 体力<br><br>"+effectdisplay(0)}
	if(id==5){return "魔力再生:<br>恢复 7 魔力<br>消耗:无<br><br>"}
	if(id == 6){return "连斩:对敌方造成 4 物理伤害5次<br>消耗:2 体力<br><br>"}
	if(id == 7){return "愤怒:获得 3 力量<br>消耗:1 体力<br><br>"+effectdisplay(1)}
	if(id == 8){return "传染:给敌方 6 中毒<br>消耗:1 体力<br><br>"+effectdisplay(3)}
	if(id == 9){return "病原体:给敌方 4 感染,我方 2 感染<br>消耗:2 体力<br><br>"+effectdisplay(4)}
	if(id == 10){return "思考:抽一张牌,恢复 1 体力,如果有智慧效果则再触发一次<br>消耗:1 体力<br><br>"+effectdisplay(0)}
	if(id == 11){return "重击:对敌方造成 18 物理伤害并附带 1 眩晕<br>消耗:3 体力<br><br>"+effectdisplay(5)}
	if(id == 12){return "回旋镖:对敌方造成 10 物理伤害并获得 1 回旋镖<br>销毁<br>消耗:1 体力<br><br>"}
	if(id == 13){return "无中生有:恢复 1 体力和 1 魔力,造成 1 物理伤害和 1 魔法伤害,给敌方恢复 2 血<br>消耗:1 体力,1 魔力<br><br>"}
	if(id == 14){return "烨:造成 x 魔法伤害,获得 5 魔力枯竭.给敌方 1 卍<br>销毁<br>消耗:x 魔力<br><br>"+effectdisplay(6)+effectdisplay(7)}
	if(id == 15){return "灵能冲击:造成 36 魔法伤害,敌方获得 2 魔力枯竭<br>消耗:17 魔力<br><br>"+effectdisplay(6)}
	if(id == 16){return "破魂打击:造成 3x+8 魔法伤害,获得 2 魔力枯竭<br>消耗:x 魔力<br><br>"+effectdisplay(6)}
	if(id == 17){return "魔能调换:恢复 1 体力<br>消耗:10 魔力<br><br>"}
	if(id == 18){return "阻梦:每有一张阻梦在手上就少抽一种牌<br>消耗:1 体力<br><br>"}
	if(id == 19){return "毒素扩散:使敌人中毒层数翻倍,抽1张牌<br>消耗:1 体力<br><br>"+effectdisplay(3)}
	if(id == 20){return "血清:为敌人添加3层中毒,然后恢复等同于敌人中毒层数的生命值<br>消耗:1 体力"+effectdisplay(3)}
	if(id == 21){return "隐秘扩散:使敌人获得等同于中毒层数的中毒,如果敌人中毒层数＞15则抽2张牌<br>消耗:2 体力<br><br>"+effectdisplay(3)}
	if(id == 22){return "病毒爆发:清除敌人所有中毒层数,每清除1层造成 4 物理伤害<br>消耗:1 体力<br><br>"+effectdisplay(3)}
	if(id == 23){return "墓地增生:先将一张当前墓地里最多的牌的复制至手上<br>移除<br>消耗:6 魔力<br><br>"}
	if(id == 24){return "肉体再生:恢复自己损失血量/3的生命<br>消耗:11 魔力<br><br>"}
	if(id == 25){return "重构:将手牌移回牌库并重新抽取等量的手牌且每移回一张牌+3防御<br>消耗:15 魔力<br><br>"}
	if(id == 26){return "嗜血斩:造成(自己损失血量*敌方损失血量)/150的物理伤害<br>消耗:3 体力<br><br>"}
	if(id == 27){return "自信:造成5*持有手牌的物理伤害<br>消耗:1体力<br><br>"}
	if(id == 28){return "魔力源泉:获得2魔力再生效果<br>消耗:无<br><br>"+effectdisplay(12)}
	if(id == 29){return "治疗术:恢复20血,获得 5 恢复<br>消耗:13 魔力<br><br>"}
	if(id == 30){return "绷带:恢复4血并获得5恢复,5护甲<br>消耗:1 体力<br><br>"+effectdisplay(2)}
	if(id == 31){return "卡牌魔法:将手上所有的牌移到墓地并获得等量的布朗魔术<br>消耗:1体力,5 魔力<br><br>"}
	if(id == 32){return "献祭:随机获得以下效果中的其中二个①获得7力量②获得7减伤③获得7体力<br>消耗:42 血<br><br>"+effectdisplay(1)+effectdisplay(13)}
	if(id == 33){return "天平:按降低的比例重新分配血,魔力,体力<br>移除<br>消耗:无<br><br>"}
	if(id == 34){return "墓地衍生:使墓地中的牌*2<br>消耗:1 体力,8 魔力<br><br>"}
	if(id == 35){return "滴血:移除任意最多3张牌<br>消耗:3 血<br><br>"}
	if(id == 36){return "破财消灾:造成 15%拥有的$的物理伤害<br>消耗:20% $<br><br>"}
	if(id == 37){return "灵魂吸取:造成 10 魔法伤害,如果此伤害杀死了敌人,敌人5%的最多血量永久增加到你身上<br>消耗:10 魔力<br><br>"}
	if(id == 38){return "魔法结晶:恢复30法力<br>移除<br>消耗:无<br><br>"}
	if(id == 39){return "提取器:使用后开始记录,之后本回合你受到/造成的伤害都会增加到效果凝血,回合结束取消记录<br>移除<br>消耗:5 血<br><br>"+effectdisplay(14)}
	if(id == 40){return "应急干粮:恢复5血和1体力<br>移除<br>消耗:无<br><br>"}
	if(id == 41){return "老千:50%获得抽取3张卡,50%减去15血<br>消耗:1 体力<br><br>"}
	if(id == 42){return "破釜沉舟:血量低于3%时可以使用,造成300伤害,永久移除这张卡<br>消耗:无<br><br>"}
	if(id == 43){return "能量护盾:获得20防御<br>消耗:8 魔力<br><br>"}
	if(id == 44){return "不定性病毒:50%给敌方+5感染,50%给我方+3感染<br>消耗:无<br><br>"+effectdisplay(4)}
	if(id == 45){return "格挡:获得17防御,2易伤<br>消耗:1 体力<br><br>"+effectdisplay(15)}
	if(id == 46){return "急救:恢复50血<br>移除<br>消耗:2 体力<br><br>"}
	if(id == 47){return "背刺:75%造成 36 物理伤害,25%造成 4 物理伤害<br>消耗:2 体力<br><br>"}
	if(id == 48){return "蔓延:在手牌中添加一张蔓延,此卡不会使用后进入墓地<br>消耗:无<br><br>"}
	if(id == 49){return "聚集:恢复[(当前血*当前魔力*当前体力)/500]%的血,魔力,体力<br>消耗:1 体力,3 魔力,10 血<br><br>"}
	if(id == 50){return "再生:恢复层数*2,恢复恢复层数的血量<br>消耗:10 魔力<br><br>"+effectdisplay(2)}
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
	clickables:{
		11:{
			title:"返回游戏",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){showTab("none")},
		},
	},
	tabFormat: [
        "main-display",
        "prestige-button",
		"clickables",
		"blank",
        ["display-text", function() {return `<a class="link" href="https://afdian.net/@Mysterious124" target="_blank">点我跳转到捐助页面 Jump directly to the donation page</a>`}],
		["display-text", function() {return `<br><br><big><big>↑↑↑我唯一的收入来源 my only source of income↑↑↑`}],
		["display-text", function() {return `<big><big>请给我捐一些钱,谢谢 Please donate some money to me, thank you`}],
		["display-text", function() {return `<big><big>感谢游玩的游戏 think you playing`}],
		["display-text", function() {return `<big><big>邮箱(e-mail) 67265011@qq.com`}],
		["display-text", function() {return `<big><big>↑你可以在这里把你的想法告诉我(尤其是多语言化,我会帮你找办法) You can tell me what you think here (especially multilingual, I will help you find a way)↑`}],
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
		subhpto:new Decimal(0),
		
		//效果
		effect:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),
		],
		deeffect:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),
		],
		alleffect:new Decimal(17),
		
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
		
		
		
		//怪物
		monster:new Decimal(0),
		
		//卡牌
		card:[new Decimal(0),
		new Decimal(12),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),
		],
		carddead:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),
		],
		cardintermediary:[new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),
		],
		cardmax:[new Decimal(0),
		new Decimal(12),new Decimal(5),new Decimal(3),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		new Decimal(0),
		],
		allcard:new Decimal(51),
		maxcard:new Decimal(10),
		holdcard:new Decimal(0),
		removals:new Decimal(0),
		remove_removals:true,
		
		//神器
		Normal_Artifacts:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		],
		Rare_Artifacts:[
		new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),
		],
		Super_Rare_Artifacts:[
		new Decimal(0),new Decimal(0),new Decimal(0),
		],
		Ultra_Rare_Artifacts:[
		new Decimal(0),
		],
		
		Normal_Artifacts_Sole:[
		new Decimal(0),
		],
		Rare_Artifacts_Sole:[
		new Decimal(0),new Decimal(0),
		],
		Super_Rare_Artifacts_Sole:[
		new Decimal(0),new Decimal(0),
		],
		Ultra_Rare_Artifacts_Sole:[
		new Decimal(0),new Decimal(0),
		],
		all_Normal_Artifacts:new Decimal(4),
		all_Rare_Artifacts:new Decimal(5),
		all_Super_Rare_Artifacts:new Decimal(3),
		all_Ultra_Rare_Artifacts:new Decimal(1),
		
		all_Normal_Artifacts_Sole:new Decimal(0),
		all_Rare_Artifacts_Sole:new Decimal(1),
		all_Super_Rare_Artifacts_Sole:new Decimal(2),
		all_Ultra_Rare_Artifacts_Sole:new Decimal(2),
		
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
		display1copy:false,
		display2copy:false,
		display3copy:false,
		display4copy:false,
		display5copy:false,
		display6copy:false,
		display7copy:false,
		display8copy:false,
		display9copy:false,
		display10copy:false,
		display11copy:false,
		display12copy:false,
		display13copy:false,
		display14copy:false,
		display15copy:false,
		display16copy:false,
		display17copy:false,
		display18copy:false,
		display19copy:false,
		display20copy:false,
		
		cardget1:new Decimal(0),
		cardget2:new Decimal(0),
		cardget3:new Decimal(0),
		
		store_card11:new Decimal(0),
		store_card11_cost:new Decimal(0),
		store_card11_canClick:true,
		store_card12:new Decimal(0),
		store_card12_cost:new Decimal(0),
		store_card12_canClick:true,
		store_card13:new Decimal(0),
		store_card13_cost:new Decimal(0),
		store_card13_canClick:true,
		store_card14:new Decimal(0),
		store_card14_cost:new Decimal(0),
		store_card14_canClick:true,
		store_card21:new Decimal(0),
		store_card21_cost:new Decimal(0),
		store_card21_canClick:true,
		store_card22:new Decimal(0),
		store_card22_cost:new Decimal(0),
		store_card22_canClick:true,
		store_card23:new Decimal(0),
		store_card23_cost:new Decimal(0),
		store_card23_canClick:true,
		store_card24:new Decimal(0),
		store_card24_cost:new Decimal(0),
		store_card24_canClick:true,
		
		artifactsawardrandom:new Decimal(0),
		storeawardrandom:new Decimal(0),
		
		start:true,
		dedead:false,
		
		moneyaward:false,
		cardaward:false,
		artifactsaward:false,
		storeaward:false,
		
		newlevel:false,
		backdeckCD:false,
		level:new Decimal(0),
		
		wan:false,
		dewan:false,
		eff10times:new Decimal(0),
		effect10effect:false,
		card26recard:new Decimal(0),
		card40eff14:false,
		card40geteff14:new Decimal(0),
		card38hpmax:new Decimal(0),
		
		hpmaxadd2:new Decimal(0),
		Ultra_Rare_Artifacts_Sole1:false,
		
		a:new Decimal(0),
    }},
	update(diff) {
		save()
		if(player.data.hp.gt(player.data.hpmax)){player.data.hp = new Decimal(player.data.hpmax)}
		if(player.data.mp.gt(player.data.mpmax)){player.data.mp = new Decimal(player.data.mpmax)}
		if(player.data.ps.gt(player.data.psmax)){player.data.ps = new Decimal(player.data.psmax)}
		if(player.data.dehp.gt(player.data.dehpmax)){player.data.dehp = new Decimal(player.data.dehpmax)}
		if(player.data.demp.gt(player.data.dempmax)){player.data.demp = new Decimal(player.data.dempmax)}
		if(player.data.dehp.lte(0) && player.data.dedead == false && player.data.hp.gt(0)){
			showTab("over")
			player.data.moneyaward = true
			player.data.cardaward = true
			player.data.dedead = true
			player.data.newlevel = true
			player.data.remove_removals = false
			player.data.artifactsawardrandom = new Decimal(Math.floor((Math.random() * 100)))
			player.data.storeawardrandom = new Decimal(Math.floor((Math.random() * 100)))
			if(player.data.artifactsawardrandom.lte(25)){
				player.data.artifactsaward = true
			}
			if(player.data.storeawardrandom.lte(20)){
				player.data.storeaward = true
				player.data.store_card11 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card11_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card11_canClick = true
				player.data.store_card12 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card12_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card12_canClick = true
				player.data.store_card13 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card13_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card13_canClick = true
				player.data.store_card14 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card14_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card14_canClick = true
				player.data.store_card21 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card21_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card21_canClick = true
				player.data.store_card22 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card22_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card22_canClick = true
				player.data.store_card23 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card23_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card23_canClick = true
				player.data.store_card24 = new Decimal(Math.floor((Math.random() * player.data.allcard.add(1))))
				player.data.store_card24_cost = new Decimal(Math.floor((Math.random() * player.data.allcard.add(200)))).add(100)
				player.data.store_card24_canClick = true
			}
			if(player.data.Ultra_Rare_Artifacts[0].gt(0)){player.data.hpmaxadd2 = player.data.hpmaxadd2.add(Decimal.add(35).mul(player.data.Ultra_Rare_Artifacts[0]))}
			if(player.data.Ultra_Rare_Artifacts[0].gt(0)){player.data.hp = player.data.hp.add(Decimal.add(80).mul(player.data.Ultra_Rare_Artifacts[0]))}
			player.data.effect[11] = new Decimal(0)
		}
		if(player.data.hp.lte(0) && player.data.Ultra_Rare_Artifacts_Sole[1].gt(0) && player.data.Ultra_Rare_Artifacts_Sole1==false){
			player.data.hp = new Decimal(player.data.hpmax).div(2).floor()
			player.data.Ultra_Rare_Artifacts_Sole1 = true
		}
		player.data.haveeff = new Decimal(0)
		player.data.dehaveeff = new Decimal(0)
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
		haveefffunction(10)
		haveefffunction(11)
		haveefffunction(12)
		haveefffunction(13)
		haveefffunction(14)
		haveefffunction(15)
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
		dehaveefffunction(10)
		dehaveefffunction(11)
		dehaveefffunction(12)
		dehaveefffunction(13)
		dehaveefffunction(14)
		dehaveefffunction(15)
		
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
		resizeCanvas()
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return false},
})

addLayer("point", {
    name: "point",
    symbol: " ",
    position: 11,
    startData() { return {
        unlocked: true,
		
		points:new Decimal(0),
		top_points:new Decimal(0),
		last_points:new Decimal(0),
    }},
	update(diff) {
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
			title:"返回游戏",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){backnone()},
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
		["display-text", function() {return "图鉴会记录游戏中的东西<br>(图鉴不一定记录完全)"}],
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
		22:{
			title:"布朗魔术",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(11)},
		},
		23:{
			title:"混乱",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(12)},
		},
		24:{
			title:"魔力再生",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(13)},
		},
		25:{
			title:"减伤",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(14)},
		},
		26:{
			title:"凝血",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(15)},
		},
		27:{
			title:"易伤",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.eff = new Decimal(16)},
		},
	},
	tabFormat: [
		["display-text", function() {return "效果图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [
			["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],
			["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20],["clickable", 21],
		]],
		["row", [
			["clickable", 22],["clickable", 23],["clickable", 24],["clickable", 25],["clickable", 26],
			["clickable", 27],
		]],
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
			let eff10 = player.pokedex.eff.eq(11) ? effectdisplay(10):""
			let eff11 = player.pokedex.eff.eq(12) ? effectdisplay(11):""
			let eff12 = player.pokedex.eff.eq(13) ? effectdisplay(12):""
			let eff13 = player.pokedex.eff.eq(14) ? effectdisplay(13):""
			let eff14 = player.pokedex.eff.eq(15) ? effectdisplay(14):""
			let eff15 = player.pokedex.eff.eq(16) ? effectdisplay(15):""
			return eff0+eff1+eff2+eff3+eff4+eff5+eff6+eff7+eff8+eff9+eff10+eff11+eff12+eff13+eff14+eff15
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
		14:{
			title:"野蛮人",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(3)},
		},

		15:{
			title:"截",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(4)},
		},
		16:{
			title:"狂战士",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(5)},
		},
		17:{
			title:"混乱者",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.mon = new Decimal(6)},
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
			let mon2 = player.pokedex.mon.eq(3) ? monsterdisplay(2):""
			let mon3 = player.pokedex.mon.eq(4) ? monsterdisplay(3):""
			let mon4 = player.pokedex.mon.eq(5) ? monsterdisplay(4):""
			let mon5 = player.pokedex.mon.eq(6) ? monsterdisplay(5):""
			return mon0 + mon1 + mon2 + mon3 + mon4 + mon5
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
		31:{
			title:"毒素扩散",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(20)},
		},
		32:{
			title:"血清",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(21)},
		},
		33:{
			title:"隐秘扩散",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(22)},
		},
		34:{
			title:"病毒爆发",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(23)},
		},
		35:{
			title:"墓地增生",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(24)},
		},
		36:{
			title:"肉体再生",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(25)},
		},
		37:{
			title:"重构",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(26)},
		},
		38:{
			title:"嗜血斩",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(27)},
		},
		39:{
			title:"自信",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(28)},
		},
		40:{
			title:"魔力源泉",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(29)},
		},
		41:{
			title:"治疗术",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(30)},
		},
		42:{
			title:"绷带",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(31)},
		},
		43:{
			title:"卡牌魔法",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(32)},
		},
		44:{
			title:"献祭",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(33)},
		},
		45:{
			title:"天平",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(34)},
		},
		46:{
			title:"墓地衍生",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(35)},
		},
		47:{
			title:"滴血",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(36)},
		},
		48:{
			title:"破财消灾",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(37)},
		},
		49:{
			title:"灵魂吸取",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(38)},
		},
		50:{
			title:"魔法结晶",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(39)},
		},
		51:{
			title:"提取器",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(40)},
		},
		52:{
			title:"应急干粮",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(41)},
		},
		53:{
			title:"老千",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(42)},
		},
		54:{
			title:"破釜沉舟",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(43)},
		},
		55:{
			title:"能量护盾",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(44)},
		},
		56:{
			title:"不定性病毒",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(45)},
		},
		57:{
			title:"格挡",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(46)},
		},
		58:{
			title:"急救",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(47)},
		},
		59:{
			title:"背刺",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(48)},
		},
		60:{
			title:"蔓延",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(49)},
		},
		61:{
			title:"聚集",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(50)},
		},
		62:{
			title:"再生",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "50px","min-height": "50px",'width': '50px'}},
			onClick(){player.pokedex.car1 = new Decimal(51)},
		},
	},
	tabFormat: [
		["display-text", function() {return "卡牌图鉴"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [
			["clickable", 12],["clickable", 13],["clickable", 14],["clickable", 15],["clickable", 16],
			["clickable", 17],["clickable", 18],["clickable", 19],["clickable", 20],["clickable", 21],
		]],
		["row", [
			["clickable", 22],["clickable", 23],["clickable", 24],["clickable", 25],["clickable", 26],
			["clickable", 27],["clickable", 28],["clickable", 29],["clickable", 31],["clickable", 32],
		]],
		["row", [	
			["clickable", 33],["clickable", 34],["clickable", 35],["clickable", 36],["clickable", 37],
			["clickable", 38],["clickable", 39],["clickable", 40],["clickable", 41],["clickable", 42],
		]],
		["row", [	
			["clickable", 43],["clickable", 44],["clickable", 45],["clickable", 46],["clickable", 47],
			["clickable", 48],["clickable", 49],["clickable", 50],["clickable", 51],["clickable", 52],
		]],
		["row", [	
			["clickable", 53],["clickable", 54],["clickable", 55],["clickable", 56],["clickable", 57],
			["clickable", 58],["clickable", 59],["clickable", 60],["clickable", 61],["clickable", 62],
		]],
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
			let car18 = player.pokedex.car1.eq(19) ? carddisplay(18):""
			let car19 = player.pokedex.car1.eq(20) ? carddisplay(19):""
			let car20 = player.pokedex.car1.eq(21) ? carddisplay(20):""
			let car21 = player.pokedex.car1.eq(22) ? carddisplay(21):""
			let car22 = player.pokedex.car1.eq(23) ? carddisplay(22):""
			let car23 = player.pokedex.car1.eq(24) ? carddisplay(23):""
			let car24 = player.pokedex.car1.eq(25) ? carddisplay(24):""
			let car25 = player.pokedex.car1.eq(26) ? carddisplay(25):""
			let car26 = player.pokedex.car1.eq(27) ? carddisplay(26):""
			let car27 = player.pokedex.car1.eq(28) ? carddisplay(27):""
			let car28 = player.pokedex.car1.eq(29) ? carddisplay(28):""
			let car29 = player.pokedex.car1.eq(30) ? carddisplay(29):""
			let car30 = player.pokedex.car1.eq(31) ? carddisplay(30):""
			let car31 = player.pokedex.car1.eq(32) ? carddisplay(31):""
			let car32 = player.pokedex.car1.eq(33) ? carddisplay(32):""
			let car33 = player.pokedex.car1.eq(34) ? carddisplay(33):""
			let car34 = player.pokedex.car1.eq(35) ? carddisplay(34):""
			let car35 = player.pokedex.car1.eq(36) ? carddisplay(35):""
			let car36 = player.pokedex.car1.eq(37) ? carddisplay(36):""
			let car37 = player.pokedex.car1.eq(38) ? carddisplay(37):""
			let car38 = player.pokedex.car1.eq(39) ? carddisplay(38):""
			let car39 = player.pokedex.car1.eq(40) ? carddisplay(39):""
			let car40 = player.pokedex.car1.eq(41) ? carddisplay(40):""
			let car41 = player.pokedex.car1.eq(42) ? carddisplay(41):""
			let car42 = player.pokedex.car1.eq(43) ? carddisplay(42):""
			let car43 = player.pokedex.car1.eq(44) ? carddisplay(43):""
			let car44 = player.pokedex.car1.eq(45) ? carddisplay(44):""
			let car45 = player.pokedex.car1.eq(46) ? carddisplay(45):""
			let car46 = player.pokedex.car1.eq(47) ? carddisplay(46):""
			let car47 = player.pokedex.car1.eq(48) ? carddisplay(47):""
			let car48 = player.pokedex.car1.eq(49) ? carddisplay(48):""
			let car49 = player.pokedex.car1.eq(50) ? carddisplay(49):""
			let car50 = player.pokedex.car1.eq(51) ? carddisplay(50):""
			return car0+car1+car2+car3+car4+car5+car6+car7+car8+car9+car10+car11+car12+car13+car14+car15+car16+car17+car18+car19+car20+car21+car22+car23+car24+car25+car26+car27+car28+car29+car30+car31+car32+car33+car34+car35+car36+car37+car38+car39+car40+car41+car42+car43+car44+car45+car46+car47+car48+car49+car50
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

addLayer("bag", {
    name: "bag",
    symbol: "<h6>背包",
	tooltip() { 
		return `背包`
	},
    position: 12,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	clickables:{
		11:{
			title:"返回游戏",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){backnone()},
		},
	},
	tabFormat: [
		["display-text", function() {return "背包会存放你的物品"}],
		["row", [["clickable", 11]]],
		"blank",
		["row", [
			["display-text", function() {
			let card0 = "<hr>牌库:<br>"
			let card1 = tabFormatMaxCard(1,"攻击")
			let card2 = tabFormatMaxCard(2,"防御")
			let card3 = tabFormatMaxCard(3,"治疗")
			let card4 = tabFormatMaxCard(4,"魔法飞弹")
			let card5 = tabFormatMaxCard(5,"冥想")
			let card6 = tabFormatMaxCard(6,"魔力再生")
			let card7 = tabFormatMaxCard(7,"连斩")
			let card8 = tabFormatMaxCard(8,"愤怒")
			let card9 = tabFormatMaxCard(9,"传染")
			let card10 = tabFormatMaxCard(10,"病原体")
			let card11 = tabFormatMaxCard(11,"思考")
			let card12 = tabFormatMaxCard(12,"重击")
			let card13 = tabFormatMaxCard(13,"回旋镖")
			let card14 = tabFormatMaxCard(14,"无中生有")
			let card15 = tabFormatMaxCard(15,"烨")
			let card16 = tabFormatMaxCard(16,"灵能冲击")
			let card17 = tabFormatMaxCard(17,"破魂打击")
			let card18 = tabFormatMaxCard(18,"魔能调换")
			let card19 = tabFormatMaxCard(19,"阻梦")
			let card20 = tabFormatMaxCard(20,"毒素扩散")
			let card21 = tabFormatMaxCard(21,"血清")
			let card22 = tabFormatMaxCard(22,"隐秘扩散")
			let card23 = tabFormatMaxCard(23,"病毒爆发")
			let card24 = tabFormatMaxCard(24,"墓地增生")
			let card25 = tabFormatMaxCard(25,"肉体再生")
			let card26 = tabFormatMaxCard(26,"重构")
			let card27 = tabFormatMaxCard(27,"嗜血斩")
			let card28 = tabFormatMaxCard(28,"自信")
			let card29 = tabFormatMaxCard(29,"魔力源泉")
			let card30 = tabFormatMaxCard(30,"治疗术")
			let card31 = tabFormatMaxCard(31,"绷带")
			let card32 = tabFormatMaxCard(32,"卡牌魔法")
			let card33 = tabFormatMaxCard(33,"献祭")
			let card34 = tabFormatMaxCard(34,"天平")
			let card35 = tabFormatMaxCard(35,"墓地衍生")
			let card36 = tabFormatMaxCard(36,"滴血")
			let card37 = tabFormatMaxCard(37,"破财消灾")
			let card38 = tabFormatMaxCard(38,"灵魂吸取")
			let card39 = tabFormatMaxCard(39,"魔法结晶")
			let card40 = tabFormatMaxCard(40,"提取器")
			let card41 = tabFormatMaxCard(41,"应急干粮")
			let card42 = tabFormatMaxCard(42,"老千")
			let card43 = tabFormatMaxCard(43,"破釜沉舟")
			let card44 = tabFormatMaxCard(44,"能量护盾")
			let card45 = tabFormatMaxCard(45,"不定性病毒")
			let card46 = tabFormatMaxCard(46,"格挡")
			let card47 = tabFormatMaxCard(47,"急救")
			let card48 = tabFormatMaxCard(48,"背刺")
			let card49 = tabFormatMaxCard(49,"蔓延")
			let card50 = tabFormatMaxCard(50,"聚集")
			let card51 = tabFormatMaxCard(51,"再生")
			return card0 + card1 + card2 + card3 + card4 + card5 + card6 + card7 + card8 + card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + card17 + card18 + card19 + card20 + card21 + card22 + card23 + card24 + card25 + card26 + card27 + card28 + card29 + card30 + card31 + card32 + card33 + card34 + card35 + card36 + card37 + card38 + card39 + card40 + card41 + card42 + card43 + card44 + card45 + card46 + card47 + card48 + card49 + card50 + card51
			}],
			["display-text", function() {return '&nbsp'}],
			["display-text", function() {
			let artifact = "<hr>神器:<br>"
			let N = "N(普通/Normal):<br>"
			let N0 = player.data.Normal_Artifacts[0].gte(1) ? "红苹果("+format(player.data.Normal_Artifacts[0],0)+"):+"+format(player.data.Normal_Artifacts[0].mul(15),0)+"血上限<br>" : ""
			let N1 = player.data.Normal_Artifacts[1].gte(1) ? "绿苹果("+format(player.data.Normal_Artifacts[1],0)+"):开局"+format(player.data.Normal_Artifacts[1].mul(2),0)+"恢复<br>" : ""
			let N2 = player.data.Normal_Artifacts[2].gte(1) ? "蓝苹果("+format(player.data.Normal_Artifacts[2],0)+"):+"+format(player.data.Normal_Artifacts[2].mul(6),0)+"魔力上限<br>" : ""
			let N3 = player.data.Normal_Artifacts[3].gte(1) ? "黄苹果("+format(player.data.Normal_Artifacts[3],0)+"):每有20$存于手上+"+format(player.data.Normal_Artifacts[3].mul(1),0)+"血上限<br>" : ""
			let ON0 = player.data.Normal_Artifacts_Sole[0].gte(1) ? "坏苹果(唯一):Bad Apple?敌方初始血量减少5%<br>" : ""
			let R = "<br>R(稀有/Rare):<br>"
			let R0 = player.data.Rare_Artifacts[0].gte(1) ? "智慧大脑("+format(player.data.Rare_Artifacts[0],0)+"):智慧效果+"+format(player.data.Rare_Artifacts[0].mul(1),0)+"<br>" : ""
			let R1 = player.data.Rare_Artifacts[1].gte(1) ? "预备攻击("+format(player.data.Rare_Artifacts[1],0)+"):开局造成"+format(player.data.Rare_Artifacts[1].mul(25),0)+"物理伤害<br>" : ""
			let R2 = player.data.Rare_Artifacts[2].gte(1) ? "预备防御("+format(player.data.Rare_Artifacts[2],0)+"):开局获得"+format(player.data.Rare_Artifacts[2].mul(20),0)+"护甲<br>" : ""
			let R3 = player.data.Rare_Artifacts[3].gte(1) ? "圣盾("+format(player.data.Rare_Artifacts[3],0)+"):回合结束每有4护甲恢复+"+format(player.data.Rare_Artifacts[3].mul(1),0)+"血<br>" : ""
			let R4 = player.data.Rare_Artifacts[4].gte(1) ? "蓝色药剂("+format(player.data.Rare_Artifacts[4],0)+"):每回合恢复"+format(player.data.Rare_Artifacts[4].mul(3),0)+"魔力<br>" : ""
			let OR0 = player.data.Rare_Artifacts_Sole[0].gte(1) ? "死尸(唯一):中毒受到的伤害减半<br>" : ""
			let OR1 = player.data.Rare_Artifacts_Sole[1].gte(1) ? "牌套(唯一):手牌上限+4<br>" : ""
			let SR = "<br>SR(罕见/Super Rare):<br>"
			let SR0 = player.data.Super_Rare_Artifacts[0].gte(1) ? "体力药剂("+format(player.data.Super_Rare_Artifacts[0],0)+"):+"+format(player.data.Super_Rare_Artifacts[0].mul(1),0)+"体力上限<br>" : ""
			let SR1 = player.data.Super_Rare_Artifacts[1].gte(1) ? "吸血鬼尖牙("+format(player.data.Super_Rare_Artifacts[1],0)+"):物理攻击每造成3伤害恢复"+format(player.data.Super_Rare_Artifacts[1].mul(1),0)+"血<br>" : ""
			let SR2 = player.data.Super_Rare_Artifacts[2].gte(1) ? "感染性疾病("+format(player.data.Super_Rare_Artifacts[2],0)+"):开局给敌方"+format(player.data.Super_Rare_Artifacts[2],0)+"感染<br>" : ""
			let OSR0 = player.data.Super_Rare_Artifacts_Sole[0].gte(1) ? "感染性抗体(唯一):你的中毒数量每回合减半,向下取整,恢复不再影响中毒数量减少<br>" : ""
			let OSR1 = player.data.Super_Rare_Artifacts_Sole[1].gte(1) ? "坚毅之盾(唯一):护甲每回合只减少1<br>" : ""
			let UR = "<br>UR(极少/Ultra Rare):<br>"
			let UR0 = player.data.Ultra_Rare_Artifacts[0].gte(1) ? "吸血鬼之心("+format(player.data.Ultra_Rare_Artifacts[0],0)+"):每杀死1名敌人+"+format(player.data.Ultra_Rare_Artifacts[0].mul(35),0)+"血上限(此效果最大1500)并恢复"+format(player.data.Ultra_Rare_Artifacts[0].mul(65),0)+"血<br>" : ""
			let OUR0 = player.data.Ultra_Rare_Artifacts_Sole[0].gte(1) ? "再生生命体(唯一):恢复效果在最大生命的25%前不会减少且每回合获得4恢复<br>" : ""
			let OUR1 = player.data.Ultra_Rare_Artifacts_Sole[1].gte(1) ? player.data.Ultra_Rare_Artifacts_Sole1==false ? "顽强生命体(唯一)(未使用):死亡时以50%的血上限的血恢复<br>" : "顽强生命体(唯一)(已使用):死亡时以50%的血上限的血恢复<br>" : ""
			return artifact
			+N+N0+N1+N2+N3+ON0
			+R+R0+R1+R2+R3+R4+OR0+OR1
			+SR+SR0+SR1+SR2+OSR0+OSR1
			+UR+UR0+OUR0+OUR1
			}],
		]],
	],
})

addLayer("over", {
    name: "over",
    symbol: "<h6>过度",
	tooltip() { 
		return `过度`
	},
    position: 12,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	clickables:{
		2:{
			title: "钱!",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.moneyaward == true && player.data.start == false && player.data.hp.gt(0)},
			onClick(){return awardmoney()},
		},
		3:{
			title: "牌!",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.cardaward == true && player.data.start == false && player.data.hp.gt(0)},
			onClick(){return awardcard("cardget",3)},
		},
		4:{
			title: "下一关!<br><h6>到达下一关无法再获得本关的钱和牌",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.newlevel == true && player.data.hp.gt(0)},
			onClick(){return levelnew()},
		},
		5:{
			title: "前往商店",
			display() {
			},
			canClick(){return true},
			unlocked(){return player.data.storeaward == true && player.data.hp.gt(0)},
			onClick(){return showTab("store")},
		},
		1011:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true && player.data.hp.gt(0)},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		1012:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true && player.data.hp.gt(0)},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		1013:{
			title(){return "获得"+retit("cardget",this.id-1010)},
			display(){return redis("cardget",this.id-1010)},
			canClick(){return true},
			unlocked(){return !player.data['cardget'+(this.id-1010)].eq(0) && player.data.cardaward == false && player.data.newlevel == true && player.data.hp.gt(0)},
			onClick(){return recardonc(this.id-1010)},
			style() {return {'height': "200px",'width': '150px'}},
		},
		99:{
			title(){return "获取神器"},
			display(){return "50%N<br>30%R<br>15%SR<br>5%UR"},
			canClick(){return true},
			unlocked(){return player.data.artifactsaward == true && player.data.start == false && player.data.hp.gt(0)},
			onClick(){return awardartifacts()},
		},
	},
	bars:{
		hpbar:{
			display() {
				let dis1 = "你的血量 "+format(player.data.hp,0)+" / "+format(player.data.hpmax,0)
				return dis1
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
	tabFormat: [
		["display-text", function() {return `
			<div id="treeOverlay" v-if="!(tmp.gameEnded && !player.keepGoing) && (player.tab === 'none' || tmp.other.splitScreen || !readData(layoutInfo.showTree))" class="treeOverlay" onscroll="resizeCanvas()"
			v-bind:class="{ 
			fullWidth: (player.tab == 'none' || player.navTab == 'none'), 
			col: (player.tab !== 'none' && player.navTab !== 'none'), 
			left: (player.tab !== 'none' && player.navTab !== 'none')}"
			 :style="{'margin-top': !readData(layoutInfo.showTree) && player.tab == 'info-tab' ? '50px' : ''}">
			<div id="version" onclick="showTab('changelog-tab')" class="overlayThing" style="margin-right: 13px" >
				v0.1.2.24b</div>
			<img id="optionWheel" class="overlayThing"  src="png/options_wheel.png" onclick="showTab('options-tab')"></img>
			<div id="info" class="overlayThing" onclick="showTab('info-tab')"><br>i</div>
			<img id="pokedex" class="overlayThing" src="png/pokedex.png" onclick="showTab('pokedex')"></img>
			<img id="bag" class="overlayThing" src="png/bag.png" onclick="showTab('bag')"></img>
			<img id="afdian" class="overlayThing" src="png/afdian.png" onclick="showTab('afdian')"></img>
			</div>
		`}],
		"blank",
		"blank",
		"blank",
		["row", [
			["column",[
				["bar", "hpbar"],
				["bar", "dehpbar"],
			]],
			["bar", "moneybar"],
		]],
		"blank",
		"blank",
		"blank",
		["clickable", 4],
		"blank",
		"blank",
		"blank",
		["row", [["clickable", 2],["clickable", 3],["clickable", 99]]],
		["clickable", 5],
		["row", [["clickable", 1011],["clickable", 1012],["clickable", 1013]]],
	],
})

addLayer("store", {
    name: "store",
    symbol: "<h6>商店",
	tooltip() { 
		return `商店`
	},
    position: 12,
    startData() { return {
        unlocked: true,
    }},
	update(diff) {
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	clickables:{
		1:{
			title:"返回",
			canClick(){return true},
			unlocked(){return true},
			style() {return {'height': "25px","min-height": "25px",'width': '225px'}},
			onClick(){backnone()},
		},
		11:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		12:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		13:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		14:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		21:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		22:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		23:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
		24:{
			title(){return "购买"+retit('store_card',this.id)},
			display(){return player.data['store_card'+this.id+'_canClick'] == true ? redis('store_card',this.id)+"<br>"+"<big><big><big><big>"+format(player.data['store_card'+this.id+'_cost'],0)+`\$` : "已购买"},
			cao(){return },
			canClick(){return player.data['store_card'+this.id+'_canClick'] == true && player.data.money.gte(player.data['store_card'+this.id+'_cost'])},
			unlocked(){return true},
			style() {return {'height': "200px",'width': '150px'}},
			onClick(){
				player.data.money = player.data.money.sub(player.data['store_card'+this.id+'_cost'])
				player.data.cardmax[player.data['store_card'+this.id]] = player.data.cardmax[player.data['store_card'+this.id]].add(1)
				player.data['store_card'+this.id+'_canClick'] = false
				return
			},
		},
	},
	tabFormat: [
		["display-text", function() {return `这里是商店<br>你可以买些东西<br><big>你有<yellow id="yellow">`+format(player.data.money,0)+`\$`}],
		"blank",
		["row", [["clickable", 1]]],
		"blank",
		["row", [["clickable", 11],"blank",["clickable", 12],"blank",["clickable", 13],"blank",["clickable", 14]]],
		"blank",
		["row", [["clickable", 21],"blank",["clickable", 22],"blank",["clickable", 23],"blank",["clickable", 24]]],
	]
})

/*
addLayer("talent_crystal", {
    name: "talent_crystal",
    symbol: "<h6>天赋结晶",
	tooltip() { 
		return `天赋结晶`
	},
    position: 12,
    startData() { return {
        unlocked: true,
		points:new Decimal(10),
    }},
	resource: "天赋结晶",
	update(diff) {
	},
	upgrades:{
		11: {
			title: "生命提升I",
			description: "初始生命+10",
			cost:function(){return new Decimal("1")},
			req:[21],
			branches() {
				let col = hasUpgrade(this.layer, this.id) ? "#e6e6e6" : "#494949"
				return this.req.map(x => [x, col]) 
			},
		},
		12: {
			title: "魔法提升I",
			description: "初始魔法+3",
			cost:function(){return new Decimal("1")},
			req:[21],
			branches() {
				let col = hasUpgrade(this.layer, this.id) ? "#e6e6e6" : "#494949"
				return this.req.map(x => [x, col]) 
			},
		},
		13: {
			title: "财富提升I",
			description: "初始$+5",
			cost:function(){return new Decimal("1")},
		},
		21: {
			title: "综合体质I",
			description: "初始生命+3,魔法+1",
			cost:function(){return new Decimal("1")},
		},
	},
    color: "#FFFFFF",
    type: "none",
    row: "side",
    layerShown(){return true},
	tabFormat: [
		["display-text", function() {return `你有 <talent_crystal id="talent_crystal_id">`+format(player.talent_crystal.points,0)+`天赋结晶</talent_crystal> <img src="png/talent_crystal_thing.png">`}],
		["display-text", function() {return `天赋系统需要在模式中启用,默认关闭,但无论是否关闭你都可以获得天赋结晶`}],
		["display-text", function() {return `高级阶层的天赋需要相连接的低级天赋`}],
		["display-text", function() {return `结算时每10000分都会获得1天赋结晶`}],
		"blank",
		"blank",
		"blank",
		"blank",
		["row", [
			["column",[
				["row", [["display-text", function() {return `<big><big><big><big>阶层1&nbsp&nbsp&nbsp`}]]],
				"blank",
				"blank",
				"blank",
				"blank",
				"blank",
				"blank",
				"blank",
				["row", [["display-text", function() {return `<big><big><big><big>阶层2&nbsp&nbsp&nbsp`}]]],
			]],
			["column",[
				["row", [
					["upgrade", 11],"blank","blank","blank",["upgrade", 12],"blank","blank","blank",["upgrade", 13]
				]],
				"blank",
				"blank",
				"blank",
				["row", [
					["upgrade", 21],
				]],
			]],
		]],
	],
})
*/