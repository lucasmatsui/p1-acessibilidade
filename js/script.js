

font = (caracteristica) => {

  const titleBanner = document.querySelector(".titleBanner");
  const subTitle = document.querySelector(".subTitle");
  const textButton = document.querySelector(".textButton");

  let tamanhoFontTitle = parseInt(window.getComputedStyle(titleBanner).fontSize);
  let tamanhoFontSubTitle = parseInt(window.getComputedStyle(subTitle).fontSize);
  let tamanhoFontTextButton = parseInt(window.getComputedStyle(textButton).fontSize);


  console.log(tamanhoFontTextButton);
  
  
  if(caracteristica === 'aumentar' ) {
    titleBanner.style.fontSize = (tamanhoFontTitle + 2) + "px";
    subTitle.style.fontSize = (tamanhoFontSubTitle + 2) + "px";
    textButton.style.fontSize = (tamanhoFontTextButton + 2) + "px";
  }

  if(caracteristica === 'diminuir') {
    titleBanner.style.fontSize = (tamanhoFontTitle - 2) + "px";
    subTitle.style.fontSize = (tamanhoFontSubTitle - 2) + "px";
    textButton.style.fontSize = (tamanhoFontTextButton - 2) + "px";
  }

  if(caracteristica === 'normal') {
    titleBanner.style.fontSize = "64px";
    subTitle.style.fontSize = "28px";
    textButton.style.fontSize = "16px";
  } 

}

