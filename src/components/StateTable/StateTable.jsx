import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { fetchStates } from '../../api';
import styles from './StateTable.module.css';

const StateTable = (country) => {
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setStateData(await fetchStates(country));
    };
    fetchAPI();
  }, [country]);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
  });

  const provinceData = stateData;
  const classes = useStyles();
  return (
    <div className={styles.container}>
      {provinceData.length > 1 ? (
        <h3>Statewise Data for {country.country}</h3>) : <h3>Statewise Data for {country.country} is not Available</h3>}
      {provinceData.length > 1 ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell width="100">States</StyledTableCell>
                <StyledTableCell align="left" width="50">Confirmed</StyledTableCell>
                <StyledTableCell align="left" width="50">Active</StyledTableCell>
                <StyledTableCell align="left" width="50">Recovered</StyledTableCell>
                <StyledTableCell align="left" width="50">Deaths</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {provinceData.length > 1 ? provinceData.map((data) => (
                <StyledTableRow key={data.provinceState}>
                  <StyledTableCell component="th" scope="row">
                    {data.provinceState}
                  </StyledTableCell>
                  <StyledTableCell style={{ color: 'rgba(0, 139, 139, 0.8)' }} align="left">{data.confirmed}</StyledTableCell>
                  <StyledTableCell style={{ color: 'rgba(0, 0, 255, 0.8)' }} align="left">{data.active}</StyledTableCell>
                  <StyledTableCell style={{ color: 'rgba(0, 140, 0, 0.8)' }} align="left">{data.recovered}</StyledTableCell>
                  <StyledTableCell style={{ color: 'rgba(255, 0, 0, 0.8)' }} align="left">{data.deaths}</StyledTableCell>
                </StyledTableRow>
              )) : 'Statewise Data for this Country is not Available.'}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};
export default StateTable;