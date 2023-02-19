import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CustomHook } from "../context/ContextProvider";
import data from "../data/data.json";
import StoreItems from "./StoreItems";
const Store = () => {

    const {card} = CustomHook();


    return (
        <>
        <h1> Store </h1>
            <Row md={2} xs={1} lg={2} className="g-3">

                {
                    data.map((item) => {
                        return <Col key={item.id}>
                            <StoreItems {...item} />
                        </Col>
                    })
                }
    
            </Row>
        </>
    )
    }

    export default Store