// ************ Themes ************
var themes = ["default","light","lightblue","aqua"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#404040",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	lightblue: {
		1: "#a0d5e6",
		2: "#a0d5e6",
		3: "#a0d5e6",
		color: "#000000",
		points: "#000000",
		locked: "#a0d5e6",
		background: "#a0d5e6",
		background_tooltip: "rgba(255, 255, 255, 0.75)",
	},
	light: {
		1: "#000000",
		2: "#000000",
		3: "#000000",
		color: "#000000",
		points: "#000000",
		locked: "#c4a7b3",
		background: "#f7f7f7",
		background_tooltip: "rgba(255, 255, 255, 0.75)",
	},
}

function changeTheme() {
	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}

function getThemeName() {
	return options.theme? options.theme : "default";
}

function CNThemeName(){
	theme0 = options.theme=="default" ? "经典" : ""
	theme1 = options.theme=="aqua" ? "海蓝" : ""
	theme2 = options.theme=="TheGameTree" ? "游戏树特殊页面" : ""
	theme3 = options.theme=="lightblue" ? "亮蓝" : ""
	theme4 = options.theme=="light" ? "纯白" : ""
	return theme0 + theme1 + theme2 + theme3 + theme4
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index ++;
		options.theme = themes[index];
	}
	changeTheme();
	resizeCanvas();
}