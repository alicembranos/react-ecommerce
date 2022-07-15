import { Button } from "@mui/material"

const CustomButton = ({value}) => {
  return (
    <Button size="large" variant="outlined" color="secondary">{value}</Button>
  )
}

export default CustomButton