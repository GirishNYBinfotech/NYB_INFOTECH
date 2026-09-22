const API_URL='https://jsonplaceholder.typicode.com/users'
let users=[]
let filteredUsers=[]
let favorites=JSON.parse(localStorage.getItem('favorites'))||[]
const usersContainer=document.getElementById('users')
const searchInput=document.getElementById('searchInput')
const loadBtn=document.getElementById('loadBtn')
const clearBtn=document.getElementById('clearBtn')
const loading=document.getElementById('loading')
const error=document.getElementById('error')
const empty=document.getElementById('empty')

const showLoading=message=>{
    loading.textContent=message
    error.textContent=''
    empty.textContent=''
}

const hideLoading=()=>{
    loading.textContent=''
}

const showError=message=>{
    error.textContent=message
    loading.textContent=''
    empty.textContent=''
}

const showEmpty=message=>{
    empty.textContent=message
    loading.textContent=''
    error.textContent=''
}

const saveFavorites=()=>{
    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const isFavorite=id=>favorites.includes(id)

const toggleFavorite=id=>{
    if(isFavorite(id)){
        favorites=favorites.filter(userId=>userId!==id)
    }
    else{
        favorites.push(id)
    }
    saveFavorites()
    renderUsers(filteredUsers)
}

const createUserCard=user=>{
    const card=document.createElement('div')
    card.className='card'
    const name=document.createElement('h3')
    name.textContent=user.name
    const email=document.createElement('p')
    email.textContent=`Email: ${user.email}`
    const city=document.createElement('p')
    city.textContent=`City: ${user.address.city}`
    const company=document.createElement('p')
    company.textContent=`Company: ${user.company.name}`
    const favoriteButton=document.createElement('button')
    favoriteButton.className='favorite'
    favoriteButton.textContent=isFavorite(user.id)?'Remove Favorite':'Add Favorite'
    favoriteButton.addEventListener('click',()=>toggleFavorite(user.id))
    const deleteButton=document.createElement('button')
    deleteButton.className='delete'
    deleteButton.textContent='Delete User'
    deleteButton.addEventListener('click',()=>deleteUser(user.id))
    card.append(name,email,city,company,favoriteButton,deleteButton)
    return card
}

const renderUsers=data=>{
    usersContainer.innerHTML=''
    if(data.length===0){
        showEmpty('No users found')
        return
    }
    empty.textContent=''
    data.forEach(user=>{
        usersContainer.appendChild(createUserCard(user))
    })
}

const fetchUsers=async()=>{
    try{
        showLoading('Loading users...')
        const response=await fetch(API_URL)
        if(!response.ok){
            throw new Error('Failed to fetch users')
        }
        users=await response.json()
        filteredUsers=[...users]
        hideLoading()
        renderUsers(filteredUsers)
    }
    catch(err){
    showError(err.message)
    }
}

const searchUsers=()=>{
    const searchValue=searchInput.value.toLowerCase().trim()
    filteredUsers=users.filter(user=>
    user.name.toLowerCase().includes(searchValue)||
    user.email.toLowerCase().includes(searchValue)||
    user.address.city.toLowerCase().includes(searchValue)
    )
    renderUsers(filteredUsers)
}

const deleteUser=async id=>{
    try{
        showLoading('Deleting user...')
        const response=await fetch(`${API_URL}/${id}`,{
            method:'DELETE'
        })
        if(!response.ok){
            throw new Error('Failed to delete user')
        }
        users=users.filter(user=>user.id!==id)
        filteredUsers=filteredUsers.filter(user=>user.id!==id)
        hideLoading()
        renderUsers(filteredUsers)
    }
    catch(err){
        showError(err.message)
    }
}
const clearFavorites=()=>{
    favorites=[]
    saveFavorites()
    renderUsers(filteredUsers)
}
searchInput.addEventListener('input',searchUsers)
loadBtn.addEventListener('click',fetchUsers)
clearBtn.addEventListener('click',clearFavorites)
fetchUsers()