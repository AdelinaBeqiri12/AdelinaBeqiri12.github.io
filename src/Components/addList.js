import React from 'react';
class ToDoAppList extends React.Component {
  constructor(){
    super();
    this.remove = this.remove.bind(this);
    this.done = this.done.bind(this);
    this.undone = this.undone.bind(this);
    this.change = this.change.bind(this);
  }

  remove(elem){
    this.props.remove(elem);
  }

  done(elem){
    this.props.done(elem);
  }
  undone(elem){
    this.props.undone(elem);
  }

  change(elem){
    this.props.change(elem);
  }

  render() {
    var items = this.props.tasks.map((elem, index) => {
      if ( elem.isCompleted === false){
    return <li   style={{color:'red'}}key={elem.id}><span> {elem.name} </span>
    <button onClick={this.remove.bind(this,elem)}>Delete  </button>
    <button onClick={this.done.bind(this,elem)}>Done  </button>
    <button onClick={this.change.bind(this,elem)}>Change  </button></li>
    }
    else
    return <li   style={{color:'green'}} key={elem.id}><span> {elem.name} </span>
    <button onClick={this.remove.bind(this,elem)}>Delete  </button>
    <button onClick={this.undone.bind(this,elem)}>Undone  </button>
    <button onClick={this.change.bind(this,elem)}>Change  </button></li>
  });

    return (
      <div>
      <ol>
      {items}
      </ol>
</div>
    );
  }
}
export default ToDoAppList;
