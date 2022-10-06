import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

const store = defineStore('users', {

    state: () => {
        return {
            users: [],
        }
    },
    actions: {  
        create(user) {
            this.users.push({
                id: uuid(),
                ...user, 

            });
        }, 
        delete(id) {
            this.users = this.users.filter(item => item.id !== del);
        }
    },
    getters: {
        usersByName(state) {
            const sortable = [...state.users];
            return sortable.sort((a, b) => a.name.localeCompare(b.name))
        }
    }
});

export default store;