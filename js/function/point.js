function ResetPoint(){
	let poi4 = new Decimal(0)
	/*
	for(col=1;col<=player.data.all_Normal_Artifacts;col++){
		poi4 = poi4.add(player.data.Normal_Artifacts[col].mul(20))
	}
	for(col2=1;col2<=player.data.all_Rare_Artifacts;col++){
		poi4 = poi4.add(player.data.Rare_Artifacts[col2].mul(50))
	}
	for(col3=1;col3<=player.data.all_Super_Rare_Artifacts;col++){
		poi4 = poi4.add(player.data.Super_Rare_Artifacts[col3].mul(120))
	}
	for(col4=1;col4<=player.data.all_Ultra_Rare_Artifacts;col++){
		poi4 = poi4.add(player.data.Ultra_Rare_Artifacts[col4].mul(250))
	}
	for(col5=1;col5<=player.data.all_Normal_Artifacts_Sole;col++){
		poi4 = poi4.add(player.data.Normal_Artifacts[col5].mul(20))
	}
	for(col6=1;col6<=player.data.all_Rare_Artifacts_Sole;col++){
		poi4 = poi4.add(player.data.Rare_Artifacts_Sole[col6].mul(50))
	}
	for(col7=1;col7<=player.data.all_Super_Rare_Artifacts_Sole;col++){
		poi4 = poi4.add(player.data.Super_Rare_Artifacts_Sole[col7].mul(120))
	}
	for(col8=1;col8<=player.data.all_Ultra_Rare_Artifacts_Sole;col++){
		poi4 = poi4.add(player.data.Ultra_Rare_Artifacts_Sole[col8].mul(250))
	}
	*/
	let poi1 = player.data.level.mul(1000)
	let poi2 = player.data.money.mul(15)
	let poi3 = player.data.hpmax.div(15).add(player.data.mpmax.div(4.5)).add(player.data.psmax.div(0.45))
	let poi8 = player.data.maxcard.mul(80)
	player.point.points = new Decimal(poi1).add(poi2).add(poi3).add(poi4).add(poi8).floor()
	if(player.point.points.gte(player.point.tob_points)){
		player.point.tob_points = new Decimal(player.point.points)
	}
	player.point.last_points = new Decimal(player.point.points)
	/*player.talent_crystal.points = player.talent_crystal.points.add(player.point.points.div(10000).floor())*/
	layerDataReset('data')
	layerDataReset('mil')
	showTab('none')
}