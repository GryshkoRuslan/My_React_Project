import React, { useState } from "react";
import { TableWrapper, GridContainer } from "styles/styledTableParts";
import { TableHeader } from "components/Table/TableHeader/TableHeader";
import { TableBody } from "components/Table/TableBody/TableBody";
import { TableNavigation } from "components/Table/TableNavigation/TableNavigation";

export const Table = (props) => {

  const [openedPage, setOpenedPage] = useState(1);
  const [rowsPerPage, setOrowsPerPage] = useState(3);

  const changePage = selectedPage => {

    const { tableTitles, tableData } = props;
    const pageCounts = Math.ceil(tableData.length / rowsPerPage);

    if (selectedPage < 1 || selectedPage > pageCounts) {
      return;
    }

    setOpenedPage(selectedPage)
  };

    const { tableTitles, tableData } = props;

    const pageCounts = Math.ceil(tableData.length / rowsPerPage);
    const lastIndex = openedPage * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const visibleRows = tableData.slice(firstIndex, lastIndex);

    return (
      <TableWrapper>
        <GridContainer columnsCount={tableTitles.length}>
          <TableHeader titles={tableTitles} />
          <TableBody data={visibleRows} />
        </GridContainer>
        <TableNavigation
          onClick={changePage}
          openedPage={openedPage}
          rowsCount={tableData.length}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
        />
      </TableWrapper>
    );
}
