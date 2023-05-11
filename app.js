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
}



function editItem(uId){

    const listAreaArray = Array.from(listArea.children)
    const filteredArray = listAreaArray.filter((item) => {
        return item.id === uId
    })
    const indexNumber = itemArray.findIndex((item)=> item.includes(uId))

    const remainingItems = listAreaArray.filter((item) => {
        return item.id !== uId
    })
    itemArray = remainingItems.map((singleItem) =>{

        return `<div id="${singleItem.id}" class="listItems">
        <ul>
        <li>${singleItem.querySelector('li').textContent}</li>
        </ul>
        <div class="icons">
        <i onclick="editItem('${singleItem.id}')" class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
            <i onclick="deleteItem('${singleItem.id}')" class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
            </div>
            </div>
            </div>`
    })

    console.log(itemArray)
    let itemForEdit = prompt("Enter the value")
    filteredArray[0].children[0].children[0].textContent = itemForEdit
    const toFormate = filteredArray.map((singleItem) =>{

        return `<div id="${singleItem.id}" class="listItems">
        <ul>
        <li>${singleItem.querySelector('li').textContent}</li>
        </ul>
        <div class="icons">
        <i onclick="editItem('${singleItem.id}')" class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
            <i onclick="deleteItem('${singleItem.id}')" class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
            </div>
            </div>
            </div>`
    })
    itemArray.splice(indexNumber, 0, toFormate)
}

submitBtn.addEventListener('click', addItem)
