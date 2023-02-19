    import { createContext, ReactNode, useContext, useState } from "react"
import SideBarCard from "../compounents/SideBarCard"

    type cardType = {
        id:number,
        quantity:number,
    }


    type childrenType = {
        children: ReactNode,
    }


    type actionsTypes = {
        getQuantity : (id: number) => number,
        IncrissQuantity:(id:number) => void,
        decrissQuantity:(id:number) => void,
        removeItem: (id:number) => void,
        openCard : () => void
        closeCard: () => void
        cartQuantity: number
        card: cardType[] 
        open:boolean
    }

    export const ProviderContext = createContext({} as actionsTypes);

    const ContextProvider = ({children}:childrenType) => {

        const [card, setCard] = useState<cardType[]>([]);
        const [open, setOpen] = useState(false);

        const openCard = () => setOpen(true)
        const closeCard = () => setOpen(false)

        const cartQuantity  = card.reduce((curr, acc) :any  => {

            return curr += acc.quantity
        },0)

        const getQuantity = (id:number) => {

            return card.find((item) => item.id === id)?.quantity || 0
        }

        const IncrissQuantity = (id:number) => {

                setCard((currentItem) => {
                    if(currentItem.find((item) => item.id === id) == null) {
                        return [...currentItem, {id, quantity: 1}]
                    }else {
                        return currentItem.map((item) => {
                            if(item.id === id) {
                                return {...item, quantity: item.quantity + 1}
                            }else {
                                return item;
                            }
                        })
                    }
                })
            }

    const decrissQuantity = (id: number) => {

        setCard((currentItem) => {

            if(currentItem.find((item) => item.id === id)?.quantity === 1) {

                return currentItem.filter((item) => item.id !== id)
            }else {

                return currentItem.map((item) => {

                    if(item.id === id) {

                        return {...item, quantity: item.quantity - 1}
                    }else {

                        return item
                    }
                })
            }
        })
    }

    const removeItem = (id:number) => {

        setCard((currencyItem) => {

            return currencyItem.filter((item) => item.id !== id)
        })
    }

    return (

        <ProviderContext.Provider value={{getQuantity, IncrissQuantity, decrissQuantity, removeItem, openCard,closeCard,open, card, cartQuantity}}>
            
            {children}
            <SideBarCard/>
            
        </ProviderContext.Provider>
    )
    }

    export default ContextProvider

    export const CustomHook = () => {
        return useContext(ProviderContext)
    }