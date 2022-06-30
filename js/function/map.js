function layernew(){
	showTab('map')
	player.data.newmap = true
}

function remap(){
	for(row=1;row<=7;row++){
		for(col=1;col<=9;col++){
			let map = Math.floor((Math.random() * 100))+1
			if(map<=80){
				player.map['mapy'+row+'x'][col] = new Decimal(0)
				//怪物82%
			}else if(map<=82){
				player.map['mapy'+row+'x'][col] = new Decimal(1)
				//精英怪8%
			}else if(map<=92){
				player.map['mapy'+row+'x'][col] = new Decimal(4)
				//营火4%
			}else if(map<=96){
				player.map['mapy'+row+'x'][col] = new Decimal(2)
				//商店4%
			}else if(map<=98){
				player.map['mapy'+row+'x'][col] = new Decimal(3)
				//宝箱2%
			}else if(map<=99){
				player.map['mapy'+row+'x'][col] = new Decimal(5)
				//白洞1%
			}else if(map<=100){
				player.map['mapy'+row+'x'][col] = new Decimal(6)
				//黑洞1%
			}
		}
	}
}

function mapfirst(id,id2,id3){
	if(player.map['mapy'+id+'x'][id2-id3].eq(0)){
		return '怪物'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(1)){
		return '精英怪'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(2)){
		return '宝箱'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(3)){
		return '商店'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(4)){
		return '营火'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(5)){
		return '白洞'
	}else if(player.map['mapy'+id+'x'][id2-id3].eq(6)){
		return '黑洞'
	}
	
}

function maptit(id){
	if(id>=10 && id<20){
		return mapfirst(1,id,10)
	}
	if(id>=20 && id<30){
		return mapfirst(2,id,20)
	}
	if(id>=30 && id<40){
		return mapfirst(3,id,30)
	}
	if(id>=40 && id<50){
		return mapfirst(4,id,40)
	}
	if(id>=50 && id<60){
		return mapfirst(5,id,50)
	}
	if(id>=60 && id<70){
		return mapfirst(6,id,60)
	}
	if(id>=70 && id<80){
		return mapfirst(7,id,70)
	}
}

function mapcan(x,y,id){
	if((id-20)==(x) || (id-20)==(x.sub(1)) || (id-20)==(x.add(1))){return true}else{return false}
}

function maponc(id){
	player.a.ha5 = new Decimal(0)
	player.a.ha8 = new Decimal(0)
	player.data.level = player.data.level.add(1)
	if(player.map['mapy2x'][id-20].eq(0)){
		player.data.monster = new Decimal(0)
	levelnew()
	}else if(player.map['mapy2x'][id-20].eq(1)){
		player.data.monster = new Decimal(Math.floor((Math.random() * 7)) + 1)
		levelnew()
	}else if(player.map['mapy2x'][id-20].eq(2)){
		awardartifacts()
	}else if(player.map['mapy2x'][id-20].eq(3)){
		store_card()
		showTab('store')
	}else if(player.map['mapy2x'][id-20].eq(4)){
		showTab('campfire')
		player.a.ha8 = new Decimal(1)
	}else if(player.map['mapy2x'][id-20].eq(5)){
		let a =  new Decimal(Math.floor((Math.random() * 4)))
		player.data.level = player.data.level.sub(a).min(0)
		player.a.ha6 = new Decimal(1)
	}else if(player.map['mapy2x'][id-20].eq(6)){
		remap()
		player.a.ha7 = new Decimal(1)
	}
	if((id-20)==(player.map.x)){
		
	}else if((id-20)==(player.map.x.sub(1))){
		player.map.x = player.map.x.sub(1)
	}else if((id-20)==(player.map.x.add(1))){
		player.map.x = player.map.x.add(1)
	}
	for(row=1;row<=6;row++){
		for(col=1;col<=9;col++){
			player.map['mapy'+row+'x'][col] = player.map['mapy'+(row+1)+'x'][col]
		}
	}
	for(col=1;col<=9;col++){
		let map = Math.floor((Math.random() * 100))+1
		if(map<=80){
			player.map['mapy7x'][col] = new Decimal(0)
			//怪物82%
		}else if(map<=88){
			player.map['mapy7x'][col] = new Decimal(1)
			//精英怪8%
		}else if(map<=92){
			player.map['mapy7x'][col] = new Decimal(4)
			//营火4%
		}else if(map<=96){
			player.map['mapy7x'][col] = new Decimal(2)
			//商店4%
		}else if(map<=98){
			player.map['mapy7x'][col] = new Decimal(3)
			//宝箱2%
		}else if(map<=99){
			player.map['mapy7x'][col] = new Decimal(5)
			//白洞1%
		}else if(map<=100){
			player.map['mapy7x'][col] = new Decimal(6)
			//黑洞1%
		}
	}
}

function mapsty(id){
	let realx = 0
	let realy = 0
	if(id>=10 && id<20){
		realx = id-10
		realy = 1
	}
	if(id>=20 && id<30){
		realx = id-20
		realy = 2
	}
	if(id>=30 && id<40){
		realx = id-30
		realy = 3
	}
	if(id>=40 && id<50){
		realx = id-40
		realy = 4
	}
	if(id>=50 && id<60){
		realx = id-50
		realy = 5
	}
	if(id>=60 && id<70){
		realx = id-60
		realy = 6
	}
	if(id>=70 && id<80){
		realx = id-70
		realy = 7
	}
	if((id-10) == player.map.x){
		return "#CE0000"
	}else if(player.map['mapy'+realy+'x'][realx].eq(1)){
		return "#801b1b"
	}else if(player.map['mapy'+realy+'x'][realx].eq(2)){
		return "#fff200"
	}else if(player.map['mapy'+realy+'x'][realx].eq(3)){
		return "#00ff88"
	}else if(player.map['mapy'+realy+'x'][realx].eq(4)){
		return "#fe9750"
	}else if(player.map['mapy'+realy+'x'][realx].eq(5)){
		return "#c3c3c3"
	}else if(player.map['mapy'+realy+'x'][realx].eq(6)){
		return "#585858"
	}else{
		return player.data.themes_light==true ? mapcan(player.map.x,player.map.y,id) ? '#000000' : '#aaaaaa' : mapcan(player.map.x,player.map.y,id) ? '#FFFFFF' : '#666666'
	}
}

