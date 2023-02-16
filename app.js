// getting value from the input field
const itemsAdded = document.querySelector("#ItemAdded")
const itemdiv = document.querySelector(".itemsInDiv")
 const ulTask =document.querySelector("#ul_task")

// create a constructor to store the item in the input date and if done
function StoredInfo(task, date, state) {
    this.taskItem = task;
    this.taskDate = date;
    this.taskStatus = state;
    
}
//set local storage for the array using a function
function setlocalStorage(toDoItems ) {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
}

//get items from local storage to feed our list
const getLocalStorage = function () {
    const toDoStorage = localStorage.getItem("toDoItems")
    //to check if item is in local storage
    if (toDoStorage=== null||toDoStorage === "undefined") {
        toDoItems = []
    }
    else {
        toDoItems = JSON.parse(toDoStorage)
        
    }
    console.log("items are", toDoItems);
    getList(toDoItems)
//consultt about this line
}
// display data from the local storage to the ui of the app
const getList = function (toDoItems) {
    ulTask.innerHTML = ""
    if (toDoItems.length > 0) {
        toDoItems.forEach((item) => {
            let liTag = `<li
            id="li_items"
            style="
              max-width: 500px;
              margin-top: 10px;
              border-bottom: 1px solid black;
              padding-bottom: 10px;
            "
          >
            <span
              class="li_div"
              style="display: flex; justify-content: space-between"
            >
              <div class="taskName">${item.taskItem}</div>
              <div class="actionDiv">
                <button class="btn2" id="btn">EDIT</button
                ><button class="btn2" id="btn">ADD</button
                ><button class="btn2" id="btn">REMOVE</button>
              </div>
            </span>
          </li>
            `;
            ulTask.insertAdjacentHTML("beforeend",liTag)
        });
    }
    
}

let toDoItems = []// array to store the object items

const values = function (a, b) {
  return  a * b

}
document.addEventListener('DOMContentLoaded',()=>{
submitItem.addEventListener("click", () => {
    
    if (itemsAdded.value.length===0) {
        alert("Please enter task")
    }
    else {
        
        const taskDetails = new StoredInfo(itemsAdded.value,new Date().toDateString(), "false")
      
        
            toDoItems.push(taskDetails)
            console.log(toDoItems);
         setlocalStorage(toDoItems)// callng the setlocalstorage after the items is pushed in array
         
        
        
        
       
    }

    
   
    
    

})
getLocalStorage()
})