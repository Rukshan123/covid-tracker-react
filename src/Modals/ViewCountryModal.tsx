import { Modal, Table, Tag } from "antd";
import React from "react";

export const ViewCountryModal = ({
    isVisible,
    setIsVisible,
    selectedRowData,
}) => {
    const ViewItem = ({ label, value }) => {
        return (
            <div>
                <p className="text-xl mb-0">{value ?? "_"}</p>
                <p className="mb-0">{label}</p>
            </div>
        );
    };
    return (
        <Modal
            style={{ backgroundColor: "#28293E" }}
            centered
            width={500}
            visible={isVisible}
            onCancel={() => setIsVisible(false)}
            title={selectedRowData.country}
            okButtonProps={{ style: { display: "none" } }}
            cancelText="Close"
        >
            <div className="grid grid-cols-2 gap-x-2">
                <ViewItem
                    value={selectedRowData.updated}
                    label="Total Corona Virus Cases"
                />
            </div>
            <div className="grid grid-cols-2 gap-x-2 mt-8">
                <ViewItem value={selectedRowData.active} label="Active Cases" />
                <ViewItem
                    value={selectedRowData.recovered}
                    label="Closed Cases"
                />
            </div>
        </Modal>
    );
};
