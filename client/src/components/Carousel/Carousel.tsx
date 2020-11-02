import { Slide } from "@material-ui/core"
import clsx from "clsx"
import { debounce } from "lodash"
import React from "react"
import useStyles from "./Carousel_Styles"

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    React.useEffect(() => {
        const debouncedCallback = debounce(callback, delay)
        debouncedCallback()

        return () => debouncedCallback.cancel()

    }, [callback, delay])
}

interface CarouselItemProps {
    imageUrl: string,
    active: boolean,
    direction?: "left" | "right"
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {

    const { imageUrl, active, direction } = props

    const classes = useStyles()

    return (
        <div hidden={!active} className={classes.itemRoot} >
            <Slide direction={direction} in={active} timeout={400}>
                <div className={classes.slide}>
                    <img src={imageUrl} height={"100%"} width={"100%"} alt={"carousel-item"} />
                </div>
            </Slide>
        </div>
    )
}

type Item = {
    imageUrl: string,
    id: number
}

interface CarouselProps {
    items: Array<Item>
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const { items } = props
    const [activeNode, setActiveNode] = React.useState(1)
    const [direction, setDirection] = React.useState<"left" | "right">("left")

    const classes = useStyles()

    const handleNext = () => {
        const nextActiveNode = activeNode >= items.length  ? 1 : activeNode + 1
        setActiveNode(nextActiveNode)
        setDirection("left")
    }

    useDebounce(handleNext, 4000)

    const handleIndicatorClick = (id: number) => {
        setActiveNode(id)
        if(activeNode < id){
            setDirection("left")
        } else {
            setDirection("right")
        }
    }

    return (
        <div>
            {items.map((item) =>
                <CarouselItem key={item.id}
                    active={activeNode === item.id}
                    imageUrl={item.imageUrl}
                    direction={direction} />)}
            <div className={classes.indicators}>
                {items.map(item => <div key={item.id}
                    className={activeNode === item.id
                        ? clsx(classes.indicator, classes.indicatorActive)
                        : clsx(classes.indicator, classes.indicatorsInactive)}
                    onClick={() => handleIndicatorClick(item.id)} />)}
            </div>
        </div >
    )
}

export default Carousel

