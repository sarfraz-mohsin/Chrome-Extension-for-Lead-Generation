let myLeads = [];
const inputButton = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulel = document.getElementById('ul-el');  

console.log(ulel)

inputButton.addEventListener('click', function (){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLead()
})


function renderLead() {

    let listItems = ''
    for(let i=0; i<myLeads.length; i++){
        listItems +=    `<li>
                            <a href='${myLeads[i]}' target='_black'> 
                                ${myLeads[i]} 
                            </a>
                        </li>`
    }

    ulel.innerHTML = listItems;
}
