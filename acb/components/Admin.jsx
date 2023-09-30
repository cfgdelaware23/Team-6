import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { CSVLink } from "react-csv";
import { useTable } from 'react-table';

import mock_data from './mock_data/MOCK_DATA.json';

import './styles/style.css';

const Admin = () => {

    const data = useMemo(() => mock_data, []);
    const columns = useMemo(
        () => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "First Name",
            accessor: "first_name",
        },
        { 
            Header: "Last Name",
            accessor: "last_name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Gender",
            accessor: "gender",
        },
        {
            Header: "IP Address",
            accessor: "ip_address",
        },
        ],
        []
    );

    const csvData = [
    ["ID", "First Name", "Last Name", "Email", "Gender", "IP Address"],
    ...data.map(( { id, first_name, last_name, email, gender, ip_address }) => [
            id,
            first_name,
            last_name,
            email,
            gender,
            ip_address,
        ])
    ]

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    return (
        <div className="container">
            <div className="tb">
                <table {...getTableProps()}>
                <thead className="header-table">
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                        ))}
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
            <div className="btn-container" style={{ marginTop: '100px', textAlign: 'center' }}>
                <Button className="download-btn">
                <CSVLink className="csv-download" filename="volunteer_data" data={csvData}>Download Me</CSVLink>
                </Button>
            </div>
        </div>
    );
}

export default Admin;

