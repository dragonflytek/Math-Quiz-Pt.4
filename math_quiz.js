player1_Name = localStorage.getItem("Player_1");
player2_Name = localStorage.getItem("Player_2");

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1_name").innerHTML = player1_Name + " : ";
document.getElementById("player2_name").innerHTML = player2_Name + " : ";

document.getElementById("player1_score").innerHTML = player1_Score;
document.getElementById("player2_score").innerHTML = player2_Score;

document.getElementById("player_question").innerHTML = " Question Turn - " + player1_Name;
document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_Name;

answer_turn = "player1";
question_turn = "player2";

function send(){
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    actual_answer = num1*num2;

    question_word = "<h4>" + num1 + " x "+ num2 +"</h4>";
    input_box = "<br> Answer : <input type='text' id='check_box'> ";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button> <br>";
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

function check(){
    get_answer = document.getElementById("check_box").value;
    console.log("the answer - " + actual_answer);
    if (get_answer == actual_answer){
        if (answer_turn == "player1"){
            player1_Score = player1_Score + 1;
            document.getElementById("player1_score").innerHTML = player1_Score;
        }
        else{
            player2_Score = player2_Score + 1;
            document.getElementById("player2_score").innerHTML = player2_Score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = " Question Turn - " + player2_Name;
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = " Question Turn - " + player1_Name;
    }

    if (answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_Name;
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = " Answer Turn - " + player1_Name;
    }
    document.getElementById("output").innerHTML = "";
    console.log("Player 1 score - " + player1_Score);
    console.log("Player 2 score - " + player2_Score);
}
