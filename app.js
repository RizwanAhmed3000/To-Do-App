//GETTING ALL ELEMENTS
const alertBox = document.querySelector('.alertBox')
// console.log(alertBox)
const inputValue = document.querySelector('.inputValue')
// console.log(inputValue)
const submitBtn = document.querySelector('.submitBtn')
// console.log(submitBtn)
const listArea = document.querySelector('.listArea')
// console.log(listArea)

const itemArray = []
let increment = 0;


function addItem() {
    if (inputValue.value !== "") {
        alertBox.textContent = "Item Added"
        alertBox.classList.remove('visibility')
        alertBox.classList.add('green')
        const string = `<div class="listItems ${increment++}">
        <ul>
            <li>${inputValue.value}</li>
        </ul>
        <div class="icons">
            <i class="fa-regular fa-pen-to-square" style="color: #5c8ee6; cursor: pointer;"></i>
            <i class="fa-solid fa-trash" style="color: #ff3d3d; cursor: pointer;"></i>
        </div>
    </div>
</div>`
        itemArray.push(string)
        inputValue.value = ""
    }
    else {
        alertBox.classList.remove('visibility')
        alertBox.classList.add('red')
    }
    listArea.innerHTML = itemArray.join("")
    const deleteBtns = document.querySelectorAll('.fa-trash')
    // console.log(deleteBtn)
    deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click', (e)=>{
            // e.target.parentNode.parentNode.remove()
            const elementText = e.currentTarget.parentNode.parentNode
            const index = itemArray.find((item)=> item === elementText)
            console.log(elementText)
            console.log(itemArray)
            // console.log(index)

        })
    })
}


submitBtn.addEventListener('click', addItem)
