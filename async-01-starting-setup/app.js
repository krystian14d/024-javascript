const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Timer done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(timerData, posData);
  }
  // getPosition()
  // .then((posData) => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .catch(err => {
  //   console.log(err);
  //   return 'there was an error...';
  // })
  // .then(data => {
  //   console.log(data, positionData);
  // });
  // setTimer(1000).then(() => {
  //   console.log('Timer done!');
  // });
  // console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

//zwroci do .then() wynik tej funkcji, która się szybciej wykona:
Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log(data);
}); 

//zwraca promise jako rezultat, ale wynikiem są połączone dane Promises przekazanych w tablicy
//albo wszystkie się wykonają (resolved), albo przynajmniej jedna promise jest rejected
Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
}); 

//zwraca promise jako rezultat, ale wynikiem są połączone dane Promises przekazanych w tablicy
//zwraca wynik wszystkich przekazanych promises, nie ważne czy zakończyły się powodzeniem czy błędem
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
}); 

// let result = 0;

// for (let i = 0; i < 300000000; i++){
//   result+=i;
// }

// console.log(result);
