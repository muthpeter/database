  
   
   document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getData').onclick= () => {
     
    
     const proxyUrl ="http://localhost:3000/get"
     let j = 0 
      
     
     fetch(proxyUrl)
	    .then(response => response.json())
	    .then(data => {
		  
        
        document.getElementById('data').innerText = "Fetching data via proxy from http://137.184.113.181:8001/admin/"
        

         for (i = j; i<10; i++){
         
          document.getElementById(i+1).innerHTML = `<td id="id">${data[i].id}</td>
          <td id="address">${data[i].address}</td><td id="price">${data[i].price}</td>`
        
        
         }
      
	  })
         
    };
  });