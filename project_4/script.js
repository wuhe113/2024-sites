function addTimeLine(){
    for (let i = 0; i < 150; i++){
        
        let gridDiv = document.getElementById("data1");
        let newDiv = document.createElement("div");

        newDiv.classList.add("timeLine");

        gridDiv.appendChild(newDiv);


    }
}

addTimeLine();


let songContainer = document.getElementById("songs");

let sheetID = "1eAH9DMUyqK7w9UeGloszZTbSucD-TmKSmfhR5CD_TCc";
let tabName = "Sheet1";
let myURL = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

async function getData() {

  try {
  
    let response = await fetch(myURL);
    let data = await response.json();
    
    // Loop through each row
    for(let dataPoint of data){
    console.log(dataPoint)
    
    // Do something with each dataPoint here
    let newDiv2 = document.createElement("div");
    songContainer.appendChild(newDiv2);

    newDiv2.classList.add("songName");

    newDiv2.innerHTML = '${dataPoint.song}';
    
    }
  
  } catch(error) {
    console.error(error);
  }
  
}

getData();