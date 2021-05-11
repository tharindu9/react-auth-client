import React, { Component } from "react";
import DataTable from 'react-data-table-component';
import JobService from '../../services/job.service'

const data = [{ id: 1, title: 'Amal the Barbarian', year: '2020' },
             { id: 2, title: 'Kamal the Barbarian', year: '1900' },
             { id: 3, title: 'Zaharan the Barbarian', year: '1982' } ];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Location',
    selector: 'location',
    sortable: true,
  },
  {
    name: 'Delete',
    sortable: true,
    cell: row => <div><button className="btn btn-outline-danger btn-sm">delete</button></div>,
  },
  {
    name: 'Edit',
    sortable: true,
    cell: row => <div><button className="btn btn-outline-success btn-sm">edit</button></div>,
  },
];
class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs : []
        };
      }

    componentDidMount() {
        JobService.getAll()
        .then(data => {
            console.log("****",data)
            this.setState({
                jobs : data
            })
        });
    }

    render () {
        return (
           <div className="container">
                <DataTable
                 title="Jobs"
                 columns={columns}
                 pagination = {true}
                 data={this.state.jobs}
                 highlightOnHover = {true}
                />
           </div>
        )
      }
}

export default JobsList;
