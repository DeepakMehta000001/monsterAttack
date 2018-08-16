new Vue({
	el: '#app',
  data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		gameLogs : []
  },
	methods: {
		startGame: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.gameLogs = [];
		},

		attack: function(){
			var damage = this.calculateDamage(3,10);
			this.monsterHealth -= damage;
			this.gameLogs.push('PLAYER HITS MONSTER FOR '+ damage)

			if(this.checkWin()){
				return;
			}
			damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;		
			this.gameLogs.push('MONSTER HITS PLAYER FOR '+ damage)
			this.checkWin();
		},

		specialAttack: function(){
			var damage = this.calculateDamage(7,15);
			this.monsterHealth -= damage;
			this.gameLogs.push('PLAYER HITS MONSTER FOR '+ damage)
			if(this.checkWin()){
				return;
			}

			damage = this.calculateDamage(3,10);
			this.playerHealth -= damage;
			this.gameLogs.push('MONSTER HITS PLAYER FOR '+ damage)
			this.checkWin();
		},

		heal: function(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			}else{
				this.playerHealth = 100;
			}
		},

		giveUp: function(){
			this.gameIsRunning = false;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},

		calculateDamage: function(min, max){
			return  Math.max(Math.floor(Math.random() * max) + 1, min)
		},

		checkWin: function(){
			if(this.monsterHealth <= 0){
					if(confirm('You won! New Game?')){
							this.startGame();
						} else {
								this.gameIsRunning = false;
						}
					return true;
			}else if (this.playerHealth <= 0){
					if(confirm('You lost! New Game?')){	
								this.startGame();
						} else {
								this.gameIsRunning = false;
						}
					return true;
			}
			return false;
		}
	}
});
