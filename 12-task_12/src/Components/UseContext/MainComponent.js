import { createContext, useContext, } from "react";

const UserContext = createContext();

function MainComponent(props) {

  const state={
    "name":"Sania",
    "subject":"Math",
    "class": "7"
}

  return (
    <UserContext.Provider value={state}>
      {props.children}
<ChildComponentA />
    </UserContext.Provider>
  );
}

function ChildComponentA() {
  return (
    <div>
      <h1>ChildComponentA</h1>
          <ChildComponentB/>

    </div>
  );
}

function ChildComponentB() {
  return (
    <div>
      <h1>ChildComponentB</h1>
      <ChildComponentC />
    </div>
  );
}

function ChildComponentC() {
  return (
    <div>
      <h1>ChildComponentC</h1>
      <ChildComponentD />

    </div>
  );
}

function ChildComponentD() {
  const user = useContext(UserContext);
 
     return (
    <div>
        I am  {user.name}. My favourite is {user.subject} and I am study in class{user.class}
    </div>
    
  );
}

export default MainComponent