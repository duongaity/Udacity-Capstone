import axios from 'axios'

const API_BASE_URL = "http://localhost:4000/api/todos"

const TodoService = {

    findAll() {
        return axios.get(API_BASE_URL)
    },

    findById(id) {
        return axios.get(`${API_BASE_URL}/id/${id}`)
    },

    save(params) {
        const config = {
            headers: {
              "content-type": "application/json"
            }
        }
        return axios.post(API_BASE_URL, params, config)
    }

}

export default TodoService