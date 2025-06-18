import React from 'react';
import type { Sales } from './utils/salesData';

interface HotStoreProps extends Sales {
  address: string;
}

const HotStore: React.FC<HotStoreProps> = ({ store, price, address }) => {
  return (
    <div>
      {store}, {price}, {address}
    </div>
  );
};

export default HotStore;
