document.querySelector('.one').addEventListener('click', () => {
    //remove any
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#designers').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('one-slider');
    document.querySelector('.one').classList.add('bold');
    //remove hidden
    document.querySelector('#listings').classList.remove('hide');
  }); 
  
  document.querySelector('.two').addEventListener('click', () => {
    
    //remove any
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('two-slider');
    document.querySelector('.two').classList.add('bold');
    //remove hidden
    document.querySelector('#designers').classList.remove('hide');
  }); 
  
  document.querySelector('.three').addEventListener('click', () => {
    //remove any
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#designers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('three-slider');
    document.querySelector('.three').classList.add('bold');
    //remove hidden
    document.querySelector('#sellers').classList.remove('hide');
  }); 
  
  document.querySelector('.four').addEventListener('click', () => {
    //remove any slider
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#designers').classList.add('hide');
    //add-slider
    document.querySelector('.slider').classList.add('four-slider');
    //add-bold
    document.querySelector('.four').classList.add('bold');
    //remove hidden
    document.querySelector('#collections').classList.remove('hide');
  }); 


  //HEART ANIMATION

  // (function() {
  //   const heart = document.getElementById('heart');
  //   heart.addEventListener('click', function() {
  //     heart.classList.toggle('red');
  //     heart.classList.toggle('scale-in');
  //   });
  // })();

var like_button = document.getElementById("like-button");
if (like_button) {
    like_button.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

//Seperate buttons

var like_button_2 = document.getElementById("like-button-2");
if (like_button_2) {
    like_button_2.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_3 = document.getElementById("like-button-3");
if (like_button_3) {
    like_button_3.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_4 = document.getElementById("like-button-4");
if (like_button_4) {
    like_button_4.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_5 = document.getElementById("like-button-5");
if (like_button_5) {
    like_button_5.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_6 = document.getElementById("like-button-6");
if (like_button_6) {
    like_button_6.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_7 = document.getElementById("like-button-7");
if (like_button_7) {
    like_button_7.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}


var like_button_8 = document.getElementById("like-button-8");
if (like_button_8) {
    like_button_8.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_9 = document.getElementById("like-button-9");
if (like_button_9) {
    like_button_9.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_10 = document.getElementById("like-button-10");
if (like_button_10) {
    like_button_10.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_11 = document.getElementById("like-button-11");
if (like_button_11) {
    like_button_11.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_12 = document.getElementById("like-button-12");
if (like_button_12) {
    like_button_12.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_12 = document.getElementById("like-button-12");
if (like_button_12) {
    like_button_12.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_13 = document.getElementById("like-button-13");
if (like_button_13) {
    like_button_13.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}


var like_button_14 = document.getElementById("like-button-14");
if (like_button_14) {
    like_button_14.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}

var like_button_15 = document.getElementById("like-button-15");
if (like_button_15) {
    like_button_15.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}


var like_button_16 = document.getElementById("like-button-16");
if (like_button_16) {
    like_button_16.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart-o');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}