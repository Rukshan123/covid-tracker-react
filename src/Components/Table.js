import React, { useState } from "react";
import { Space, Pagination, Table, Tooltip, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ViewCountryModal } from "../../src/Modals/ViewCountryModal.tsx";
import { useSelector } from "react-redux";

const DataTable = ({ loadedData, setCountryWiseCount, countryWiseCount }) => {
    let totalCountryArrLength = useSelector((state) => state.totalCases);
    totalCountryArrLength = totalCountryArrLength["totalCountryArrLength"];

    const [page, setPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [searchText, setSearchText] = useState("");

    const indexOfLastPage = page + postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;
    const currentCountryCovidCount = countryWiseCount.slice(
        indexOfFirstPage,
        indexOfLastPage
    );

    const onShowSizeChange = (current, pageSize) => {
        setPostPerPage(pageSize);
    };

    let [filteredData] = useState();
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [selectedRecordForView, setSelectedRecordForView] = useState({});

    const itemRender = (current, type, originialElement) => {
        if (type === "prev") {
            return (
                <a className="text-xl" style={{ color: "#595959" }}>{`<`}</a>
            );
        }
        if (type === "next") {
            return (
                <a className="text-xl" style={{ color: "#595959" }}>
                    {" "}
                    {`>`}{" "}
                </a>
            );
        }
        return originialElement;
    };

    const columns = [
        {
            title: "Country",
            dataIndex: "country",
            width: 110,
            render: (text, record) => {
                return (
                    <Button
                        type="link"
                        primary
                        onClick={() => {
                            setIsViewModalVisible(true);
                            setSelectedRecordForView(record);
                        }}
                    >
                        {`${text} ${" "}>`}
                    </Button>
                );
            },
        },
        {
            title: "Total Cases",
            dataIndex: "updated",
            width: 110,
        },
        {
            title: "New Cases",
            dataIndex: "todayCases",
            width: 110,
        },
        {
            title: "Total Deaths",
            dataIndex: "deaths",
            width: 110,
        },
        {
            title: "New Deaths",
            dataIndex: "todayDeaths",
            width: 110,
        },
        {
            title: "Total Recovered",
            dataIndex: "recovered",
            width: 110,
        },
        {
            title: "New Recovered",
            dataIndex: "recovered",
            width: 110,
        },
        {
            title: "Active Cases",
            dataIndex: "active",
            width: 110,
        },
        {
            title: "Critical",
            dataIndex: "critical",
            width: 110,
        },
    ];
    const handleChange = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            loadedData();
        }
    };

    const countrySearch = (searchText) => {
        filteredData = countryWiseCount.filter((value) => {
            return value.country
                .toLowerCase()
                .includes(searchText.toLowerCase());
        });
        setCountryWiseCount(filteredData);
    };

    return (
        <>
            <ViewCountryModal
                isVisible={isViewModalVisible}
                setIsVisible={setIsViewModalVisible}
                selectedRowData={selectedRecordForView}
            />
            <div className="grid grid-cols-2 gap-4 text-white">
                <p className="text-white text-3xl font-semibold m-12 text-left">
                    All affected countries
                </p>
                <Space style={{ margin: 10 }}>
                    <input
                        placeholder="Search By Country"
                        onChange={handleChange}
                        type="text"
                        style={{
                            height: "40px",
                            borderRadius: "25px",
                            backgroundColor: "#28293E",
                            width: "500px",
                            color: "#fff",
                            padding: "15px",
                        }}
                        // allowClear
                        value={searchText}
                    ></input>
                    <Tooltip title="search">
                        <Button
                            onClick={() => {
                                countrySearch(searchText);
                            }}
                            type="primary"
                            shape="circle"
                            icon={<SearchOutlined />}
                        />
                    </Tooltip>
                </Space>
            </div>
            <Table
                style={{
                    backgroundColor: "#28293E",
                    padding: "25px",
                }}
                columns={columns}
                dataSource={
                    currentCountryCovidCount.length !== 0
                        ? currentCountryCovidCount
                        : countryWiseCount
                }
                pagination={false}
                filteredData={filteredData}
                stateSearch={countrySearch}
            ></Table>
            <Space style={{ margin: 15 }}>
                <Pagination
                    onChange={(value) => {
                        setPage(value);
                    }}
                    pageSize={postPerPage}
                    borderd
                    postPerPage={postPerPage}
                    total={totalCountryArrLength}
                    current={page}
                    onShowSizeChange={onShowSizeChange}
                    itemRender={itemRender}
                ></Pagination>
            </Space>
        </>
    );
};

export default DataTable;
