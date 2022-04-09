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


function setdata(name, description, location, floor, rooms, area, rent, currency, vol){
    var numb = Math.floor(Math.random() * (1000000000 - 1 + 1) + 1);
    if(vol == 1){vol = true;}
    else{vol = false;}
    var isempty = false;
    if(name == ""){isempty = true}
    if(description == ""){isempty = true}
    if(location == ""){isempty = true}
    if(floor == ""){isempty = true}
    if(rooms == ""){isempty = true}
    if(area == ""){isempty = true}
    if(rent == ""){isempty = true}
    if(!isempty){
        firebase.database().ref("/").child("advertisement/" + numb + "/").update({
            area: area,
            currency: currency,
            description: description,
            floor: floor,
            hashnumber: numb,
            location: location,
            name: name,
            numberOfRooms: rooms,
            price: rent,
            volunteering: vol    
        })
        firebase.database().ref("/").child("advertisement/" + numb + "/creator/").update({
            name:"No12",
            phoneNumber:"+380966782978"
        })
    }else{
        alert("Заповніть всі поля!");
    }
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