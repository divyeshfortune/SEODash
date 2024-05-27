"use client";
import React, { useState } from "react";
import { Card, Button, Breadcrumb, Select } from "flowbite-react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const [radialBarState, setRadialBarState] = useState({
    series: [76],
    options: {
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#335FFB",
            strokeWidth: "97%",
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.0,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
          colorStops: [
            {
              offset: 0,
              color: "#85D446",
              opacity: 1,
            },
            {
              offset: 50,
              color: "#85D446",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#85D446",
              opacity: 1,
            },
          ],
        },
      },
      labels: ["Average Results"],
    },
  });

  const [lineChartState, setLineChartState] = useState({
    series: [
      {
        type: "rangeArea",
        name: "Team B Range",
        data: [
          { x: "Mon", y: [1100, 1900] },
          { x: "Tue", y: [1200, 1800] },
          { x: "Wed", y: [900, 2900] },
          { x: "Thu", y: [1400, 2700] },
          { x: "Fri", y: [2600, 3900] },
          { x: "Sat", y: [500, 1700] },
          { x: "Sun", y: [1900, 2300] },
        ],
      },
      {
        type: "rangeArea",
        name: "Team A Range",
        data: [
          { x: "Mon", y: [3100, 3400] },
          { x: "Tue", y: [4200, 5200] },
          { x: "Wed", y: [3900, 4900] },
          { x: "Thu", y: [3400, 3900] },
          { x: "Fri", y: [5100, 5900] },
          { x: "Sat", y: [5400, 6700] },
          { x: "Sun", y: [4300, 4600] },
        ],
      },
      {
        type: "line",
        name: "Team B Median",
        data: [
          { x: "Mon", y: 1500 },
          { x: "Tue", y: 1700 },
          { x: "Web", y: 1900 },
          { x: "Thu", y: 2200 },
          { x: "Fri", y: 3000 },
          { x: "Sat", y: 1000 },
          { x: "Sun", y: 2100 },
        ],
      },
      {
        type: "line",
        name: "Team A Median",
        data: [
          { x: "Mon", y: 3300 },
          { x: "Tue", y: 4900 },
          { x: "Web", y: 4300 },
          { x: "Thu", y: 3700 },
          { x: "Fri", y: 5500 },
          { x: "Sat", y: 5900 },
          { x: "Sun", y: 4500 },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500,
        },
      },
      colors: ["#d4526e", "#33b2df", "#d4526e", "#33b2df"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1],
      },
      forecastDataPoints: {
        count: 2,
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2],
      },
      legend: {
        show: false,
        customLegendItems: ["Team B", "Team A"],
        inverseOrder: true,
      },
      markers: {
        hover: {
          sizeOffset: 5,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Web", "Tue", "Fri", "Sat", "Sun"],
      },
    },
  });

  return (
    <>
      <div className="flex items-center justify-between pb-[1.875rem]">
        <div>
          <h5 className="text-secondary font-semibold pb-2">
            Overview: <span className="text-primary">wrappixel.com</span>
          </h5>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item
              href="#"
              className="text-14 font-normal text-DustyBlue"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-14 font-normal text-DustyBlue">
              SEO Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="bg-white border text-secondary text-14 font-normal p-2 pl-4 rounded-full"
          >
            SERP & KD updated 21 hours ago.
            <span className="text-primary font-semibold px-3">Update</span>
          </Link>
          <Button
            pill
            className="bg-primary hover:!bg-secondary text-14 text-white font-semibold flex items-center px-1"
          >
            <Icon
              icon="lets-icons:add-ring-light"
              width="24"
              height="24"
              className="mr-2 group-hover:text-white text-[#94A8FF]"
            />
            Add to list
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-[1.875rem]">
        <div>
          <Card className="max-w-sm bg-primary rounded-xl">
            <div className="flex items-center gap-4">
              <h6 className="text-white">Domain Rating</h6>
              <span>
                <Icon
                  icon="mingcute:question-fill"
                  width="24"
                  height="24"
                  inline="true"
                  horizontalflip="true"
                  className="text-white"
                />
              </span>
            </div>
            <div className="flex items-center">
              <div>
                <div className="flex items-center gap-2 pb-5">
                  <span className="text-40 font-semibold text-white">78</span>
                  <span className="text-white bg-RoyalBlue py-[0.12rem] px-2 rounded-full">
                    +10
                  </span>
                </div>
                <p className="text-white text-14 font-normal">
                  SE Ranking Score
                </p>
              </div>
              <div>
                <Chart
                  options={radialBarState.options}
                  series={radialBarState.series}
                  type="radialBar"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="w-[49.625rem]">
          <Card className="max-w-[49.725rem] bg-white rounded-xl">
            <div className="flex items-center p-[0.6875rem] gap-[1.875rem]">
              <div className="flex flex-col gap-[0.5625rem] w-[14.25rem] border-solid border-r border-stroke">
                <i className="bg-[url('/icon/bloklinks.svg')] bg-no-repeat bg-contain w-12 h-12 inline-block"></i>
                <span>Backlinks</span>
                <div className="flex items-center gap-5">
                  <h3 className="text-secondary font-bold">10.2k</h3>
                  <span className="text-primary bg-lightblue text-14 font-semibold px-[0.54rem] py-[0.3rem] rounded-xl">
                    +8.5
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[0.5625rem] w-[14.25rem] border-solid border-r border-stroke">
                <i className="bg-[url('/icon/domains.svg')] bg-no-repeat bg-contain w-12 h-12 inline-block"></i>
                <span>Ref. domains</span>
                <div className="flex items-center gap-5">
                  <h3 className="text-secondary font-bold">227</h3>
                  <span className="text-primary bg-lightblue text-14 font-semibold px-[0.54rem] py-[0.3rem] rounded-xl">
                    +108
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[0.5625rem] w-[14.25rem]">
                <i className="bg-[url('/icon/organic.svg')] bg-no-repeat bg-contain w-12 h-12 inline-block"></i>
                <span>Organic search KW</span>
                <div className="flex items-center gap-5">
                  <h3 className="text-secondary font-bold">576</h3>
                  <span className="text-primary bg-lightblue text-14 font-semibold px-[0.54rem] py-[0.3rem] rounded-xl">
                    +459
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[1.775rem] pt-[1.775rem]">
        <div>
          <Card className="bg-white rounded-xl w-[60.625rem]">
            <div className="flex items-center justify-between">
              <div>
                <h6 className="font-semibold">Performance</h6>
              </div>
              <div>
                <Select id="countries" required>
                  <option>Last 7 days</option>
                  <option>Last 6 days</option>
                  <option>Last 5 days</option>
                  <option>Last 4 days</option>
                </Select>
              </div>
            </div>
            <div>
              <Chart
                options={lineChartState.options}
                series={lineChartState.series}
                type="rangeArea"
              />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-15 font-semibold text-secondary">Traffic Source</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-WhisperGray p-[0.625rem] rounded-full">
                      <Icon
                        icon="hugeicons:home-01"
                        width="24"
                        height="24"
                        inline="true"
                        horizontalflip="true"
                        className="text-secondary"
                      />
                    </div>
                    <p className="text-15 font-normal text-secondary"><span className="font-bold pr-[0.375rem]">31%</span>Direct</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-WhisperGray p-[0.625rem] rounded-full">
                      <Icon
                        icon="iconamoon:search-light"
                        width="24"
                        height="24"
                        inline="true"
                        horizontalflip="true"
                        className="text-secondary"
                      />
                    </div>
                    <p className="text-15 font-normal text-secondary"><span className="font-bold pr-[0.375rem]">27%</span>Search</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-WhisperGray p-[0.625rem] rounded-full">
                      <Icon
                        icon="solar:share-circle-line-duotone"
                        width="24"
                        height="24"
                        inline="true"
                        horizontalflip="true"
                        className="text-secondary"
                      />
                    </div>
                    <p className="text-15 font-normal text-secondary"><span className="font-bold pr-[0.375rem]">42%</span>Social Media</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card className="max-w-sm bg-white rounded-xl">
            Traffic by location
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
