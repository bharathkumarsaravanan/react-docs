# Experimenting with `createPortal` in React

createPortal is the Api which provided by react to create a popups. We have to create a modal element and send it to this api and we have to select the container where we have to render this portal. It will append the element to that container. 

[Documentation](https://react.dev/reference/react-dom/createPortal)

```javascript
import React from "react";
import { createPortal } from "react-dom";

const CreatePortal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const ModalContent = () => {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.2)",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            padding: "5px 15px",
            background: "white",
          }}
        >
          <h1>Modal</h1>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>click me</button>
      {showModal &&
        createPortal(<ModalContent />, document.getElementById("portal"))}
    </>
  );
};

export default CreatePortal;
 
```
Here i have given the modal content to render and i selecting the element which is having the id as portal. i have created this element in the index.html file.

> index.html
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <div id="portal"></div>
  </body>
</html>
```