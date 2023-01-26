const char = [
    {
      name: "Giliriel",
      title: "- A Reicida",
      lore: "A Rainha dos Assassinos ou a Assassina de Rainhas, uma lenda entre aqueles que contratavam seus serviços. Ela nunca falhava em suas missões, tendo assassinado vários líderes e reis ao longo dos anos, tornando-se temida e respeitada em todos os reinos.",
      qualities: ["Meticulósa", "Destemida"],
      defects: ["Instável", "Traiçoeira", "Letal", "Astuta", "Desalmada"],
      image:
        "https://i.pinimg.com/564x/75/38/86/753886bc3102d23eb37d479807e36733.jpg"
    },
    {
      name: "Tebastis",
      title: "- O Muramento",
      lore: "Um demônio com uma cidade nas costas? É foi o que eu vi. A terra toda tremia em ritimo por um segundo me vi no inferno. Seu nome ou o que faz não importa, se ve-lo, fuja!",
      qualities: ["Lenda Viva", "Cidade Estado"],
      defects: ["Mostruosidade", "Demonio", "Colosso", "Inumano", "Abominável"],
      image:
        "https://i.pinimg.com/564x/b9/89/4c/b9894cf0fe3957fea9a580a0e74b4463.jpg"
    },
    {
      name: "Lato e Lambo",
      title: "- O Garoto e a Maldição",
      lore: "Um ser pequeno e esperto que vivia nas profundezas da floresta e uma criatura assustadora, com pele grossa de pedra e uma força descomunal. Juntos, eles viviam em um pequeno acampamento nas profundezas da floresta, onde Lato ensinava Lambo a se comportar de maneira mais sutil e Lambo protegia Lato de qualquer ameaça. ",
      qualities: ["Amigável", "Divertido", "Leal", "Sobrevivente", "Orfão"],
      defects: ["Saqueadores", "Instável"],
      image:
        "https://i.pinimg.com/564x/ef/e7/71/efe7715ffb7cd39c10bd91e619c5f250.jpg"
    },
    {
      name: "Jaxsus",
      title: "- O FURTA COVAS",
      lore: "Jaxsus, o Rei. Jaxsus, o Profanador, Jaxsus, das flores. São apenas algumas das muitas atribuições da recompensa mais alta viva. O jovem ladrão de covas é procurado por cada rei, por cada imperador dessa terra. ",
      qualities: ["Lenda Viva", "Divertido"],
      defects: ["Traiçoeiro", "Ganancioso", "Cleptomaníaco", "Egoísta"],
      image:
        "https://i.pinimg.com/564x/bb/43/ac/bb43ac940b8e36a04e6a64e9b02aa57b.jpg"
    }
  ];
  
  var charName = document.querySelector(".char-name");
  var charTitle = document.querySelector(".char-title");
  var charImage = document.querySelector(".char-image");
  var charLore = document.querySelector(".char-lore");
  var charChar = document.querySelector(".char-char");
  
  function generateChar() {
    let randomNumber = Math.floor(Math.random() * 4);
    charName.innerText = char[randomNumber].name;
    charTitle.innerText = char[randomNumber].title;
    charLore.innerText = char[randomNumber].lore;
    charImage.src = char[randomNumber].image;
  
    charChar.innerHTML = "";
  
    for (var i = 0; i < char[randomNumber].qualities.length; i++) {
      charChar.innerHTML += `<button class="success">${char[randomNumber].qualities[i]}</button>`;
    }
  
    for (var i = 0; i < char[randomNumber].defects.length; i++) {
      charChar.innerHTML += `<button class="danger">${char[randomNumber].defects[i]}</button>`;
    }
  }
  
  generateChar();
  