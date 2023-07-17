import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.21;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}
function combineDuplicateItems(cartItems) {
  const combinedItems = [];
  cartItems.forEach((item) => {
    const { id, movie, quantity, price } = item;
    const existingItem = combinedItems.find((i) => i.desc === movie);
    if (existingItem) {
      existingItem.qty += quantity;
      existingItem.price += price;
    } else {
      combinedItems.push({
        desc: movie,
        qty: quantity,
        unit: price,

        price,
      });
    }
  });
  return combinedItems;
}
function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const DetailBuys = () => {
  const { cartItems, setCartItems, selectedCinema, selectedTime } =
    useContext(CartContext);
  const rows = combineDuplicateItems(cartItems);
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const clearCartItems = () => {
    setCartItems([]);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "70%" }} align="center" colSpan={5}>
              Detalles de la compra
            </TableCell>

            <TableCell align="right">Precio</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Desc</TableCell>
            <TableCell sx={{ width: "20%" }}>Cine</TableCell>
            <TableCell sx={{ width: "20%" }}>Horario</TableCell>
            <TableCell align="right" sx={{ width: "10%" }}>
              Cant.
            </TableCell>
            <TableCell align="right" sx={{ width: "15%" }}>
              $ Unit
            </TableCell>
            <TableCell align="right" sx={{ width: "15%" }}>
              $ Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell sx={{ width: "20%" }}>{row.desc}</TableCell>
              <TableCell sx={{ width: "20%" }}>{selectedCinema}</TableCell>
              <TableCell sx={{ width: "20%" }}>{selectedTime}</TableCell>

              <TableCell align="right" sx={{ width: "10%" }}>
                {row.qty}
              </TableCell>
              <TableCell align="right" sx={{ width: "15%" }}>
                {row.unit}
              </TableCell>
              <TableCell align="right" sx={{ width: "15%" }}>
                {ccyFormat(row.price)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Iva</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailBuys;
