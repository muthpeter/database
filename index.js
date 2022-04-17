  
   
   document.addEventListener('DOMContentLoaded',function(){
    
    let fetchedData 
    
    let tableID = 0 
    const proxyUrl ="http://localhost:3000/get"
    fetch(proxyUrl)
    .then(response => response.json())
    .then(data => {
    fetchedData = data
    document.getElementById('data').innerText = "Fetching data via proxy from http://137.184.113.181:8001/admin/"

    scribe()
     
    })
  
    //lists 10 element of the fetchedData array of objects

    let scribe = () => {
        for (i=0; i < 10; i++){
            document.getElementById(i+1).innerHTML = `<td id="id">${fetchedData[tableID].id}</td>
            <td id="address">${fetchedData[tableID].address}</td><td id="price">${fetchedData[tableID].price}</td>`
            tableID++
        }
        console.log(`tableID : ${tableID}`)
    }
    
   
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

    document.getElementById('priceUp').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => a.price - b.price)
        scribe()

    }
    document.getElementById('priceDown').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => b.price - a.price)
        scribe()

    }
    document.getElementById('addressUp').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => {
            let fa = a.address.toLowerCase(),
            fb = b.address.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
        }
        )
        scribe()

    }
    document.getElementById('addressDown').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => {
            let fa = a.address.toLowerCase(),
            fb = b.address.toLowerCase();
    
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
        }
        )
        scribe()

    }   
    document.getElementById('idUp').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => a.id - b.id)
        scribe()

    }
    document.getElementById('idDown').onclick = () =>{
        //sort the array by adress, list the first 10
        tableID = 0
        fetchedData.sort((a,b) => b.id - b.id)
        scribe()

    }
  });