import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Title } from "components";
import Stripe from "components/Stripe";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "redux/actions/cart";
import { AppThunkDispatch } from "redux/store";
import { selectCartItems } from "redux/reducers/cart";
import { CartItem, Size } from "types";
import useStyles from "./index_styles";

interface Column {
    id: 'product' | 'price' | 'quantity' | 'total';
    label: React.ReactNode;
    minWidth?: number;
    align?: 'right' | "left" | "center";
    format?: (value: number) => string;
}

interface Product {
    id: string | number;
    imageUrl: string;
    name: string;
    size: Size;
}

interface Row {
    id: string | number;
    product: Product;
    price: number;
    quantity: number;
    total: number;
}

const isProduct = (value: Product | number): value is Product => {
    return (value as Product).imageUrl !== undefined
}

const CheckoutPage: React.FC<{}> = () => {

    const classes = useStyles()

    const cartItems = useSelector(selectCartItems)

    const dispatch = useDispatch<AppThunkDispatch>();

    const renderCartItemsAsRow = (cartItems: Array<CartItem>) => {
        return cartItems.map(item => {
            const { id, imageUrl, name, size, price, quantity } = item
            return {
                id,
                product: {
                    id,
                    imageUrl,
                    name,
                    size
                },
                price,
                quantity,
                total: quantity * item.price
            }
        })
    }

    const columns: Column[] = [
        { id: "product", label: <h1>Shopping cart</h1>, minWidth: 300, align: "left" },
        { id: "price", label: "Price", minWidth: 100, align: "left" },
        { id: "quantity", label: "Quantity", minWidth: 150, align: "center" },
        { id: "total", label: "Total", minWidth: 100, align: "left" },
    ]

    const rows = renderCartItemsAsRow(cartItems)

    const onDelete = (id: number | string) => {
        const itemToDelete = cartItems.find(item => item.id === id)!
        dispatch(cartActions.clearItemFromCart(itemToDelete))
    }

    const onIncrementClick = (id: number | string) => {
        const itemToAdd = cartItems.find(item => item.id === id)!
        dispatch(cartActions.addItem(itemToAdd))
    }

    const onDecrementClik = (id: number | string) => {
        const itemToRemove = cartItems.find(item => item.id === id)!
        dispatch(cartActions.removeItem(itemToRemove))
    }


    const renderProduct = (product: Product) => {
        const getColor = (size: Size) => {
            return product.size === size ? "primary" : "default"
        }
        const handleClick = (size: Size) => {
            const itemToUpdate = cartItems.find(item => item.id === product.id)!
            dispatch(cartActions.updateItemSize(itemToUpdate, size))
        }
        return (
            <TableCell key={product.id} size="small" className={classes.productCell}>
                <img src={product.imageUrl} alt={product.name} height={200} width={150} />
                <div>
                    <h2>{product.name}</h2>
                    <div className={classes.size}>
                        <Typography>{`Size: `}</Typography>
                        <IconButton color={getColor("s")} onClick={() => handleClick("s")}>
                            {"S"}
                        </IconButton>
                        <IconButton color={getColor("m")} onClick={() => handleClick("m")}>
                            {"M"}
                        </IconButton>
                        <IconButton color={getColor("l")} onClick={() => handleClick("l")}>
                            {"L"}
                        </IconButton>
                        <IconButton color={getColor("xl")} onClick={() => handleClick("xl")}>
                            {"XL"}
                        </IconButton>
                    </div>
                </div>
            </TableCell>
        )
    }

    const renderProductRow = (column: Column, row: Row) => {
        const value = row[column.id]
        if (isProduct(value)) {
            return renderProduct(value as Product)
        } else if (column.id === "quantity") {
            return (
                <TableCell key={column.id} size="small" align={column.align}>
                    <IconButton color="primary" onClick={() => onDecrementClik(row.id)}>
                        {"-"}
                    </IconButton>
                    {value}
                    <IconButton color="primary" onClick={() => onIncrementClick(row.id)}>
                        {"+"}
                    </IconButton>
                </TableCell>)
        } else {
            return (
                <TableCell key={column.id} align={column.align} size="small">
                    {value}
                </TableCell>)
        }
    }

    const getTotal = (rows: Array<Row>) => {
        const total = rows.reduce((total, row) => {
            return total + row.total
        }, 0)

        return total
    }

    const checkoutContent = () => {
        return (
            <div className={classes.table}>
                <Table >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    size="small"
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0
                            ? (rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        {columns.map(column => renderProductRow(column, row))}
                                        <TableCell>
                                            <IconButton color="primary" onClick={() => onDelete(row.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            }))
                            : <TableCell colSpan={columns.length + 1} align={"center"}>
                                {"There are no items in your cart"}
                            </TableCell>}
                    </TableBody>
                </Table>
                {rows.length > 0 &&
                    <div className={classes.total}>
                        <Stripe price={getTotal(rows)} />
                        <Title color="#1E29BE">{`Total amount: ${getTotal(rows)} €`}</Title>
                    </div>}
                <div className={classes.fakeCardInfo}>
                    <Typography>{"*Please use the following test credit card for payments*"}</Typography>
                    <Typography>{"4242 4242 4242 4242 -- Exp: 01/22 --CVV: 123"}</Typography>
                </div>
            </div>
        )
    }

    return (
        <Container>
            {checkoutContent()}
        </Container>
    )
}

export default CheckoutPage