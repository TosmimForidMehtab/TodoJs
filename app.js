const todoInput = document.querySelector( ".todo-input" );
const todoButton = document.querySelector( ".todo-button" );
const todoList = document.querySelector( ".todo-list" );
const filterOptions = document.querySelector( ".filter-todo" );

todoButton.addEventListener( "click", addTodo );
todoList.addEventListener( "click", deleteCheck );
filterOptions.addEventListener( "click", filterTodo );

function addTodo ( event )
{
    event.preventDefault();
    // console.log("Hello");

    const todoDiv = document.createElement( "div" );
    todoDiv.classList.add( "todo" );

    const newTodo = document.createElement( "li" );
    newTodo.classList.add( "todo-item" );
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild( newTodo );

    // Checked
    const completedButton = document.createElement( "button" );
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add( "complete-btn" );
    todoDiv.appendChild( completedButton );

    // Delete
    const trashButton = document.createElement( "button" );
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add( "delete-btn" );
    todoDiv.appendChild( trashButton );

    todoList.appendChild( todoDiv );

    //Clear InpValue
    todoInput.value = "";
}

function deleteCheck ( e )
{
    const item = e.target;

    //Delete
    if ( item.classList[0] === 'delete-btn' ) {
        const todo = item.parentElement;
        todo.classList.add( "fall" );

        todo.addEventListener( "transitionend", () =>
        {
            todo.remove();
        } );
    }

    // complete
    if ( item.classList[0] === 'complete-btn' ) {
        const todo = item.parentElement;
        todo.classList.toggle( 'completed' );
    }
}

function filterTodo ( e )
{
    const todos = todoList.childNodes;
    console.log( todos );
    todos.forEach( ( todo ) =>
    {
        if ( todo ) {
            switch ( e.target.value ) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if ( todo.classList.contains( 'completed' ) ) {
                        todo.style.display = "flex";
                    }
                    else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    } );
}