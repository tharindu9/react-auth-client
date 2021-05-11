import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {createJob} from "../../actions/jobs.action"
import { connect } from "react-redux";

class CreateJob extends Component {

    constructor(props) {
        super(props);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangejobType = this.onChangejobType.bind(this);
        this.onChangejobLocation = this.onChangejobLocation.bind(this);
        this.onChangejobStartingDate = this.onChangejobStartingDate.bind(this);
        this.onChangejobEndDate = this.onChangejobEndDate.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.state = {
          currentUser: undefined,
          isAdmin : false,
          isUser : false,
          title : "",
          description :"",
          jobType : "",
          location : "",
          start_date : "",
          end_date : "",
          successful : false
        };
      }

      onChangeJobTitle(e) {
        this.setState({
          title: e.target.value,
          });
          console.log(this.state.title)
      }

      onChangedescription(e) {
        this.setState({
          description: e.target.value,
        });
      }

      onChangejobType(e) {
        this.setState({
          jobType: e.target.value,
        });
      }

      onChangejobLocation(e) {
        this.setState({
          location: e.target.value,
        });
      }

      onChangejobStartingDate(e) {
        this.setState({
          start_date: e.target.value,
        });
      }

      onChangejobEndDate(e) {
        this.setState({
          end_date: e.target.value,
        });
      }

      handleJob(e) {
        e.preventDefault();
        console.log(this.state);
      //  jobService.create(this.state).then(data => console.log("********",data))
        this.props
        .dispatch(
          createJob(this.state)
        )
        .then(() => {
          this.setState({
            successful: true,
          })
          
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
      }

      render () {
          return (
            <div>
            <p> Please enter data </p>
            <Form
            onSubmit={this.handleJob}
            ref={(c) => {
              this.form = c;
            }}
          >
          <div className="container">
            <div className="form-group">
              <label htmlFor="username">Job Title</label>
              <Input
                    type="text"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangeJobTitle}
                    // validations={[required, vusername]}
              />
              </div>
              <div className="form-group">
                <label htmlFor="username">Job Description</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangedescription}
                    // validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Job Type</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangejobType}
                    // validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Job Location</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangejobLocation}
                    // validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Starting Date</label>
                <Input
                    type="date"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangejobStartingDate}
                    // validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">End Date</label>
                <Input
                    type="date"
                    className="form-control"
                    name="username"
                    // value={this.state.username}
                     onChange={this.onChangejobEndDate}
                    // validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
              <div className="form-group">
                  <button className="btn btn-primary">Submit</button>
              </div>
              </div>
            </div>
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>

          </div>
          )
      }
}
function mapStateToProps(state) {
  const { message } = state.message;
  console.log("Job component mapToPrpos",state)
  return {
    message,
  };
}

export default connect(mapStateToProps)(CreateJob);
