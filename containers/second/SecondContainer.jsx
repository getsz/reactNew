import * as React from "react";
import { Link } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import Page from "../../ui/page/UIPage";

//import lkLog from "lk-log";
//const logger = lkLog.getLogger("MainContainer");

import "./second-container.less";

class Second extends React.Component {
    componentDidMount() {
     //   logger.primary("log content2");
        console.log("second page didmount");
    }
    componentWillUnmount() {
        console.log("second page willunmount");
    }
    getOption() {
        return {
            title: {
                text: "未来一周气温变化",
                subtext: "纯属虚构"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                right: 0,
                top: 0,
                data: ["最高气温", "最低气温"],
                textStyle: {
                    fontSize: "2rem"
                }
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    formatter: "{value} °C"
                }
            },
            series: [
                {
                    name: "最高气温",
                    type: "line",
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            { type: "max", name: "最大值" },
                            { type: "min", name: "最小值" }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: "average", name: "平均值" }
                        ]
                    }
                },
                {
                    name: "最低气温",
                    type: "line",
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            { name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: "average", name: "平均值" },
                            [{
                                symbol: "none",
                                x: "90%",
                                yAxis: "max"
                            }, {
                                symbol: "circle",
                                label: {
                                    normal: {
                                        position: "start",
                                        formatter: "最大值"
                                    }
                                },
                                type: "max",
                                name: "最高点"
                            }]
                        ]
                    }
                }
            ]
        };

    }
    render() {
        return (
            <Page>
                <h3>second page</h3>
                <ReactEcharts
                    style={{ height: "6rem", width: "100%", marginTop: "30px" }}
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                    onChartReady={this.onChartReadyCallback}
                />
                <Link to="/">--返回首页--</Link>
                <Link to="/third">--下一页--</Link>
            </Page>
        );
    }
}

export default Second;
