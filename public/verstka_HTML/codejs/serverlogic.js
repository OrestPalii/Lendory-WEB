var firebaseConfig = {
    apiKey: "AIzaSyCPf1_9AlKYGFEF0nHn3c1IGH8BecVSeig",
    authDomain: "lendory-b5d8b.firebaseapp.com",
    databaseURL: "https://lendory-b5d8b-default-rtdb.firebaseio.com",
    projectId: "lendory-b5d8b",
    storageBucket: "lendory-b5d8b.appspot.com",
    messagingSenderId: "759222136421",
    appId: "1:759222136421:web:8c38d800bca06e1e6ce08c"
  };

  firebase.initializeApp(firebaseConfig);
  var score = 25;


function save(scoring){
    firebase.database().ref("/").child("score/").update({
        score: scoring
    })
}  
arr = []; 
var adv;
function getdata(){
    firebase.database().ref("advertisement").on('value', function(snapshot){
        snapshot.forEach(function(element){
            adv = element.val();
            arr.push(adv);
        });
    })
    alert(arr[3].area);
}