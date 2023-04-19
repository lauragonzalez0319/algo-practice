//Time: O(n) (optimal) | Space: O(k) ; where n is the number of competitions and
//k is the number of teams

function tournamentWinner(competitions, results) {
  //Initialize leader and keep track of leader name and score as new 
  //scores are added into the map.
  //Find winner through results
  //Check if winner has more points than current leader. If yes, update leader.
  //Otherwise, leave leader as is.
  //return leader's name after looping through all competitions

  let scores = new Map();
  let leader = { name: '', score: -Infinity }

  for (let i = 0; i < competitions.length; i++) {
    const winnerIdx = results[i] === 0? 1: 0;
    const winner = competitions[i][winnerIdx];

    if (winner in scores) scores[winner] +=3;
    else scores[winner] = 3;

    if (leader.score < scores[winner]) {
      leader.name = winner;
      leader.score = scores[winner];
    }
  }

  return leader.name;
}