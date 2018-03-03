import React from 'react';
class AddNewTask extends React.Component {
  constructor(){
    super();
    this.justSubmitted = this.justSubmitted.bind(this);
    this.writingText = this.writingText.bind(this);
  }
  justSubmitted(event) {
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    input.value = '';
    if(value===""){}
    else{
    var id=this.props.idEdit;
    if(this.props.idEdit){
      var editData ={id: id, name: value};
      this.props.editList(editData);
    }
    else{
    this.props.updateList(value);
  }
}
  }

  writingText(e){
    this.props.writingText(e.target.value);
  }
  render() {
    return (
      <div>
      <form onSubmit={this.justSubmitted}>
      <input type="text" value = {this.props.textEdit}  onChange={this.writingText}/>
        <input type="submit" value ="Submit"/>
      </form>
      </div>
    );
  }
}

export default AddNewTask;
