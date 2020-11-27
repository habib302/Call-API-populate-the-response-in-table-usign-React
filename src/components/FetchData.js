import React,{useState,useEffect} from 'react'
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    minWidth: 700,
  },
});


function FetchData () {
  const [data,setData]=useState([]);

  const classes = useStyles();
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        setData([...response.data]);
      })
      .catch(error => {
        console.log(error)
      })
    
  }
  return (
    <div className="container" className="col-lg-12">
      
      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>User ID</StyledTableCell>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell>Body</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((item) => (
                    <StyledTableRow key={item.name}>
                        
                        <StyledTableCell align="center">{item.userId}</StyledTableCell>
                        <StyledTableCell align="left">{item.id}</StyledTableCell>
                        <StyledTableCell align="left">{item.title}</StyledTableCell>
                        <StyledTableCell align="center">{item.body}</StyledTableCell>
                        
                        {/* <StyledTableCell align="left">
                            <button  onClick={() => dispatch({ type: 'REMOVE_DATA', id: item.id })} class="btn btn-outline-danger">Clear
                            </button>
                        </StyledTableCell> */}
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
          </TableContainer>
    </div>
  )
}

export default FetchData
