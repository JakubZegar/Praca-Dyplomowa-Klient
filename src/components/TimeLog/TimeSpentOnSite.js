import React, {useState, useEffect} from 'react'
import {Charts,ChartContainer,ChartRow,YAxis,LineChart,Resizable,Baseline} from "react-timeseries-charts";
import { TimeSeries, Index } from "pondjs";
import { TimeLogPlotBg, TimeLogPlotHeader } from './TimeLog24Elements';
import {useTranslation} from 'react-i18next'

function TimeSpentOnSite(apiKey, userDetails) {
    const [isReady, setIsReady] = useState(false);
    const [t, i18n] = useTranslation();
    const [allTimeLogs, setAllTimeLogs] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [properties, setProperties] = useState({});
    const [series, setSeries] = useState();
    const [prepared, setPrepared] = useState([]);

    const [tempData, setTempData] = useState([[111111111,1],[1131242144, 2]])

    useEffect(() => {
        setProperties(() => {return JSON.parse(localStorage.getItem('login'));})
    }, [])

    useEffect(() => {
        if (properties !== {} ) {
            getAllLogs(apiKey.apiKey);
        }
    }, [properties])

    useEffect(() => {
        for( let i = 0; i < 30; ++i) {
            let date = new Date();
            date.setDate(date.getDate() - 29 + i)
            setChartData((logs) => { return [...logs, [date.getTime(), 0, 0]]})
        }
        let newChartData = []
        allTimeLogs.map((log, id) => (
            chartData.map((chartRow, chartID) => (
                new Date(log.date).getDate().toString() === new Date(chartRow[0]).getDate().toString() && (
                    newChartData = [...chartData],
                    newChartData[chartID][1] = chartRow[1] + 1,
                    newChartData[chartID][2] = chartRow[2] + parseInt(log.timeSpent),
                    setChartData((timeLog) =>{
                        return [...newChartData];
                    })     
                )
            ))
        ))

        chartData.map((chartRow) => (
            isNaN(chartRow[2]/chartRow[1]) === true ? (
                setPrepared(prevMovies => ([...prevMovies, [chartRow[0], 0]]))  
            ) : (
                setPrepared(prevMovies => ([...prevMovies, [chartRow[0], chartRow[2]/chartRow[1]]]))
            )
        ))
    }, [allTimeLogs])

    useEffect(() => {
        console.log("NASTĄPILA ZMIANA", prepared);
        if (prepared.length > 0) {
            const points = prepared
            setSeries(() => {
                return new TimeSeries({
                    name: t("timeSpentOnSite"),
                    columns: ["time", "value"],
                    points
                });
            })
        }

    }, [prepared])



    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 2000);
    }, [])
    
    const getAllLogs = async (apiKey) => {

        fetch('http://127.0.0.1:8080/api/timeLog/getAll', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + properties.token
            },
            body:apiKey
          })
            .then(response => response.json())
            .then(responseData => {
              if(JSON.stringify(responseData.status) !== '401') {
                setAllTimeLogs(() => {return responseData})
              }
            })
            .catch(err => {
              console.log('error : ' + err);
            });
    }

    const style = {
        value: {
            stroke: "#a02c2c",
            opacity: 0.2
        }
    };
    
    const baselineStyle = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.4,
            strokeDasharray: "none"
        },
        label: {
            fill: "steelblue"
        }
    };
    
    const baselineStyleLite = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.5
        },
        label: {
            fill: "steelblue"
        }
    };
    
    const baselineStyleExtraLite = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.2,
            strokeDasharray: "1,1"
        },
        label: {
            fill: "steelblue"
        }
    };
    return (
        <>
        {
            isReady === true &&

            <TimeLogPlotBg>
                <TimeLogPlotHeader>{t('last24')}</TimeLogPlotHeader>
                    <Resizable>
                    <ChartContainer
                        title={t("timeSpentOnSite")}
                        titleStyle={{ fill: "#555", fontWeight: 500 }}
                        timeRange={series.range()}
                        format="%b %d"
                        timeAxisTickCount={30}
                    >
                        <ChartRow height="220">
                            <YAxis
                                id="price"
                                label={t("avgTime")}
                                min={series.min()}
                                max={series.max()}
                                width="60"
                                format=",.0f"
                            />
                            <Charts>
                                <LineChart axis="price" series={series} style={style} />
                                <Baseline
                                    axis="price"
                                    style={baselineStyleLite}
                                    value={series.max()}
                                    label="Max"
                                    position="right"
                                />
                                <Baseline
                                    axis="price"
                                    style={baselineStyleLite}
                                    value={series.min()}
                                    label="Min"
                                    position="right"
                                />
                                <Baseline
                                    axis="price"
                                    style={baselineStyleExtraLite}
                                    value={series.avg() - series.stdev()}
                                />
                                <Baseline
                                    axis="price"
                                    style={baselineStyleExtraLite}
                                    value={series.avg() + series.stdev()}
                                />
                                <Baseline
                                    axis="price"
                                    style={baselineStyle}
                                    value={series.avg()}
                                    label="Avg"
                                    position="right"
                                />
                            </Charts>
                        </ChartRow>
                    </ChartContainer>
                </Resizable>
            </TimeLogPlotBg>
        }
        </>

    )
}

export default TimeSpentOnSite