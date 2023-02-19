    import { Offcanvas, Stack } from "react-bootstrap"
import { CustomHook } from "../context/ContextProvider"
import CardAllItems from "./CardAllItems";
    
    const SideBarCard = () => {

        const {card, open, closeCard} = CustomHook();

    return (
        <Offcanvas show={card.length > 0 &&  open} onHide={closeCard} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Card</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                {
                    card.map((item:any) => {
                        return<div key={item.id}>
                            <CardAllItems {...item} />
                        </div>
                    })
                }
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
    }

    export default SideBarCard