'use client'

import React, {useState} from "react";
import Panel from "@/components/Panel";
import SupportResistanceCard, {SupportResistanceProps} from "@/components/SupportResistanceCard";
import SupportResistanceModal from "@/components/SupportResistanceModal";
import {useDisclosure} from "@nextui-org/react";
import * as actions from "@/actions";

export default function StockHome() {
    const [stock, setStock] = useState<SupportResistanceProps>()
    const [open, setOpen] = useState(false);
    const stocks = [
        {
            symbol: 'NIFTY',
            s1: 123,
            s2: 234,
            s3: 456,
            r1: 789,
            r2: 890,
            r3: 908,
            notes: 'nifty notes'
        },
        {
            symbol: 'BANKNIFTY',
            s1: 123,
            s2: 234,
            s3: 456,
            r1: 789,
            r2: 890,
            r3: 908,
            notes: 'bank nifty notes'
        },
        {
            symbol: 'FINNIFTY',
            s1: 123,
            s2: 234,
            s3: 456,
            r1: 789,
            r2: 890,
            r3: 908,
            notes: 'finnifty notes'
        }
    ];

    const onPressCallback = (stockProps: SupportResistanceProps) => {
        console.log("Main Page onPresscallback "+stockProps.symbol)
        setStock(stockProps);
        setOpen(true);
    };

    const onOpenChange = () => {
        console.log("Onchqange triggered")
        setOpen(!open)
    }

    function saveCallback(data: SupportResistanceProps) {
        console.log(data)
        setOpen(false)
    }

    function closeCallback() {
        setOpen(false)
    }

    return (
        <>
            <Panel title={"Stock(s)"} text={"Support & Resistances"}></Panel>
            <div className="gap-2 flex flex-wrap">
                {/*{list.map((item, index) => (*/}
                {/*    // <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>*/}
                {/*    //     <CardBody className="overflow-visible p-0">*/}
                {/*    //         <Image*/}
                {/*    //             shadow="sm"*/}
                {/*    //             radius="lg"*/}
                {/*    //             width="100%"*/}
                {/*    //             alt={item.title}*/}
                {/*    //             className="w-full object-cover h-[140px]"*/}
                {/*    //             src={item.img}*/}
                {/*    //         />*/}
                {/*    //         <div>*/}
                {/*    //             <Input />*/}
                {/*    //         </div>*/}
                {/*    //     </CardBody>*/}
                {/*    //     <CardFooter className="text-small justify-between">*/}
                {/*    //         <b>{item.title}</b>*/}
                {/*    //         <p className="text-default-500"><b>CMP:</b> {item.price}</p>*/}
                {/*    //     </CardFooter>*/}
                {/*    // </Card>*/}

                {/*    // eslint-disable-next-line react/jsx-key*/}
                {/*     */}
                {/*))}*/}
                {stocks.map((item, index) => (
                    <SupportResistanceCard {...item} key={index} onPress={onPressCallback}/>
                ))}
            </div>
            {stock &&
                <SupportResistanceModal symbol={stock.symbol}
                                        s1={stock.s1}
                                        s2={stock.s2}
                                        s3={stock.s3}
                                        r1={stock.r1}
                                        r2={stock.r2}
                                        r3={stock.r3}
                                        notes={stock.notes}
                                        isOpen={open}
                                        onSave={saveCallback}
                                        onCancel={closeCallback}
                />
            }
        </>
    );
}