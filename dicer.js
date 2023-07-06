
  var firstRandomNumber = Math.floor((Math.random()*6))+1; //retunrs random number btwn 1 and 6
    var firstRandomImage = "dice"+firstRandomNumber+".png"; //sets the name for first random dice image
    var firstImgSrc = "./images/"+firstRandomImage;
    document.querySelectorAll("img")[0].setAttribute("src",firstImgSrc);
    
    var secondRandomNumber = Math.floor((Math.random()*6))+1; //retunrs random number btwn 1 and 6
    var secondRandomImage = "dice"+secondRandomNumber+".png"; //sets the name for second random dice image
    var secondImgSrc = "./images/"+secondRandomImage;
    document.querySelectorAll("img")[1].setAttribute("src",secondImgSrc);
    
    if(firstRandomNumber > secondRandomNumber){
        document.querySelector("h1").innerHTML = "Dango 1 is true Dango !";
    }else if(firstRandomNumber < secondRandomNumber){
        document.querySelector("h1").innerHTML = "Dango 2 is true Dango !";
    }else {
        document.querySelector("h1").innerHTML = "Both are truly Dangos !";
    }
