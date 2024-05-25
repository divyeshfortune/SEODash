import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [76],
            options: {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                // Rest of your options
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
            </div>
        );
    }
}

export default ApexChart;
