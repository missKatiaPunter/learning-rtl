import React, { FunctionComponent } from 'react';

function App() {
  return (
    <>
      <h1>Learning RTL</h1>
      <CustomInput>
        Input some text in this textbox
      </CustomInput>
      <p>You typed</p>
    </>
  );
}

const CustomInput: FunctionComponent = (props) => {
  const { children } = props;
  return (
    <>
      <label htmlFor="custom_input">{ children }</label>
      <input id="custom_input" type="text" />
    </>
  );
}

export default App;
