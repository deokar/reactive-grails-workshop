//= wrapped

angular
    .module("grangular.todo")
    .controller("TodoListController", TodoListController);

function TodoListController(Todo, todoList) {
    var vm = this;

    // var max = 10, offset = 0;
    //
    // Todo.list({max: max, offset: offset}, function(data) {
    //     vm.todoList = data;
    // });

    vm.todoList  = todoList;
}
