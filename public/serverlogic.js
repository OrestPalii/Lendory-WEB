//Initialising firebase
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
//Arrays for images uploading
var files1 = [];
var files2 = [];
var files3 = [];
var files4 = [];
var files5 = [];
//images uploading functions
function first_img_upload(){
    var reader1 = new FileReader();
    var myimg1 = document.getElementById("first");
    var input1 = document.createElement('input');
    input1.type = 'file';
    
    input1.onchange = e =>{
      files1 = e.target.files;
      reader1.readAsDataURL(files1[0]);
    }
    
    reader1.onload = function(){
      myimg1.src = reader1.result;    
    }
      
      input1.click();
}

function second_img_upload(){
    var reader2 = new FileReader();
    var myimg2 = document.getElementById("second");
    var input2 = document.createElement('input');
    input2.type = 'file';
    
    input2.onchange = e =>{
      files2 = e.target.files;
      reader2.readAsDataURL(files2[0]);
    }
    
    reader2.onload = function(){
      myimg2.src = reader2.result;    
    }
      
      input2.click();
}

function third_img_upload(){
    var reader3 = new FileReader();
    var myimg3 = document.getElementById("third");
    var input3 = document.createElement('input');
    input3.type = 'file';
    
    input3.onchange = e =>{
      files3 = e.target.files;
      reader3.readAsDataURL(files3[0]);
    }
    
    reader3.onload = function(){
      myimg3.src = reader3.result;    
    }
      
      input3.click();
}

function fourth_img_upload(){
    var reader4 = new FileReader();
    var myimg4 = document.getElementById("fourth");
    var input4 = document.createElement('input');
    input4.type = 'file';
    
    input4.onchange = e =>{
      files4 = e.target.files;
      reader4.readAsDataURL(files4[0]);
    }
    
    reader4.onload = function(){
      myimg4.src = reader4.result;    
    }
      
      input4.click();
}

function fifth_img_upload(){
    var reader5 = new FileReader();
    var myimg5 = document.getElementById("fifth");
    var input5 = document.createElement('input');
    input5.type = 'file';
    
    input5.onchange = e =>{
      files5 = e.target.files;
      reader5.readAsDataURL(files5[0]);
    }
    
    reader5.onload = function(){
      myimg5.src = reader5.result;    
    }
      
      input5.click();
}

//data inserting function
function setdata(name, description, location, floor, rooms, area, rent, currency, vol, numb){
   
    
    if(vol == 1){vol = true;}
    else{vol = false;}
        firebase.database().ref("/").child("advertisementtest/" + numb + "/").update({
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

        getUsername();
        firebase.database().ref("/").child("advertisementtest/" + numb + "/creator/").update({
            name: currentUser.name,
            phoneNumber: currentUser.phonenumber
        })

        //inserting images numbers
        // firebase.database().ref("/").child("advertisementtest/" + numb + "/images/").update({
        //     0: imgarray[0],
        //     1: imgarray[1],
        //     2: imgarray[2],
        //     3: imgarray[3],
        // })

        //fields cleaning
         name_box.value ='';
         description_box.value = '';
         location_box.value = ''; 
         floor_box.value = ''; 
         rooms_box.value = ''; 
         area_box.value = ''; 
         rent_box.value = ''; 
         currency.value = ''; 
         option.value = '';
    } 

  allAdv = []; 
  var adv;
  function getdata(){
      firebase.database().ref("advertisementtest").on('value', function(snapshot){
        snapshot.forEach(function(element){
          adv = element.val();
          allAdv.push(adv);
          });
          
      })
  }

var currentAdv;
function getCurrentAdv(code){
  firebase.database().ref("advertisementtest/" + code).on('value', function(snapshot){
    currentAdv = snapshot.val();
    if(currentAdv == null){
      window.location = "404.html";
      //alert("Такого оголошення не існує");
    }
    else
      alert(currentAdv.name);
  })
}

var currentUser = null;

      function getUsername(){
        let keepLoggedIn = localStorage.getItem("keepLoggedIn");

        if(keepLoggedIn == "yes"){
          currentUser = JSON.parse(localStorage.getItem('user'));
        }

        else{
          currentUser = JSON.parse(sessionStorage.getItem('user'));
        }
      }