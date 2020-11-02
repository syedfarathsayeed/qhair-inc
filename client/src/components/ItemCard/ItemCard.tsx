import React from "react"
import Button from "../Button"
import useStyles from "./ItemCard_Styles"

export interface ItemCardProps {
    imageUrl: string,
    onClick: () => void,
    title: string
}

const ItemCard: React.FunctionComponent<ItemCardProps> = (props: ItemCardProps) => {

    const { onClick, title } = props

    const classes = useStyles(props)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onClick()
    }

    return (
        <div className={classes.card} onClick={handleClick}>
            <Button label={title}
                variant="text"
                onClick={handleClick}
                className={classes.button}
            />
        </div>
    )
}

export default ItemCard