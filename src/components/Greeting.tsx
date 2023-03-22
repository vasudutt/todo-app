import { useEffect, useState } from 'react';

const data = [
  [22, 'Working Late'],
  [18, 'Good Evening'],
  [12, 'Good Afternoon'],
  [5, 'Good Morning'],
  [0, 'Whoa, Early bird'],
];

function Greeting() {
  const [greeting, setGreeting] = useState('Good Morning!');

  useEffect(() => {
    const hr = new Date().getHours();

    for (var i = 0; i < data.length; i++) {
      if (hr >= data[i][0]) {
        setGreeting(data[i][1].toString());
        break;
      }
    }
  }, []);

  return <h1 className=" mt-6 text-left text-3xl">{greeting}</h1>;
}

export default Greeting;
