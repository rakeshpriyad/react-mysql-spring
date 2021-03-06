import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { addUser } from '../../actions/users'
class AddUserComponent extends Component{

    /*constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
*/
    render() {
      
            const { fields: { username, password, firstName, lastName, age, salary }, handleSubmit } = this.props;
            console.log(username);

        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form onSubmit={(user) => {
                this.props.dispatch(addUser(user));
                this.props.history.push('/');
            }}>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="username" name="username" className="form-control" {...username} />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" {...password} />
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" {...firstName} />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" {...lastName} />
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="age" name="age" className="form-control" {...age} />
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input type="number" placeholder="salary" name="salary" className="form-control" {...salary} />
                </div>

                <button className="btn btn-success" type ="submit">Save</button>
            </form>
    </div>
        );
    }
}

export default reduxForm({
    form: 'AddUserForm',
    fields: ['username', 'password', 'firstName', 'lastName', 'age', 'salary'] 
  }, null, { addUser })(AddUserComponent);
  
//  