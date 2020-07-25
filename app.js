let list = document.querySelector('#list')

function add(){
    const item = document.querySelector('#add-item')
    
    const li = document.createElement('li')
    const liText = document.createTextNode(item.value)
    li.appendChild(liText)

    const del = document.createElement('button')
    const delText = document.createTextNode('DELETE')
    del.appendChild(delText)
    del.setAttribute('class','delcol')
    del.setAttribute('onclick','del(this)')
    li.appendChild(del)
 
    const edit = document.createElement('button')
    const editText = document.createTextNode('Edit')
    edit.appendChild(editText)
    li.appendChild(edit)
    del.setAttribute('onclick','edit(this)')
    list.appendChild(li)
}

function del(info){
    console.log(info+'hi')
    info.parentNode.remove()
}

function edit(){

}
