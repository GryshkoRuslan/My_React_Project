import React from "react";
import { tableTitles,  tableData } from "constants/tableConstants";
import { TableWrapper } from "styles/styledTableParts";
import { TableHeader } from "components/TableHeader/TableHeader";
import { TableBody } from "components/TableBody/TableBody"

export class Table extends React.Component {

  render() {
    return (
      <TableWrapper>
        <TableHeader />
        <TableBody />
      </TableWrapper>
    );
  }
}
