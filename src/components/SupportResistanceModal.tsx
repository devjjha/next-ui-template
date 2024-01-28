'use client'
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    Textarea
} from "@nextui-org/react";
import React, {useState} from "react";
import {SupportResistanceProps} from "@/components/SupportResistanceCard";


interface SupportResistanceModalProps extends SupportResistanceProps {
    onCancel(): void

    onSave(data: SupportResistanceProps): void

    isOpen: boolean
}


export default function SupportResistanceModal(props: SupportResistanceModalProps) {
    const [stockData, setStockData] = useState<SupportResistanceProps>({
        ...props
    })

    return (

        <Modal
            isOpen={props.isOpen}
            placement="auto"
            backdrop={"opaque"}
            onOpenChange={() => props.onCancel()}
        >
            <ModalContent>

                <ModalHeader className="flex flex-col gap-1">{stockData.symbol}</ModalHeader>
                <ModalBody>
                    <Select
                        isRequired
                        label="Trend"
                        variant={"bordered"}
                    >

                        <SelectItem key={"BULLISH"} value={"BULLISH"}>
                            Bullish
                        </SelectItem>
                        <SelectItem key={"NOT_BULLISH"} value={"NOT_BULLISH"}>
                            Bullish
                        </SelectItem>
                        <SelectItem key={"BEARISH"} value={"BEARISH"}>
                            Bearish
                        </SelectItem>
                        <SelectItem key={"NOT_BEARISH"} value={"NOT_BEARISH"}>
                            Not Bearish
                        </SelectItem>

                    </Select>
                    <Input
                        autoFocus
                        label="Support 1"
                        value={stockData.s1.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                s1: Number(e.currentTarget.value)
                            })
                        }}
                    />
                    <Input
                        autoFocus
                        label="Support 2"
                        value={stockData.s2.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                s2: Number(e.currentTarget.value)
                            })
                        }}
                    />
                    <Input
                        autoFocus
                        label="Support 3"
                        value={stockData.s3.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                s3: Number(e.currentTarget.value)
                            })
                        }}
                    />

                    <Input
                        autoFocus
                        label="Resistance 1"
                        value={stockData.r1.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                r1: Number(e.currentTarget.value)
                            })
                        }}
                    />
                    <Input
                        autoFocus
                        label="Resistance 2"
                        value={stockData.r2.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                r2: Number(e.currentTarget.value)
                            })
                        }}
                    />
                    <Input
                        autoFocus
                        label="Resistance 3"
                        value={stockData.r3.toString()}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                r3: Number(e.currentTarget.value)
                            })
                        }}
                    />

                    <Textarea
                        autoFocus
                        label="Notes"
                        value={stockData.notes}
                        variant="bordered"
                        onChange={(e) => {
                            setStockData({
                                ...stockData,
                                notes: e.currentTarget.value
                            })
                        }}
                    />
                    {/*<div className="flex py-2 px-1 justify-between">*/}
                    {/*    <Checkbox*/}
                    {/*        classNames={{*/}
                    {/*            label: "text-small",*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        Remember me*/}
                    {/*    </Checkbox>*/}
                    {/*    <Link color="primary" href="#" size="sm">*/}
                    {/*        Forgot password?*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={() => props.onCancel()}>
                        Close
                    </Button>
                    <Button color="primary" onPress={() => props.onSave(stockData)}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}