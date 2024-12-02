const iGrid = document.getElementById("itemGrid");
const gridSmall = document.getElementById("g1");
const gridLarge = document.getElementById("g1");

const gridItems = document.querySelectorAll("#itemGrid #item");



function changeGrid(){

    gridSmall.onclick = function(e){
        iGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';

        gridItems.forEach(item => {
            item.style.width = "10vw";
            item.style.height = "15vw";
        });
    }

};

changeGrid();