function Game() { };

Game.prototype.handleNetwork = function(socket) {
  this.socket = socket;
}

Game.prototype.handleLogic = function() {
  
}

Game.prototype.handleGraphics = function(gfx) {
  gfx.fillStyle = '#fbfcfc';
  gfx.fillRect(0, 0, screenWidth, screenHeight);

  gfx.fillStyle = '#2ecc71';
  gfx.strokeStyle = '#27ae60';
  gfx.font = 'bold 50px Verdana';
  gfx.textAlign = 'center';
  gfx.lineWidth = 2;
  gfx.fillText(this.nick, screenWidth / 2, screenHeight / 2);
  gfx.strokeText(this.nick, screenWidth / 2, screenHeight / 2);
}

Game.prototype.setNick = function(nick) {
  this.socket.emit('set nick', { nick: nick });
  this.nick = nick;
}
