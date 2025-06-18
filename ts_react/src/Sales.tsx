import type { SalesData } from './utils/salesData';

// const Sales = ({ data }: { data: SalesData }) => {
//   return <div>{data.name}</div>;
// };

interface SalesProps {
  data: SalesData;
  changeData(): void;
}

const Sales: React.FC<SalesProps> = ({ data, changeData }) => {
  return <div>{data.name}</div>;
};

export default Sales;
