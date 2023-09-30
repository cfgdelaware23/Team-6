import React, { useMemo, useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import { useTable } from 'react-table';
import { Button } from 'react-bootstrap';
import Papa from 'papaparse';

import './styles/style.css';

const Admin = () => {
    const [parsedCsvData, setParsedCsvData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('./mock_data.csv');
            const reader = response.body.getReader();
            const result = await reader.read(); // raw array
            const decoder = new TextDecoder("utf-8");
            const csv = decoder.decode(result.value); // the csv text
            const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
            const rows = results.data; // array of objects
            setParsedCsvData(rows);
        }
        getData();
    }, []);

    return (
        <div className="container">
            <div className="tb">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {parsedCsvData &&
                            parsedCsvData.map((parsedData, index) => (
                                <tr key={index}>
                                    <td>{parsedData.id}</td>
                                    <td>{parsedData.first_name}</td>
                                    <td>{parsedData.last_name}</td>
                                    <td>{parsedData.email}</td>
                                    <td>{parsedData.gender}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div className="btn-container" style={{ marginTop: '100px', textAlign: 'center' }}>
                <Button className="download-btn">
                <CSVLink className="csv-download" filename="volunteer_data" data={parsedCsvData}>Download Me</CSVLink>
                </Button>
            </div>
        </div>
    );

    // const data = useMemo(() => mock_data, []);
    // const columns = useMemo(
    //     () => [
    //     {
    //         Header: "ID",
    //         accessor: "id",
    //     },
    //     {
    //         Header: "First Name",
    //         accessor: "first_name",
    //     },
    //     { 
    //         Header: "Last Name",
    //         accessor: "last_name",
    //     },
    //     {
    //         Header: "Email",
    //         accessor: "email",
    //     },
    //     {
    //         Header: "Gender",
    //         accessor: "gender",
    //     },
    //     {
    //         Header: "IP Address",
    //         accessor: "ip_address",
    //     },
    //     ],
    //     []
    // );

    // const csvData = [
    // ["ID", "First Name", "Last Name", "Email", "Gender", "IP Address"],
    // ...data.map(( { id, first_name, last_name, email, gender, ip_address }) => [
    //         id,
    //         first_name,
    //         last_name,
    //         email,
    //         gender,
    //         ip_address,
    //     ])
    // ]

    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // useTable({ columns, data });

    // return (
    //     <div className="container">
    //         <div className="tb">
    //             <table {...getTableProps()}>
    //             <thead className="header-table">
    //                 {headerGroups.map((headerGroup) => (
    //                 <tr {...headerGroup.getHeaderGroupProps()}>
    //                     {headerGroup.headers.map((column) => (
    //                     <th {...column.getHeaderProps()}>
    //                         {column.render("Header")}
    //                     </th>
    //                     ))}
    //                 </tr>
    //                 ))}
    //             </thead>
    //             <tbody {...getTableBodyProps()}>
    //                 {rows.map((row) => {
    //                 prepareRow(row);
    //                 return (
    //                     <tr {...row.getRowProps()}>
    //                     {row.cells.map((cell) => (
    //                         <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
    //                     ))}
    //                     </tr>
    //                 );
    //                 })}
    //             </tbody>
    //             </table>
    //         </div>
    //         <div className="btn-container">
    //             <Button className="download-btn">
    //             <CSVLink className="csv-download" filename="volunteer_data" data={csvData}>Download Me</CSVLink>
    //             </Button>
    //         </div>
    //     </div>
    // );
}

export default Admin;

