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
    return <li   style={{color:'red'}}key={elem.id}><span> {elem.name} </span>&nbsp;&nbsp;
    <button onClick={this.remove.bind(this,elem)}><i style={{color:'red'}} className="fa fa-trash-o "></i></button>&nbsp;&nbsp;
    <button  onClick={this.done.bind(this,elem)}><i style={{color:'red'}} className="fa fa fa-thumbs-o-down "></i></button>&nbsp;&nbsp;
    <button onClick={this.change.bind(this,elem)}> <i className="fa fa-pencil"></i>  </button></li>
    }
    else
    return <li style={{color:'green'}} key={elem.id}><span> {elem.name} </span>&nbsp;&nbsp;
    <button onClick={this.remove.bind(this,elem)}><i style={{color:'red'}} className="fa fa-trash-o "></i></button>&nbsp;&nbsp;
    <button onClick={this.undone.bind(this,elem)}><i style={{color:'green'}} className="fa fa fa-thumbs-o-up "></i></button>&nbsp;&nbsp;
    <button onClick={this.change.bind(this,elem)}> <i className="fa fa-pencil"></i> </button></li>
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
