
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Select, SelectItem} from "@nextui-org/react";
import React, {useState} from "react";


export interface SupportResistanceProps {
    trend?: string
    symbol: string
    s1: number
    s2: number
    s3: number
    r1: number
    r2: number
    r3: number
    notes?: string

}

interface SupportResistanceCardProps extends SupportResistanceProps {
    onPress?: any
}

export default function SupportResistanceCard(props: SupportResistanceCardProps) {
    return (
        <div className={"flex gap-4"}>

            <Card shadow={"none"} key={props.symbol}
                  isPressable
                  onPress={() => {
                      props.onPress({...props})
                  }}
                  fullWidth={true}>
                <CardHeader className="text-small justify-center">
                    <p className="text-default-500"><b>{props.symbol}</b></p>
                </CardHeader>
                <CardBody className="text-small justify-between">
                    <p className="text-default-500"><b>CMP:</b> 123</p>
                    <p className="text-default-500"><b>Next support in:</b> </p>
                    <p className="text-default-500"><b>Next Resistance in:</b> 300pt</p>
                </CardBody>
            </Card>
        </div>
    )
}