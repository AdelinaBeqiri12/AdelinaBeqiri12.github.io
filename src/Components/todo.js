import React  from 'react';
import AddNewTask from './addTask';
import ToDoAppList from './addList';

var tasks = [
{
id: 1,
    name: 'It has to be a React.js Todo app',
    isCompleted: true
},
{
  id:2,
    name: 'List items',
    isCompleted: true
}
,
{
  id:3,
    name: 'Add item',
    isCompleted: true
}
,
{
  id:4,
    name: 'Edit item',
    isCompleted: true
},
{
  id:5,
    name: 'Remove item',
    isCompleted: true
},
{
  id:6,
    name: 'Mark as done',
    isCompleted: true
},
{
  id:7,
    name: 'Mark as undone',
    isCompleted: true
}
];
class Todo extends React.Component {
  constructor(props){
    super();
    this.state = {tasks};
    this.updateList = this.updateList.bind(this);
    this.editList = this.editList.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.undoneTask = this.undoneTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.writingTextEdit = this.writingTextEdit.bind(this);
  }

  changeTask(text){
   this.setState({textEdit:text.name,
   idEdit:text.id});
   }

  writingTextEdit(text){
 this.setState({textEdit:text});
}

  updateList(text){
    var updatedTasks = this.state.tasks;
    updatedTasks.push({
      id:this.state.tasks.length + 1,
        name: text,
        isCompleted: false
    });
    this.setState({tasks: updatedTasks,
                textEdit:"",
                  idEdit:0
                });
  }

  editList(text){
    var updatedTasks = this.state.tasks;
          for(var i = 0; i< updatedTasks.length; i++){
            if(updatedTasks[i].id === text.id){
             updatedTasks[i].name = text.name;
            }
          }
   this.setState({tasks: updatedTasks,
              textEdit:"",
                idEdit:0
              });
  }

  doneTask(text){
   var updatedTasks = this.state.tasks
   for(var i = 0; i< updatedTasks.length; i++){
     if(updatedTasks[i].id === text.id){
      updatedTasks[i].isCompleted = true;
    }
   }
     this.setState({tasks: updatedTasks});
  }

  undoneTask(text){
    var updatedTasks = this.state.tasks
    for(var i = 0; i< updatedTasks.length; i++){
      if(updatedTasks[i].id === text.id){
       updatedTasks[i].isCompleted = false;
      }
    }
      this.setState({tasks: updatedTasks});
  }

  removeTask(text){
    var updatedTasks = this.state.tasks
    for(var i = 0; i< updatedTasks.length; i++){
      if(updatedTasks[i].id === text.id){
        updatedTasks.splice(i,1);
      }
    }
    this.setState({tasks: updatedTasks});
    //this.updateLocalStorage(updatedTasks);
   }

  render() {
    return (
      <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add your tasks</h1>
      <AddNewTask  {...this.state}
                   updateList={this.updateList}
                   editList={this.editList}
                   writingText={this.writingTextEdit}/>
      <ToDoAppList {...this.state}
                   remove={this.removeTask}
                   done={this.doneTask}
                   undone={this.undoneTask}
                  change={this.changeTask}/>
      </div>
    );
   }
  }

export default Todo;
