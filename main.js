// coding challenge....

// jhon and Mike both play basketball in different teams. In the latest 3 games, Jhon's team scored 89, 120, and 103 points,
//  while Mike's team scored 116, 94, and 123 points.

// 1- calculate the average score for each team.

// 2- decide which teams wins in average ( highest average score), and print the winner to the console.

// 3- then change the scores to show different winners.

// don't forget to take into account there might be a draw ( the same average score).

// 4- Extra: Mary also plays basketball, and her team scored 97, 134 and 105 points. like before,
//  log the average winner to the console.
//  HINT: you will need the && operator to take the decision. 

// 5- like before, change the scores to generate different winners, keeping in mind there might be draws.


let JhonTeam = (116 + 94 + 123) / 3;
let MikeTeam = (89 + 120 + 103) / 3;
let MaryTeam = (97 + 134 + 105) / 3;


if (JhonTeam > MikeTeam) {
    console.log("The winner is Jhon's team with score of" + JhonTeam + " points");
} else if(MikeTeam > JhonTeam) {
    console.log("The winner is Mike's team with score of" + MikeTeam + "points");

} else {
    console.log("there is a draw");
};


if(JhonTeam > MikeTeam && JhonTeam > MaryTeam) {
    console.log("The winner is Jhon's team with score of" + JhonTeam + " points");
} else if (MikeTeam > JhonTeam && MikeTeam > MaryTeam) {
    console.log("The winner is Mike's team with score of" + MikeTeam + "points");

} else if(MaryTeam > JhonTeam && MaryTeam > MikeTeam) {
    console.log("The winner is Mary team with scaore of" + MaryTeam + "points");
} else {
    console.log("there is a draw");

};