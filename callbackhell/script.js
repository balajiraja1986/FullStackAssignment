let count = 10;
let countdownDiv = document.getElementById("countdown");

setTimeout(function() {
  countdownDiv.innerHTML = count;
  setTimeout(function() {
    count--;
    countdownDiv.innerHTML = count;
    setTimeout(function() {
      count--;
      countdownDiv.innerHTML = count;
      setTimeout(function() {
        count--;
        countdownDiv.innerHTML = count;
        setTimeout(function() {
          count--;
          countdownDiv.innerHTML = count;
          setTimeout(function() {
            count--;
            countdownDiv.innerHTML = count;
            setTimeout(function() {
              count--;
              countdownDiv.innerHTML = count;
              setTimeout(function() {
                count--;
                countdownDiv.innerHTML = count;
                setTimeout(function() {
                  count--;
                  countdownDiv.innerHTML = count;
                  setTimeout(function() {
                    countdownDiv.innerHTML = "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

  