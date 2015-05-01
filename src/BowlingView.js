function Bowling(){
  this.rolls = [];
}

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins)
};

$(document).ready(function(){
  var bowling = new Bowling();

  $('#score').text(bowling.score);


});
