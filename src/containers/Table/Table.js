import React from "react";
import { TableWrapper, GridContainer } from "styles/styledTableParts";
import { TableHeader } from "components/Table/TableHeader/TableHeader";
import { TableBody } from "components/Table/TableBody/TableBody";
import { TableNavigation } from "components/Table/TableNavigation/TableNavigation";

export class Table extends React.Component {

  state = {
    openedPage: 1,
    rowsPerPage: 3
  };

  changePage = selectedPage => {

    const { openedPage, rowsPerPage } = this.state;
    const { tableTitles, tableData } = this.props;

    const pageCounts = Math.ceil(tableData.length / rowsPerPage);

    if (selectedPage < 1 || selectedPage > pageCounts) {
      return;
    }
    this.setState(PrevState => ({
      openedPage: selectedPage
    }));
  };

  render() {

    const { tableTitles, tableData } = this.props;
    const { openedPage, rowsPerPage } = this.state;

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
          onClick={this.changePage}
          openedPage={openedPage}
          rowsCount={tableData.length}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
        />
      </TableWrapper>
    );
  }
}
