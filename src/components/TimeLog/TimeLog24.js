import React, {useState, useEffect} from 'react'
import {Charts,ChartContainer,ChartRow,YAxis,LineChart,Resizable,BarChart,styler} from "react-timeseries-charts";
import { TimeLogPlotBg, TimeLogPlotHeader } from './TimeLog24Elements';
import { TimeSeries, Index } from "pondjs";
import {useTranslation} from 'react-i18next'

function TimeLog24(apiKey, userDetails) {
    const [t, i18n] = useTranslation();
    const [timeLog24hData, setTimeLog24hData] = useState([]);
    const [last24HoursLogs, setLast24HoursLogs] = useState([]);
    const [properties, setProperties] = useState({});

    const [series, setSeries] = useState();

    const [is24hDataReady, setIs24hDataReady] = useState(false);
    const [fetched, setFetched] = useState(false);

    const data = [
        ["2020-12-17T09:00:02", 5],
        ["2020-12-17T10:00:02", 9],
    ];

    useEffect(() => {
        setProperties(() => {return JSON.parse(localStorage.getItem('login'));})
    }, [])


    useEffect(() => {
        for(let i = 0; i < 24; ++i) {
            let date = new Date();
            date.setHours(date.getHours() - 23 + i)
            setTimeLog24hData((timeLog) =>{
                return [...timeLog, [convertDateToMySqlFormat(date), 0]];
            })
        }
        let newTimeLogValue = []
        last24HoursLogs.map((log) => (
            timeLog24hData.map((timeLog, index) => (
                (new Date(log.date).getHours() === new Date(timeLog[0]).getHours()) ? (
                    //timeLog[1] = timeLog[1] + 1
                    newTimeLogValue = [...timeLog24hData],
                    newTimeLogValue[index][1] = timeLog[1] + 1,
                    setTimeLog24hData((timeLog) =>{
                        return [...newTimeLogValue];
                    })     
                ) : (
                console.log("null")
                )
            ))
        ))

        setSeries( () => {
            return new TimeSeries({
                name: "Users",
                columns: ["index", "precip"],
                points: timeLog24hData.map(([d, value]) => [
                    Index.getIndexString("1h", new Date(d)),
                    value
                ])
            });
        })

        if( fetched === true) {
            setIs24hDataReady(true);
        }
    }, [last24HoursLogs])



    useEffect(() => {
        if (properties !== {} ) {
            let endDate = new Date();
            let startDate = new Date();
            startDate.setDate(startDate.getDate() - 1)
            getLast24HoursLogs(apiKey.apiKey,  convertDateToMySqlFormat(startDate), convertDateToMySqlFormat(endDate))
        }
    }, [properties])

    const getLast24HoursLogs = async (apiKey, startDate, endDate) => {

        fetch('http://127.0.0.1:8080/api/timeLog/getDate', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + properties.token
            },
            body: JSON.stringify({
                apiKey:apiKey,
                startDate:startDate,
                endDate:endDate
            })
          })
            .then(response => response.json())
            .then(responseData => {
              if(JSON.stringify(responseData.status) !== '401') {
                setFetched(true);
                setLast24HoursLogs(() => {return responseData})
              }
            })
            .catch(err => {
              console.log('error : ' + err);
            });
    }

    const convertDateToMySqlFormat = (date) => {
        return date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
    }

    const style = styler([
        { key: "precip", color: "#BF567D"},
    ]);


    return (
        <>
        {
            is24hDataReady === true ?
            <TimeLogPlotBg>
                <TimeLogPlotHeader>{t('last24')}</TimeLogPlotHeader>
                <Resizable>
                    <ChartContainer timeRange={series.range()}>
                        <ChartRow height="220">
                            <YAxis
                                id="visit"
                                label={t('visits')}
                                min={0}
                                max={10}
                                format=".0f"
                                width="70"
                                type="linear"
                            />
                            <Charts>
                                <BarChart
                                    axis="visit"
                                    style={style}
                                    spacing={1}
                                    columns={["precip"]}
                                    series={series}
                                    minBarHeight={3}
                                />
                            </Charts>
                        </ChartRow>
                    </ChartContainer>
                </Resizable>
            </TimeLogPlotBg> 
            : <></>
        }

        </>
    )
}

export default TimeLog24
