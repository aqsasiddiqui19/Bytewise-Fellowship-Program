import React, { useState, useEffect } from "react";

function FetchAPI() {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({});
  
    const apiGet = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };

    const apiPost = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: inputs.title,
            body: inputs.body,
            userId: parseInt(inputs.userId),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      };

    const handleChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
          ...inputs,
    
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        apiPost();
        console.log(inputs);
      };
    useEffect(() => {
        apiGet();
     }, []);

     return (
        <div>

          <h1>FETCH API</h1>
          <button onClick={apiGet}>Fetch-API</button>
          <br />
          <div>
            <form onSubmit={handleSubmit} className="Input">
              <input
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
              />

              <br />

              <input
                type="text"
                name="body"
                placeholder="body"
                onChange={handleChange}
              />

              <br />
 
              <input
                type="number"
                name="userId"
                placeholder="userId"
                onChange={handleChange}
              />

              <br />
              <input type="submit" value="Submit" onChange={handleChange} />
            </form>
           
          </div>
          {<pre>{JSON.stringify(data, null, 3)}</pre>}

        </div>
      );

}
export default FetchAPI;
