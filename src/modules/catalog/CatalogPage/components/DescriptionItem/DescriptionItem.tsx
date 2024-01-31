import { ReactNode } from "react"
import "./DescriptionItem.css"

type DescriptionItemProps = {
    value: string | ReactNode
    name: string 
}

export const DescriptionItem = ({value, name}: DescriptionItemProps) => {
    return(
    <div className="description_item">
        <div className="description_item_name">{name}:</div>
        <div className="description_item_value">{value}</div>
    </div>)
}