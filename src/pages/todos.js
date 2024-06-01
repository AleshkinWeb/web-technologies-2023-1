import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Form from "../components/form.js";
import api from "../services/api.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    // create POST /todo { description: string }

    const create = async (description) => {
        try {
            const response = await api('/todo', { method: 'POST', body: JSON.stringify({ description: description }) });
            return response;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    // get get /todo/1 - 1 это id

    const getId = async (id) => {
        try {
            const response = await api('/todo/' + id, { method: 'GET' });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    // getAll get /todo

    const getAll = async () => {
        try {
            const response = await api('/todo');
            return response.data;
        } catch (e) {
            console.log(e);
        }

    }

    // update put /todo/1 - 1 это id { description: string }

    const updateId = async (id, completed) => {
        try {
            const response = await api('/todo/' + id, { method: 'PUT', body: JSON.stringify({ completed: completed }) });
            return response;
        } catch (e) {
            console.log(e);
            return null;
        }

    }

    // delete delete /todo/1 - 1 это id

    const deleteId = async (id) => {
        try {
            return await api('/todo/' + id, { method: 'DELETE' });
        } catch (e) {
            console.log(e);
        }
    }

    const findElements = async () => {
        const todos = await getAll();
        document.querySelector('.todoContainer').innerHTML = '';
        loading.stop();
        todos.forEach(todo => {
            document.querySelector('.todoContainer').insertAdjacentElement("beforeend", createNewTodo(todo));
        });
    }

    function createNewTodo(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');
        todoCheckbox.checked = todo.completed;
        todoCheckbox.onchange = async function(e) {
            await updateStatusTodo(e, todo.id);
        }

        const todoDesc = document.createElement('span');
        todoDesc.classList.add('todo_description');
        todoDesc.innerText = todo.description;

        const todoButton = document.createElement('button');
        todoButton.classList.add('todo_but_remove');
        todoButton.innerText = 'Удалить';
        todoButton.addEventListener('click', async () => {
            await deleteId(todo.id);
            await findElements();
        })

        todoDiv.insertAdjacentElement("beforeend", todoCheckbox);
        todoDiv.insertAdjacentElement("beforeend", todoDesc);
        todoDiv.insertAdjacentElement("beforeend", todoButton);

        return todoDiv;
    }

    const updateStatusTodo = async(e, todoId) => {
        loading.start();
        const checkboxValue = e.target.checked;
        e.target.checked = !e.target.checked;
        const response = await updateId(todoId, checkboxValue);
        loading.stop();
        if (response) {
            e.target.checked = !e.target.checked;
        } else {
            console.log('Не удалось отправить запрос.');
        }
    }

    const form = document.getElementById('addForm');
    new Form(form, {
        'description': () => false,
    }, (values) => {
        addTodo(values.description);
    })

    const addTodo = async (desc) => {
        const response = await create(desc);
        if (response) {
            await getAll();
        } else {
            console.log('Ошибка добавления Todo');
        }
    }

    await findElements();

}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}