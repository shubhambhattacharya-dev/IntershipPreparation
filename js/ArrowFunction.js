//challenges:2
//Print numbers from 5 to 1, every 1 sec ,using arrow function

const countdown = () => {
  for (let i = 5; i >= 1; i--) {
    setTimeout(() => {
      console.log(i);
      if (i === 1) console.log("Go!");
    }, (6 - i) * 1000);
  }
};

countdown();
