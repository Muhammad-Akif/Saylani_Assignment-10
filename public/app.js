let list = document.querySelector('#list')

function add(){
    const item =  document.querySelector('#add-item')
    const li = document.createElement('li')
    const liText = document.createTextNode(item.value)
    item.value = ''
    const delBtn = document.createElement('button')
    const delText = document.createTextNode('DELETE')
    delBtn.appendChild(delText)
    const editBtn = document.createElement('button')
    const editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)   
    
    li.appendChild(liText)
    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)

    delBtn.setAttribute('class','del')
    editBtn.setAttribute('class','edit')
    delBtn.setAttribute('onclick','del(this)')
    editBtn.setAttribute('onclick','edit(this)')
}

function del(e){
    e.parentNode.remove()
}

function edit(e){
    // console.log(e.parentNode.childNodes.nodeValue)
    const val = prompt('Enter New Text',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}

function delAll(){
    list.innerHTML = ''
}

