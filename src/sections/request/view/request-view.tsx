/* eslint-disable-next-line no-constant-binary-expression */
import { useState, useCallback, MouseEventHandler } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Modal, TextField, Card, Button, Grid } from '@mui/material';

import { _users } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import type { UserProps } from '../user-table-row';

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 10,
  p: 4,
};

const UploadBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: 150, // Minimum height for the upload area
  width: '100%', // Take full width of its parent
  maxWidth: 500, // Max width for better aesthetics on larger screens
  padding: theme.spacing(3), // Padding inside the box
  border: `2px dashed ${theme.palette.grey[400]}`, // Dotted border using theme color
  borderRadius: theme.shape.borderRadius, // Rounded corners
  backgroundColor: theme.palette.action.hover, // Light background to distinguish it
  cursor: 'pointer', // Indicate it's clickable
  transition: 'background-color 0.3s ease', // Smooth transition on hover
  '&:hover': {
    backgroundColor: theme.palette.action.selected, // Slightly darker on hover
  },
}));

function PrescriptionUploadSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '10vh', // Take up most of the viewport height for centering demonstration
        p: 2, // Padding around the entire section
        backgroundColor: '#f5f5f5', // A light background for the page
      }}
    >
      <UploadBox>
        <Typography variant="h6" component="p" color="text.secondary">
          Upload your prescription here
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ mt: 1 }}>
          Drag & drop files or click to browse
        </Typography>
      </UploadBox>
    </Box>
  );
}

export function RequestView() {
  const table = useTable();

  const [filterName, setFilterName] = useState('');
  const [open, setOpen] = useState<boolean>(false);

  // const dataFiltered: UserProps[] = applyFilter({
  //   inputData: _users,
  //   comparator: getComparator(table.order, table.orderBy),
  //   filterName,
  // });

  const dataFiltered: UserProps[] = applyFilter({
    inputData: [],
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const handleClose = () => {
    setOpen(false);
  };

  const onNewRequest = () => {
    setOpen(true);
  };

  return (
    <DashboardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-new-request"
        aria-describedby="modal-new-request-form"
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: 'black', // Set the backdrop color to white
              opacity: 0.1, // You might want to adjust opacity for full white or a semi-transparent white
            },
          },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-new-request" variant="h6" component="h2">
            Add New Request
          </Typography>
          <Typography id="modal-new-request-form" sx={{ mt: 3 }}>
            <Box>
              <Grid container spacing={1} rowSpacing={2}>
                <Grid size={{ md: 6 }}>
                  <TextField variant="outlined" label="Name (Optional)" fullWidth />
                </Grid>
                <Grid size={{ md: 6 }}>
                  <TextField variant="outlined" label="Phone no" fullWidth />
                </Grid>
                <Grid size={12}>
                  <Typography variant="subtitle2" component="h2" gutterBottom>
                    Upload Prescription
                  </Typography>
                  <PrescriptionUploadSection />
                </Grid>
                <Grid size={12} spacing={2}>
                  <Box sx={{ textAlign: 'right' }}>
                    <Button variant="outlined" color="inherit" sx={{ mr: 1 }} onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="contained" color="inherit">
                      Create
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Typography>
        </Box>
      </Modal>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Requests
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={onNewRequest}
        >
          Raise a new request
        </Button>
      </Box>

      <Card>
        <UserTableToolbar
          numSelected={table.selected.length}
          filterName={filterName}
          onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterName(event.target.value);
            table.onResetPage();
          }}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={table.order}
                orderBy={table.orderBy}
                rowCount={0}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) => table.onSelectAllRows(checked, [])}
                headLabel={[
                  { id: 'queue_id', label: 'Queue ID' },
                  { id: 'name', label: 'Name' },
                  { id: 'phone_no', label: 'Phone no' },
                  { id: 'prescription', label: 'Prescription', disableSort: true },
                  { id: 'notified', label: 'Notified', align: 'center' },
                  { id: 'pickup_time', label: 'Pickup Time', align: 'center' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {/*{dataFiltered*/}
                {/*  .slice(*/}
                {/*    table.page * table.rowsPerPage,*/}
                {/*    table.page * table.rowsPerPage + table.rowsPerPage*/}
                {/*  )*/}
                {/*  .map((row) => (*/}
                {/*    <UserTableRow*/}
                {/*      key={row.id}*/}
                {/*      row={row}*/}
                {/*      selected={table.selected.includes(row.id)}*/}
                {/*      onSelectRow={() => table.onSelectRow(row.id)}*/}
                {/*    />*/}
                {/*  ))}*/}

                {/* <TableEmptyRows
                  height={68}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, (_users.length))}
                /> */}

                {/* <TableNoData searchQuery='No Data Found' /> */}

                {/* {notFound && <TableNoData searchQuery={filterName} />} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          page={table.page}
          count={0}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
