import $ from "jquery";

export default function run() {
  let cardOne, cardTwo, matchedCard, disableDeck;

  const cardElemnt = `
  <li class="card">
    <div class="view front-view">
      <span class="material-icons">question_mark</span>
    </div>
    <div class="view back-view">
      <img src="" alt="card-img">
    </div>               
  </li>`;

  $(document).ready(function () {
    $(".cards").html(cardElemnt.repeat(16));

    shuffletCard();

    function flipCard(e) {
      let clickedCard = e.target;
      if (clickedCard !== cardOne && !disableDeck) {
        $(clickedCard).addClass("flip");
        if (!cardOne) {
          return (cardOne = clickedCard);
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = $(cardOne).find("img").attr("src");
        let cardTwoImg = $(cardTwo).find("img").attr("src");

        matchCards(cardOneImg, cardTwoImg);
      }
      if(clickedCard === cardOne) {
        $(cardOne).removeClass('flip')
        return cardOne = undefined
      }
    }

    function matchCards(img1, img2) {
      if (img1 === img2) {
        matchedCard++;
        if (matchedCard == 8) {
          setTimeout(() => {
            return shuffletCard();
          }, 1000);
        }
        $(cardOne).off();
        $(cardTwo).off();
        cardOne = cardTwo = undefined;
        disableDeck = false;
        return;
      }
      setTimeout(() => {
        $(cardOne).addClass("shake");
        $(cardTwo).addClass("shake");
      }, 400);
      setTimeout(() => {
        $(cardOne).removeClass("flip shake");
        $(cardTwo).removeClass("flip shake");
        cardOne = cardTwo = undefined;
        disableDeck = false;
      }, 1000);
    }

    function shuffletCard() {
      cardOne = cardTwo = undefined;
      matchedCard = 0;
      disableDeck = false;

      var arr = [];
      for (var i = 1; i <= 8; i++) {
        arr.push(i, i);
      }
      arr.sort(() => (Math.random() < 0.5 ? 1 : -1));
      console.log(arr);
      $(".card").each(function (index, element) {
        $(element).removeClass("flip");
        $(element).find("img").attr("src", `files/img-${arr[index]}.png`);
        $(element).on("click", function (e) {
          flipCard(e);
        });
      });
    }
  });
}