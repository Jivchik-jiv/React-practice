import axios from "axios";



//Your API key is: a51c0bea7bca4770a81532058948c588
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.common['Authorization'] = "Bearer a51c0bea7bca4770a81532058948c588";

export const colorsApi = {
    fetchColors() {
        return axios.get("colors").then(({
            data
        }) => data)
    }
}

export const feedbackApi = {
    fetchFeedback() {
        return axios.get('feedback').then(({
            data
        }) => data)
    },

    updateFeedback(update) {
        return axios
            .patch('feedback', update)
            .then(({
                data
            }) => data)
    }
}


export const phonebookApi = {
    fetchContacts() {
        return axios
            .get("contacts").then(({
                data
            }) => data)
    },

    addContact(contact) {
        return axios
            .post('contacts', contact)
            .then(({
                data
            }) => data)

    },

    deleteContact(contactId) {
        return axios.delete(`contacts/${contactId}`)
    },
}

export const profileApi = {

    fetchUser() {

        return axios.get("user").then(({
            data
        }) => {
            return data
        })
    }

}

export const todosApi = {
    fetchTodos() {
        return axios
            .get("todos")
            .then(({
                data
            }) => data)
    },

    updateTodo(todoId, update) {
        return axios
            .patch(`todos/${todoId}`, update)
            .then(({
                data
            }) => data)
    },

    deleteTodo(todoId) {
        return axios
            .delete(`todos/${todoId}`)
    },

    createTodo(todo) {
        return axios.post("todos", todo)
            .then(({
                data
            }) => data)
    },

}


export const tabsApi = {
    fetchTabs() {
        return axios.get("tabs").then(({
            data
        }) => data);
    }
}

export const articlesApi = {

    fetchArticles(query,page) {
       return axios
            .get(`https://newsapi.org/v2/everything?q=${query}&from=2021-05-15&sortBy=publishedAt&pageSize=5&page=${page}`)
            .then(({data: {articles}}) => {
                return articles
            })
    }
}