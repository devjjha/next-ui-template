'use client'

import Panel from "@/components/Panel";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import React from "react";

export default function TradePage() {
    return (
        <div>
            <Panel title={"Open"}>
                <div>Open & Ongoing trades</div>

                <div className="flex w-full flex-col">
                    <Tabs aria-label="Tabs colors" radius="full" color={"primary"}>
                        <Tab key="photos" title="Photos">
                            <Card>
                                <CardBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="music" title="Music"/>
                        <Tab key="videos" title="Videos"/>
                    </Tabs>
                </div>
            </Panel>

            <Panel title={"Closed"}>
                <div>Closed trades</div>
            </Panel>

        </div>
    );
}