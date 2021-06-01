import axios from "axios";

//Your API key is(Images):21872021-de688e9cfaf53d124bb8f01aa

//Your API key is(Articles): a51c0bea7bca4770a81532058948c588
const instanceLockal = axios.create({
    baseURL: "http://localhost:3000/",
})

const instanceArticles = axios.create({
    headers:{
        Authorization:"Bearer a51c0bea7bca4770a81532058948c588"
    }
})



export const colorsApi = {
    fetchColors() {
        return instanceLockal.get("colors").then(({
            data
        }) => data)
    }
}

export const feedbackApi = {
    fetchFeedback() {
        return instanceLockal.get('feedback').then(({
            data
        }) => data)
    },

    updateFeedback(update) {
        return instanceLockal
            .patch('feedback', update)
            .then(({
                data
            }) => data)
    }
}


export const phonebookApi = {
    fetchContacts() {
        return instanceLockal
            .get("contacts").then(({
                data
            }) => data)
    },

    addContact(contact) {
        return instanceLockal
            .post('contacts', contact)
            .then(({
                data
            }) => data)

    },

    deleteContact(contactId) {
        return instanceLockal.delete(`contacts/${contactId}`)
    },
}

export const profileApi = {

    fetchUser() {

        return instanceLockal.get("user").then(({
            data
        }) => {
            return data
        })
    }

}

export const todosApi = {
    fetchTodos() {
        return instanceLockal
            .get("todos")
            .then(({
                data
            }) => data)
    },

    updateTodo(todoId, update) {
        return instanceLockal
            .patch(`todos/${todoId}`, update)
            .then(({
                data
            }) => data)
    },

    deleteTodo(todoId) {
        return instanceLockal
            .delete(`todos/${todoId}`)
    },

    createTodo(todo) {
        return instanceLockal.post("todos", todo)
            .then(({
                data
            }) => data)
    },

}


export const tabsApi = {
    fetchTabs() {
        return instanceLockal.get("tabs").then(({
            data
        }) => data);
    }
}

export const articlesApi = {

    fetchArticles(query,page) {
       return instanceArticles
            .get(`https://newsapi.org/v2/everything?q=${query}&from=2021-05-15&sortBy=publishedAt&pageSize=5&page=${page}`)
            .then(({data: {articles}}) => {
                return articles
            })
    }
}


export const galleryApi = {
   
    fetchImages (query="ocean", page=1){
        
        return axios
            .get(`https://pixabay.com/api/?q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=21872021-de688e9cfaf53d124bb8f01aa`)
            .then(responce=>{
                return responce.data.hits
            })
}
    }
    