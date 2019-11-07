import React from 'react';
import { render } from '@testing-library/react'
// import { Provider } from 'react-redux';
// import store from '../store';

const AllTheProviders = ({ children }) => {
  return (  <div>
        {/*   <Provider store={store}> */}
                    {children}
        {/*    </ Provider>  */}
        </div>
  );
}

const customRender = (ui) => render(ui, { wrapper: AllTheProviders});

// re-export everything
export * from '@testing-library/react';

export { create, act } from 'react-dom/test-utils';

// override render method
export { customRender as render };