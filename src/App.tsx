import React, { FunctionComponent } from 'react';

function App() {
  return (
    <>
      <h1>Learning RTL</h1>
      <CustomInput />
    </>
  );
}

const CustomInput: FunctionComponent = (props) => {
  return (
    <>
      <input type="text" />
    </>
  );
}

export default App;
