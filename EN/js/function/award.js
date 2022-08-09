function awardmoney(){
	if(player.data.monster!=0){
		let money = Math.floor(Math.random() * 150)+40
		player.data.money_gif = new Decimal(money)
		player.data.money = player.data.money.add(money)
	}else{
		let money = Math.floor(Math.random() * 50)+20
		player.data.money_gif = new Decimal(money)
		player.data.money = player.data.money.add(money)
	}
	player.data.moneyaward = false
}

function awardcard(id1,id2){
	for(col=1;col<=id2;col++){
		let card = Math.floor(Math.random() * player.data.allcard)
		for(col2=0;col2<=player.data.allcard-1;col2++){
			if(card==18){
				col--
			}else if(card==col2){
				player.data[id1+col] = new Decimal(col2+1)
			}
		}
	}
	player.data.cardaward = false
}

function awardartifacts(){
	for(cao=0;cao<=0;cao++){
		let fabric = Math.floor((Math.random() * 100))+1
		if(fabric<=50){
			let sole = Math.floor((Math.random() * 1))
			if(sole==0){
				let getartifacts = Math.floor((Math.random() * player.data.all_Normal_Artifacts))
				player.data.Normal_Artifacts[getartifacts] = player.data.Normal_Artifacts[getartifacts].add(1)
			}
			if(sole==1){
				for(col=0;col<=0;col++){
					var cards = player.data.Normal_Artifacts_Sole
					var nothing = false
					for(row=0;row<=player.data.all_Normal_Artifacts_Sole;row++){
						if(cards[row].lte(0)){nothing = true}
					}
					let getartifacts = Math.floor((Math.random() * player.data.all_Normal_Artifacts_Sole))
					if(player.data.Normal_Artifacts_Sole[getartifacts].lte(0)&&nothing){
						player.data.Normal_Artifacts_Sole[getartifacts] = player.data.Normal_Artifacts_Sole[getartifacts].add(1)
					}else if(nothing==false){
						let getartifacts = Math.floor((Math.random() * player.data.all_Normal_Artifacts))
						player.data.Normal_Artifacts[getartifacts] = player.data.Normal_Artifacts[getartifacts].add(1)
					}else{
						cao--
					}
				}
			}
		}else if(fabric<=80){
			let sole = Math.floor((Math.random() * 2))
			if(sole==0){
				let getartifacts = Math.floor((Math.random() * player.data.all_Rare_Artifacts))
				player.data.Rare_Artifacts[getartifacts] = player.data.Rare_Artifacts[getartifacts].add(1)
			}
			if(sole==1){
				for(col=0;col<=0;col++){
					var cards = player.data.Rare_Artifacts_Sole
					var nothing = false
					for(row in cards){
						if(cards[row].lte(0)){nothing = true}
					}
					let getartifacts = Math.floor((Math.random() * player.data.all_Rare_Artifacts_Sole))
					if(player.data.Rare_Artifacts_Sole[getartifacts].lte(0)&&nothing){
						player.data.Rare_Artifacts_Sole[getartifacts] = player.data.Rare_Artifacts_Sole[getartifacts].add(1)
					}else if(nothing==false){
						let getartifacts = Math.floor((Math.random() * player.data.all_Rare_Artifacts))
						player.data.Rare_Artifacts[getartifacts] = player.data.Rare_Artifacts[getartifacts].add(1)
					}else{
						cao--
					}
				}
			}
		}else if(fabric<=95){
			let sole = Math.floor((Math.random() * 2))
			if(sole==0){
				let getartifacts = Math.floor((Math.random() * player.data.all_Super_Rare_Artifacts))
				player.data.Super_Rare_Artifacts[getartifacts] = player.data.Super_Rare_Artifacts[getartifacts].add(1)
			}
			if(sole==1){
				for(col=0;col<=0;col++){
					var cards = player.data.Super_Rare_Artifacts_Sole
					var nothing = false
					for(row in cards){
						if(cards[row].lte(0)){nothing = true}
					}
					let getartifacts = Math.floor((Math.random() * player.data.all_Super_Rare_Artifacts_Sole))
					if(player.data.Super_Rare_Artifacts_Sole[getartifacts].lte(0)&&nothing){
						player.data.Super_Rare_Artifacts_Sole[getartifacts] = player.data.Super_Rare_Artifacts_Sole[getartifacts].add(1)
					}else if(nothing==false){
						let getartifacts = Math.floor((Math.random() * player.data.all_Super_Rare_Artifacts))
						player.data.Super_Rare_Artifacts[getartifacts] = player.data.Super_Rare_Artifacts[getartifacts].add(1)
					}else{
						cao--
					}
				}
			}
		}else{
			let sole = Math.floor((Math.random() * 2))
			if(sole==0){
				let getartifacts = Math.floor((Math.random() * player.data.all_Ultra_Rare_Artifacts))
				player.data.Ultra_Rare_Artifacts[getartifacts] = player.data.Ultra_Rare_Artifacts[getartifacts].add(1)
			}
			if(sole==1){
				for(col=0;col<=0;col++){
					var cards = player.data.Ultra_Rare_Artifacts_Sole
					var nothing = false
					for(row in cards){
						if(cards[row].lte(0)){nothing = true}
					}
					let getartifacts = Math.floor((Math.random() * player.data.all_Ultra_Rare_Artifacts_Sole))
					if(player.data.Ultra_Rare_Artifacts_Sole[getartifacts].lte(0)&&nothing){
						player.data.Ultra_Rare_Artifacts_Sole[getartifacts] = player.data.Ultra_Rare_Artifacts_Sole[getartifacts].add(1)
					}else if(nothing==false){
						let getartifacts = Math.floor((Math.random() * player.data.all_Ultra_Rare_Artifacts))
						player.data.Ultra_Rare_Artifacts[getartifacts] = player.data.Ultra_Rare_Artifacts[getartifacts].add(1)
					}else{
						cao--
					}
				}
			}
		}
	}
	player.data.artifactsaward = false
}
