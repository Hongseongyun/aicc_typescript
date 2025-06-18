// let data = {
//   name: 'iphone',
//   category: 'Mobile',
//   specs: {
//     capacity: 'Mobile',
//     specs: {
//       capacity: 128,
//       color: 'Black',
//       weight: 150,
//     },
//   },
// };

export type SalesData = {
  name: string;
  category: string;
  specs: Specs;
  sales: Sales[];
};

export type Specs = {
  capacity: number;
  color: string;
  weight: number;
};

export type Sales = {
  store: string;
  price: number;
};
