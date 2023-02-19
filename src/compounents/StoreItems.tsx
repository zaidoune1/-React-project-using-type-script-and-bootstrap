import { Button, Card } from "react-bootstrap"
import { CustomHook } from "../context/ContextProvider";
import FormateCurrency from "./FormateCurrency";

    export type propsItems = {
        id: number,
        name: string,
        price: number,
        imgUrl:string,
        item:any
    }

    const StoreItems = ({id, name, price, imgUrl, item}: propsItems) => {

        const {getQuantity, IncrissQuantity, decrissQuantity, removeItem, cartQuantity,open, openCard, closeCard} = CustomHook();

        const quantity = getQuantity(id)
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="300px" style={{objectFit:"cover"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{FormateCurrency(price)}</span>
                </Card.Title>
            {quantity > 0 ? (
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content between align-items-center m-auto">
                    <Button onClick={() => {
                        IncrissQuantity(id) 
                    }} style={{width:"40px", height:"40px"}} className="primary d-flex justify-content-center align-items-center">+</Button>
                        <h4 className="p-4"> {quantity} in-Card</h4>
                    <Button onClick={() => {
                        decrissQuantity(id)
                    }} style={{width:"40px", height:"40px"}} variant="primary" className="d-flex justify-content-center align-items-center">-</Button>
                    </div>
                    <Button onClick={() => {
                        removeItem(id)
                    }} style={{width:"150px", height:"40px"}} variant="danger" className=" fs-5 d-flex justify-content-center align-items-center m-auto ">Remove</Button>
            </div>
            ) : (
                <Button onClick={() => {
                    IncrissQuantity(id)
                }} variant="primary" style={{width:"100%"}}> + Add To Card </Button>
            )}
            </Card.Body>
        </Card>

    )
    }

    export default StoreItems