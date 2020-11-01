import { Carousel, ItemCard } from "components"
import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { selectCategories } from "redux/reducers/home"
import Slide1 from "resources/images/slide1.jpg"
import Slide2 from "resources/images/slide2.jpg"
import Slide3 from "resources/images/slide3.jpg"
import useStyles from "./index_styles"

const carouselData = [
    {
        imageUrl: Slide1,
        id: 1
    },
    {
        imageUrl: Slide2,
        id: 2
    },
    {
        imageUrl: Slide3,
        id: 3
    }
]

const HomePage: React.FunctionComponent<{}> = () => {

    const history = useHistory()

    const classes = useStyles()

    const categories = useSelector(selectCategories)

    const handleClick = (url: string) => {
        history.push(url)
    }

    return (
        <>
            <Carousel items={carouselData} />
            <div className={classes.root}>
                {categories.map(e => (
                    <ItemCard
                        key={e.id}
                        title={e.title}
                        imageUrl={e.imageUrl}
                        onClick={() => handleClick(e.routeUrl)} />
                ))}
            </div>
        </>
    )

}

export default HomePage