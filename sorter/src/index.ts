import SlothSorter from './SlothSorter';

const sorter = new SlothSorter([10, -7, 22, 15]);
console.log(sorter.sort());

// const osrterStr = new SlothSorter('dubu', 'yuki', 'soju')
// console.log(sorter.sort());

let data: string | number[];

function isString(data: string | number[]): data is string {
  return (<string>data).split !== undefined;
}

if (typeof data === 'string') {
}

data = 'TypeSript';
if (isString(data)) {
  data.split('');
} else {
  //number[]
}
