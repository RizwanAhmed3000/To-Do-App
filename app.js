//GETTING ALL ELEMENTS
const alertBox = document.querySelector('.alertBox')
// console.log(alertBox)
const inputValue = document.querySelector('.inputValue')
// console.log(inputValue)
const submitBtn = document.querySelector('.submitBtn')
// console.log(submitBtn)
const listArea = document.querySelector('.listArea')
// console.log(listArea)
let itemArray = []

function addItem() {
    if (inputValue.value !== "") {

        const uniqueId = new Date().getTime()
        // console.log(uniqueId)
        
        const string = `<div id="${uniqueId}" class="listItems">
        <ul>
        <li>${inputValue.value}</li>
        </ul>
        <div class="icons">
        <i onclick="editItem('${uniqueId}')" class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
            <i onclick="deleteItem('${uniqueId}')" class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
            </div>
            </div>
            </div>`
            itemArray.push(string)
        alertMessage(`${inputValue.value} is added`, "green")
        inputValue.value = ""
    }
    else {
        alertMessage("Please enter the value", "red")
    }
    listArea.innerHTML = itemArray.join("")
}

function alertMessage(message, color){
    // console.log(alertBox.textContent)
    alertBox.textContent = message
    alertBox.classList.remove('visibility')
    alertBox.classList.add(`${color}`)
    setTimeout(()=>{
        alertBox.classList.add('visibility')
        alertBox.classList.remove(`${color}`)
    }, 2000)
}

function deleteItem(uId){

    const indexNumber = itemArray.findIndex((item)=> item.includes(uId))
    console.log(indexNumber)
    itemArray.splice(indexNumber, 1)
    listArea.innerHTML = itemArray.join("")
    alertMessage(`Item removed`, 'red')
    // const listAreaArray = Array.from(listArea.children)
    // // console.log(listAreaArray)
    // const filteredArray = listAreaArray.filter((item) => {
    //     return item.id !== uId
    // })
    // // console.log(filteredArray)
    // itemArray = filteredArray.map((singleItem) =>{
        
    //     return `<div id="${singleItem.id}" class="listItems">
    //     <ul>
    //     <li>${singleItem.querySelector('li').textContent}</li>
    //     </ul>
    //     <div class="icons">
    //     <i onclick="editItem('${singleItem.id}')" class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
    //         <i onclick="deleteItem('${singleItem.id}')" class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
    //         </div>
    //         </div>
    //         </div>`
    // })
}

function editItem(uId){

    submitBtn.textContent = "Edit"
    const intoArray = Array.from(listArea.children)
    console.log(intoArray)

    const filteredArray = intoArray.filter((item)=> item.id === uId)
    inputValue.value = filteredArray[0].children[0].children[0].textContent

    submitBtn.removeEventListener("click", addItem)
    submitBtn.addEventListener("click", ()=> editingProcess(uId))
    // return

}

function editingProcess(uId){
    const indexNumber = itemArray.findIndex((item)=> item.includes(uId))
    console.log(indexNumber, `==>${uId}`)
    // console.log(itemArray)
    itemArray.splice(indexNumber, 1, `<div id="${uId}" class="listItems">
    <ul>
    <li>${inputValue.value}</li>
    </ul>
    <div class="icons">
    <i onclick="editItem('${uId}')" class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
        <i onclick="deleteItem('${uId}')" class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
        </div>
        </div>
        </div>`)

    // console.log(itemArray)
    listArea.innerHTML = itemArray.join("")
    inputValue.value = ""
    submitBtn.textContent = "Submit"
    alertMessage(`Item edited`, 'green')
    submitBtn.removeEventListener("click", editingProcess)
    // submitBtn.addEventListener("click", addItem)
    // return

}



submitBtn.addEventListener('click', addItem)
