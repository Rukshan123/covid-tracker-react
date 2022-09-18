import React from "react";
import { Col, Row, Card } from "antd";
import CountUp from "react-countup";

const Cards = ({ totalCases }) => {
    const CardDetails = ({ count, title }) => {
        return (
            <>
                <p className="count text-white text-3xl font-semibold m-0">
                    {count}
                </p>
                <p style={{ color: "#8CA2FF" }} className="text-xs">
                    {title}
                </p>
            </>
        );
    };
    return (
        <>
            {totalCases.map((item, index) => (
                <div className="grid grid-cols-2 gap-4 text-white">
                    <div
                        key={index}
                        style={{
                            padding: "10px",
                            background: "#28293E",
                        }}
                    >
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card
                                    className="text-white"
                                    bordered={false}
                                    style={{
                                        width: 360,
                                        height: 100,
                                        backgroundColor: "#28293E",
                                    }}
                                >
                                    <br></br>
                                    <div className="text-left">
                                        <CardDetails
                                            count={item.cases}
                                            title={"Total Corona Virus Cases"}
                                        ></CardDetails>
                                    </div>
                                    <div className="mt-12 text-left ">
                                        <CardDetails
                                            count={item.active}
                                            title={" Active Cases"}
                                        ></CardDetails>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ height: "100%" }}>
                        <div style={{ height: "47%" }}>
                            <div
                                key={index}
                                style={{
                                    padding: "10px",
                                    background: "#28293E",
                                }}
                            >
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Card
                                            className="text-white"
                                            bordered={false}
                                            style={{
                                                width: 360,
                                                height: 100,
                                                backgroundColor: "#28293E",
                                            }}
                                        >
                                            <br></br>
                                            <div className="text-left">
                                                <CardDetails
                                                    count={item.deaths}
                                                    title={"Deaths"}
                                                ></CardDetails>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div style={{ height: "47%" }} className="mt-3">
                            <div
                                key={index}
                                style={{
                                    padding: "10px",
                                    background: "#28293E",
                                }}
                            >
                                <Row gutter={16}>
                                    <Col span={6}>
                                        <Card
                                            className="text-white"
                                            bordered={false}
                                            style={{
                                                width: 360,
                                                height: 100,
                                                backgroundColor: "#28293E",
                                            }}
                                        >
                                            <br></br>
                                            <div className="text-left">
                                                <CardDetails
                                                    count={item.recovered}
                                                    title={"Recovered"}
                                                ></CardDetails>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;
