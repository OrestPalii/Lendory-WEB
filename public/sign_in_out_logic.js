//when user want to create new advertsement, function check is he logged in
function adv_create_user_check(){
  currentUser = null;
  let keepLoggedIn = localStorage.getItem("keepLoggedIn");

  if(keepLoggedIn == "yes"){
    currentUser = JSON.parse(localStorage.getItem('user'));
  }

  else{
    currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  if(currentUser==null){
    window.location = "SignIn.html";
  }
  else{
    window.location = "advert.html";
  }
  }

  function advert_page_loading(){
    currentUser = null;
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");
  
    if(keepLoggedIn == "yes"){
      currentUser = JSON.parse(localStorage.getItem('user'));
    }
  
    else{
      currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
  
    if(currentUser==null){
      window.location = "SignIn.html";
    }
    
    }

   

      