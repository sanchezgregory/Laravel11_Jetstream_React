import React from "react"
import { Person, columns } from "./columns"
import { DataTable } from "./data-table"
// @ts-ignore
import data from "./MOCK_DATA.json"

function getData(): Person[] {
    // Fetch data from your API here.
    return data
}

export default function TablePerson() {

    const data =  getData()

    return (
        <div className="max-w-7xl mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

