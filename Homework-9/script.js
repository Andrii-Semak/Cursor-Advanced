
function generateBlocks(){
    let parent = document.getElementById('parent');

    for (let i=0; i<25; i++) {
     let div = document.createElement('div'); 
     div.classList.add("box")
     div.style = "background-color: " + '#' + (Math.random().toString(16) + '000000').substring(2,8);
     parent.appendChild(div);
    }
   }

generateBlocks()

//Advanced

function generateBlocksInterval(){
    let parentAdvanced = document.getElementById('parentAdvanced');
    
     for (let i=0; i<25; i++) {
      let div = document.createElement('div'); 
      div.classList.add("box")
      div.style = "background-color: " + '#' + (Math.random().toString(16) + '000000').substring(2,8);
      setInterval(() => {
        div.style = ("background-color: " + '#' + (Math.random().toString(16) + '000000').substring(2,8)), 1000;
      }, 1000);
      parentAdvanced.appendChild(div);
     }    
    }
    
generateBlocksInterval()