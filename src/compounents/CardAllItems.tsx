
import { Button, Stack } from "react-bootstrap";
import { CustomHook } from "../context/ContextProvider";
import data from "../data/data.json";
import FormateCurrency from "./FormateCurrency";
import {IoIosRemoveCircle} from "react-icons/io";


type propsItemsCards = {
    id: number,
    quantity: number,
}

console.log(data)
    
    const CardAllItems = ({id, quantity}: propsItemsCards) => {

        const {removeItem} = CustomHook();

        const item = data.find((item) => item.id === id)

        if(item == null) return null

    return (
         <Stack style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} direction="horizontal" gap={2} >
            <div className="d-flex justify-content center align-items-center">
            <div><img style={{width:"100px", height:"80px", objectFit:"cover"}} src={item.imgUrl} /></div>
            <div style={{paddingLeft:"10px"}} className="d-flex flex-column">
            <div> {item.name}</div>
                <div> {FormateCurrency(item.price * quantity)}</div>
                {quantity > 1 ? 
                (<span className="text-muted"> x{quantity} </span>) :(
                   <span>{quantity}</span>
                )
            }
            </div>  
           </div>
        
            <Button onClick={() => {
                removeItem(item.id)
            }} style={{fontSize:"25px", fontWeight:"bold"}} className="d-flex justify-content center align-items-center" variant="outline-primary"><IoIosRemoveCircle/></Button>
        
        </Stack>
    )
    }

    export default CardAllItems;
