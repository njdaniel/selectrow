import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import checkboxHOC from "react-table/lib/hoc/selectTable"

import namor from 'namor';
import Chance from 'chance';
import _ from 'lodash';

const CheckboxTable = checkboxHOC(ReactTable)

const chance = new Chance;

let data = _.map(_.range(200), d => {
    return {
        uid: chance.guid,
        name: namor.generate({words:1, numbers: 0}),
        selected: false
    }
})

const columns = [{
    Header: 'Columns',
    columns: [{
        Header: 'UID',
        accessor: 'uid'
    },{
        Header: 'Name',
        accessor: 'name'
    }]
}]

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            data, 
            columns,
            selection: []
        }
    }
}
