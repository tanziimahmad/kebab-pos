import React, { useState } from "react";
import { BsCashStack, BsCreditCard2Back } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";
import InputField from "./input-field";

const CashPay = () => {
  return (
    <div>
      <div>
        <p className="py-2">Give Agreement</p>
        <InputField placeholder="Type Given Agreement..." />
      </div>
      <div>
        <p className="py-2">Change Agreement</p>
        <InputField placeholder="Type Change Agreement..." />
      </div>
    </div>
  );
};

const MFSPay = () => {
  return (
    <div>
      <div>
        <p className="py-2">Last 4 Digit</p>
        <InputField placeholder="Type last 4 digits" />
      </div>
    </div>
  );
};

const CardPay = () => {
  return (
    <div>
      <div>
        <p className="py-2">Transaction ID</p>
        <InputField placeholder="Type Transaction ID" />
      </div>
    </div>
  );
};

const tabData = [
  { id: 1, label: "Cash", component: CashPay, Icon: BsCashStack },
  { id: 2, label: "MFS", component: MFSPay, Icon: SiContactlesspayment },
  { id: 3, label: "Card", component: CardPay, Icon: BsCreditCard2Back },
];

const Payment = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="relative h-full p-6 border-l text-neutral border-primary">
      <h1 className="text-3xl font-semibold">Payment</h1>
      <p className="text-gray-400">3 payment method available</p>
      <div className="py-6 mt-10 border-t border-primary">
        <h1 className="text-2xl font-semibold">Payment</h1>
      </div>
      <div>
        <div className="flex items-center gap-4">
          {tabData.map(({ id, label, Icon }) => (
            <div className="w-full">
              <button
                type="button"
                key={id}
                className={`w-full py-3 border rounded-lg border-primary text-center  ${
                  activeTab === id
                    ? "border-neutral text-neutral"
                    : "text-gray-400"
                }`}
                onClick={() => handleTabClick(id)}
              >
                <div className="m-auto mb-1 text-2xl w-max">
                  <Icon />
                </div>
                <p>{label}</p>
              </button>
            </div>
          ))}
        </div>
        <div>
          <div className="mt-4">
            {tabData.map(({ id, component: TabComponent }) => (
              <div key={id} className={activeTab === id ? "" : "hidden"}>
                <TabComponent />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 flex items-center justify-between gap-4 px-4 bottom-6">
        <div className="w-full">
          <button
            type="button"
            className="w-full py-3  border border-[#FF8747] rounded-lg"
          >
            Cancel
          </button>
        </div>
        <div className="w-full">
          <button
            type="button"
            className="w-full py-3 bg-[#FF8747] border border-[#FF8747] rounded-lg"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
