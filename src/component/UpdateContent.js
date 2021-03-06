import React, { Component } from 'react';
class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : this.props.data.title,
      desc : this.props.data.desc
    }
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form action = "/create_process" method = "post" 
        onSubmit = {function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
          alert('submit!!')
        }.bind(this)}
        >
          <p>
            <input 
            type="text" 
            name = "title" 
            placeholder ="title"
            value = {this.state.title}
            onChange= {function(e){
              this.setState({title:e.target.value});

            }.bind(this)}>
            </input>
          </p>
          <p>
            <textarea 
             onChange= {function(e){
              this.setState({desc :e.target.value});
            }.bind(this)}
            name ="desc" placeholder ='description'>{this.state.desc}</textarea>
          </p>
          <p>
            <input type ="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
export default UpdateContent;
