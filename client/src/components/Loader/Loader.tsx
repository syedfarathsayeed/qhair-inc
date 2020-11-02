
import React from "react"
import clsx from "clsx"
import { CircularProgress } from '@material-ui/core'
import { useStyles } from "./Loader_Styles"

interface LoaderProps {
  className?: string
  size?: "small" | "medium"
}

export default function Loader(props: LoaderProps) {
  const { size = "medium", className } = props
  const classes = useStyles(props)

  const getPropsFromSize = (): { size: number, className?: string } => {
    switch (size) {
      case "medium":
        return { size: 60, className }
      case "small":
        return { size: 24, className: clsx(className, classes.small) }
    }
  }

  return (
    <div className={classes.root}>
      <CircularProgress {...getPropsFromSize()} />
    </div>
  )
}
