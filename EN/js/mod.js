let modInfo = {
	name: "神秘尖塔",
	id: "Mysterious_Minaret",
	author: "辉影神秘",
	pointsName: "",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.6.80b",
	name: "神秘尖塔",
}

let changelog = `
	<div class="link" onclick="backnone()"><big><big>返回游戏</big></big></div><br>
	<h1>更新日志:</h1><br>
	<br><h3>v0.1.7.80β 词缀更新</h3><br>
	<li>将精英怪改成了以词缀的形式出现(未实装:新的19个词缀,普通怪0~1词缀,精英怪1~2词缀)<br>
	<li>将中英文的网址合在了一起<br>
	<li>修复bug<br>
	<br><h3>v0.1.6.78β 缤纷更新</h3><br>
	<li>地图拥有更多类型<br>
	<li>添加营地<br>
	<li>添加黑白洞<br>
	<li>添加新隐藏成就<br>
	<li>添加商店中的盲盒和删牌<br>
	<li>更改更新日志<br>
	<li>更改游戏操作细节<br>
	<li>加大力度英化<br>
	<li>新图标<br>
	<li>修复bug<br>
	<br><h3>v0.1.5.50β 地图更新</h3><br>
	<li>增加了地图,现在你可以选择去往的地点<br>
	<li>现在精英怪死亡一定会掉落宝箱<br>
	<li>些微平衡游戏<br>
	<li>修复bug<br>
	<br><h3>v0.1.4.47β UI更新</h3><br>
	<li>大幅度修改卡牌UI(且会随着背景变化)<br>
	<li>大幅度修改卡牌布局<br>
	<li>修复bug<br>
	<br><h3>v0.1.3.41β</h3><br>
	<li>更新隐藏成就<br>
	<li>增加设置<br>
	<li>修复bug<br>
	<br><h3>v0.1.3.38β 成就更新</h3><br>
	<li>更新成就系统<br>
	<li>平衡游戏<br>
	<li>修复bug<br>
	<li>优化游戏,现在除了第一次打开游戏之后都能十几毫秒加载出来<br>
	<br><h3>v0.1.2.34β</h3><br>
	<li>现在获得神器会有提示了<br>
	<li>平衡游戏<br>
	<li>修复bug<br>
	<br><h3>v0.1.2.30β</h3><br>
	<li>修复巨大bug<br>
	<li>平衡神器<br>
	<br><h3>v0.1.2.24β 商店更新</h3><br>
	<li>商店(其实特别好做,半个多小时就做好了)<br>
	<li>平衡游戏<br>
	<br><h3>v0.1.1.23β</h3><br>
	<li>大幅度平衡游戏<br>
	<li>增加神器<br>
	<br><h3>v0.1.1.19β 神器更新</h3><br>
	<li>修bug,平衡游戏<br>
	<li>开始英化<br>
	<li>优化游戏<br>
	<br><h3>v0.1.0.10β</h3><br>
	<li>修复8个bug<br>
	<li>补充图鉴,平衡游戏(包括但不限于:感染者,混乱者血量乘数降低,狂战士,野蛮人特殊效果削弱,敌人属性成长减半,提高攻击的攻击,治疗的治疗量,嗜血斩,天平除数更高,治疗术会获得恢复)<br>
	<br><h3>v0.1β 公测更新</h3><br>
	<li>平衡游戏<br>
	<li>修复蓝色药剂在有魔力枯竭下依然可以恢复魔力的bug<br>
	<li>修复防御破坏不会受到额外伤害的bug<br>
	<li>更新至51张卡<br>
	<li>一些精英怪和神器<br>
	<li>细节修改,设置UI极大更改<br>
	<li>开始公测!<br>
	<br><h3>v0.141α 内测更新</h3><br>
	<li>5个精英怪<br>
	<li>墓地返还牌库机制更改<br>
	<li>修了一些bug并平衡游戏<br>
	<br><h3>v0.14α 内测更新</h3><br>
	<li>分数系统<br>
	<br><h3>v0.134α</h3><br>
	<li>修了一堆bug和一个巨明显我却几个月没看出问题的bug<br>
	<br><h3>v0.132α 内测更新</h3><br>
	<li>完成了神器<br>
	<br><h3>v0.131α 内测更新</h3><br>
	<li>完成了6个R神器<br>
	<li>优化UI,细节和背景<br>
	<br><h3>v0.13α 内测更新</h3><br>
	<li>完成了神器的基础机制和4个N神器<br>
	<li>平衡游戏,优化UI和动画,新细节和背景<br>
	<br><h3>v0.12α 内测更新</h3><br>
	<li>修了8个bug<br>
	<br><h3>v0.11α 内测更新</h3><br>
	<li>更多卡牌,更多机制<br>
	<li>更新至18张卡<br>
	<br><h3>v0.1α 内测更新</h3><br>
	<li>完成了基础的战斗,奖励机制和精英怪<br>
	<li>更新至11张卡<br>
		`

let winText = ``

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}