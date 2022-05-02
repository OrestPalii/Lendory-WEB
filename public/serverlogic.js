
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
    input1.accept="image/jpeg,image/png,image/gif"
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
    input2.accept='.jpg, .jpeg, .png';
    
    
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
    input3.accept='.jpg, .jpeg, .png';
    
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
    input4.accept='.jpg, .jpeg, .png';
    
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
    input5.accept='.jpg, .jpeg, .png';
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
   
  var d = new Date();
  var millisecondsSince1970 = d.valueOf();
  if(vol==1){
    rent=0;
  }
    if(vol == 1){vol = true;}
    else{vol = false;}
        firebase.database().ref("/").child("advertisement/" + numb + "/").update({
            area: parseInt(area),
            currency: currency,
            description: description,
            floor: parseInt(floor),
            hashnumber: String(numb),
            location: location,
            name: name,
            numberOfRooms: parseInt(rooms),
            price: parseInt(rent),
            volunteering: vol,
            time:   millisecondsSince1970
        })

        getUsername();
        firebase.database().ref("/").child("advertisement/" + numb + "/creator/").update({
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
      firebase.database().ref("advertisement").on('value', function(snapshot){
        snapshot.forEach(function(element){
          adv = element.val();
          allAdv.push(adv);
          });
      })
  }

  var currentAdv;
  function getCurrentAdv(code, adv_name,adv_price, adv_area,adv_numberofrooms, adv_floor,user_name,phoneNumber,adv_description,adv_location,adv_isvol, 
    adv_main_photo, adv_second_photo, adv_third_photo, adv_fourth_photo, popup_main, popup_1, popup_2, popup_3,main_prev,main_next,
    popup_1_next, popup_2_next ,background,advertreview_body,your_img){
    firebase.database().ref("advertisement/" + code).on('value', function(snapshot){
      currentAdv = snapshot.val();
      if(currentAdv == null){
        window.location = "404.html";
      }
      else{
        adv_name.innerText = currentAdv.name;
        adv_price.innerText= "Ціна: "+ currentAdv.price + currentAdv.currency;
        adv_area.innerText = currentAdv.area + " кв.м";
        adv_numberofrooms.innerText="Кімнат: "+currentAdv.numberOfRooms;
        adv_floor.innerText = "Поверх: " + currentAdv.floor;
        user_name.innerText = currentAdv.creator.name;
        phoneNumber.innerText=currentAdv.creator.phoneNumber;
        adv_description.innerText=currentAdv.description;
        adv_location.innerText = currentAdv.location;
        adv_isvol.innerText =currentAdv.volunteering;
        adv_main_photo.src = currentAdv.images[0]
        popup_main.src = currentAdv.images[0];
            // CHANGE STYLES
      if(currentAdv.volunteering){ //for free adverts
        adv_price.innerText= "Безкоштовно";
        background.style.background='url("https://firebasestorage.googleapis.com/v0/b/lendory-b5d8b.appspot.com/o/ui%2Fgreen_background.png?alt=media&token=7ce381f6-9286-4ad9-8c39-88856fcf922d") no-repeat';
        advertreview_body.style.background='url(https://firebasestorage.googleapis.com/v0/b/lendory-b5d8b.appspot.com/o/ui%2Fbackground_for_free_advert_advertreview_page.png?alt=media&token=f10f575f-b15b-4e66-a9b0-cba08bfd3cd1)no-repeat'
        advertreview_body.style.backgroundSize="cover";
        background.style.backgroundSize="cover";
        adv_price.style.color='#60CFD2';
        adv_area.style.color='#60CFD2';
        adv_numberofrooms.style.color='#60CFD2';
        adv_floor.style.color='#60CFD2';
        adv_location.style.color='#60CFD2';
        user_name.style.color='#60CFD2';
        phoneNumber.style.color='#60CFD2';
        your_img.style.borderColor='#60CFD2'
          }else{        //for paid adverts
            background.style.background='url("https://firebasestorage.googleapis.com/v0/b/lendory-b5d8b.appspot.com/o/ui%2Fblue_gradient_for_block.jpeg?alt=media&token=f78f9984-1773-41c4-9573-98eecc3228dc") no-repeat ';
            background.style.backgroundSize="cover";
            advertreview_body.style.background='url(https://firebasestorage.googleapis.com/v0/b/lendory-b5d8b.appspot.com/o/ui%2Fbackground_for_advertreview.jpg?alt=media&token=02ee92e6-7dcb-4f4f-95dc-a48ecfc8eced)no-repeat'
            advertreview_body.style.backgroundSize="cover";
            adv_price.style.color='#7d6bc5';
            adv_area.style.color='#7d6bc5';
            adv_numberofrooms.style.color='#7d6bc5';
            adv_floor.style.color='#7d6bc5';
            adv_location.style.color='#7d6bc5';
            user_name.style.color='#7d6bc5';
            phoneNumber.style.color='#7d6bc5';
            your_img.style.borderColor='#7d6bc5'
          }
      if(currentAdv.images[1]){
          adv_second_photo.src = currentAdv.images[1]
          popup_1.src = currentAdv.images[1]
      }
      else{
        adv_second_photo.remove();
        popup_1.remove();
        main_next.remove();
        main_prev.remove();
       }
        if(currentAdv.images[2]){
          adv_third_photo.src = currentAdv.images[2]
          popup_2.src = currentAdv.images[2]
        }
        else{
        adv_third_photo.remove();
        popup_2.remove();
        popup_1_next.remove();
        main_prev.remove();
        }
          if(currentAdv.images[3]){
            adv_fourth_photo.src = currentAdv.images[3]
            popup_3.src = currentAdv.images[3]
          }
          else{
            adv_fourth_photo.remove();
            popup_3.remove();
            main_prev.remove();
            popup_2_next.remove();
          }  
    }
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

function getAdvInfo(code, adv_name, adv_loc, adv_floor, adv_rooms, adv_area, adv_price, adv_currency, adv_vol, adv_description, 
  main_photo, second_photo, third_photo, fourth_photo){
  firebase.database().ref("advertisement/" + code).on('value', function(snapshot){
    currentAdv = snapshot.val();
    if(currentAdv == null){
      window.location = "404.html";
      //alert("Такого оголошення не існує");
    }
    else{
      adv_name.value = currentAdv.name;
      adv_loc.value = currentAdv.location;
      adv_floor.value = currentAdv.floor;
      adv_rooms.value = currentAdv.numberOfRooms;
      adv_area.value = currentAdv.area;
      adv_price.value = currentAdv.price;
      adv_currency.value = currentAdv.currency;
      adv_vol.value = currentAdv.volunteering;
      adv_description.value = currentAdv.description;
      main_photo.src = currentAdv.images[0];
      if(currentAdv.images[1]){
        second_photo.src = currentAdv.images[1]   
      }
        if(currentAdv.images[2]){
          third_photo.src = currentAdv.images[1]   
      }
        if(currentAdv.images[3]){
          fourth_photo.src = currentAdv.images[1]   
      }
    }   
  })
 } 
 
 function get_user_info( user_name, user_phone){
  getUsername();
  //firebase.database().ref("profiles/" + phonenumber).on('value', function(snapshot){
    
    user_name.innerText = currentUser.name;
    user_phone.innerText = currentUser.phonenumber;
   
  // })
  
 }


