    // toggle button
    document
    .getElementById("btn-show-hide")
    .addEventListener("click", function () {
      const text = document.getElementById("text");
      const toggleButton = document.getElementById("btn-show-hide");
      if (text.style.display == "none") {
        text.style.display = "block";
        toggleButton.textContent = "Hide list";
      } else {
        text.style.display = "none";
        toggleButton.textContent = "Show list";
      }
    });

  // Dynamic list
  const pieash = ["Ahmed", "khan", "rahman", "esrita", "jasnit"];

  const addLi = (array) => {
    const container = document.getElementById("container");
    for (let element of array) {
      let li = document.createElement("li");
      // console.log(element);
      li.innerHTML += element;
      container.appendChild(li);
    }
    // console.log(container);
  };
  // addLi(pieash);

  // Dynamic list by ol for array
  const pieash2 = ["Ahmed", "khan", "rahman", "esrita", "jasnit"];

  const addLiArray = (array) => { 
    const container = document.createElement("ol");
    for (let element of array) {
      let li = document.createElement("li");
      // console.log(element);
      li.innerHTML += element;
      container.appendChild(li);
    }
    return container;
  };
  // const result = addLi2(pieash2);
  // document.getElementById("show-ol").appendChild(result);

  const addLiObject = (object) => {
    const container = document.createElement("ol");
    for (let element in object) {
      let li = document.createElement("li");
      // console.log(element);
      li.innerHTML += element;
      container.appendChild(li);
    }
    // console.log(container);
    return container;
  };
  

  // Dynamic list by ol for object

  const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/ai/tool/12")
      .then((res) => res.json())
      .then((data) => showDetails(data.data));
  };
  loadData();
  const showDetails = (data) => {
    // console.log(data);
    const { integrations,pricing } = data;
    // addLiObject()
    // addLiArray(integrations)
    // console.log(integrations);
    const showData = document.getElementById('show-details')
    

    showData.innerHTML = `
      <h3>Pieash</h3>
      <h3>integrations</h3>
      <div class="w-25 mx-auto" id="container-details"></div>
      <div class="w-25 mx-auto" >
      <ul class="pricing"></ul>
      <ul class="pricing"></ul>
      </div>
    `;
    //integrations
    if(integrations === null){
        document.getElementById('container-details').innerHTML=`<p>No data found</p>`
    }else{
        document.getElementById('container-details').appendChild(addLiArray(integrations))
    }
    //pricing
    if(pricing === null){
        document.querySelectorAll('.pricing').innerHTML +=`<p>Free of cost</p>`
    }else{
        pricing.forEach(element => {
            console.log(element);
            document.getElementById('pricing').innerHTML +=`<li> Plan: ${element.plan}, Price: ${element.price} <li>`
        });
    }

    
  };