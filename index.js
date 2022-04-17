  
   
   document.addEventListener('DOMContentLoaded',function(){
    
    
    let tableID = 0 

    let scribe = () => {
        for (i=0; i < 10; i++){
            document.getElementById(i+1).innerHTML = `<td id="id">${fetchedData[tableID].id}</td>
            <td id="address">${fetchedData[tableID].address}</td><td id="price">${fetchedData[tableID].price}</td>`
            tableID++
        }
        console.log(`tableID : ${tableID}`)
    }
    const proxyUrl ="http://localhost:3000/get"
    let fetchedData 
    document.getElementById('getData').onclick= () => {
        tableID = 0
        fetch(proxyUrl)
	    .then(response => response.json())
	    .then(data => {
	    fetchedData = data
        document.getElementById('data').innerText = "Fetching data via proxy from http://137.184.113.181:8001/admin/"
    
        scribe()
        
      
	  })
         
    };
    document.getElementById('back').onclick = () =>{
        
      
           if (tableID > 19) {tableID = tableID - 20
           
            scribe()
           }
    
    
    };
    document.getElementById('forward').onclick = () =>{
        scribe()
    }
  });