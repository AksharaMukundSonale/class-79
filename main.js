friend = [];
function submit(){
    var n1 = document.getElementById("friend1").value;
    var n2 = document.getElementById("friend2").value;
    var n3 = document.getElementById("friend3").value;
    var n4 = document.getElementById("friend4").value;
    
    friend.push(n1);
    friend.push(n2);
    friend.push(n3);
    friend.push(n4);

    console.log(friend);

    document.getElementById("Output").innerHTML=friend;
    document.getElementById("SubmitBTN").style.display="none";
    document.getElementById("SortBTN").style.display="inline-block";
}