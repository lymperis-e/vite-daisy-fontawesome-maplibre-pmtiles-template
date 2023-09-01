import React, { useContext } from 'react';
import {DataContext} from '@/context/DataContext';

function LoaderTop() {
  const { dataLoading } = useContext(DataContext);

  if ( !dataLoading ) return null;

  return (
      <div
        className='animate-pulse h-1 bg-secondary transition-all duration-200 absolute z-50 w-full top-0 '
      ></div>
  );
}

export default LoaderTop;
