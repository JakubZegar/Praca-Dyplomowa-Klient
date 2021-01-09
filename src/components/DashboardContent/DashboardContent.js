import React, {useEffect, useState} from 'react'
import { DbContainer,
        DbGreetings,
        DbPlotBg,
        DbModules,
        DbPlotHeader
    } from './DashboardElements'
import {useTranslation} from 'react-i18next'
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
    Resizable,
    BarChart,
    styler
} from "react-timeseries-charts";
import { TimeSeries, Index } from "pondjs";

function DashboardContent() {
    const [t, i18n] = useTranslation();
    const [creds, setCreds] = useState({});

    useEffect(() => {
        setCreds(() => {
            return JSON.parse(localStorage.getItem('login'));
        })
    }, [])

    useEffect(() => {
        console.log(creds);
    }, [creds])

    const style = styler([
        { key: "precip", color: "#BF567D"},
    ]);

    const data = [
        ["2020-12-17T09:00", 5],
        ["2020-12-17T10:00", 9],
        ["2020-12-17T11:00", 4],
        ["2020-12-17T12:00", 0],
        ["2020-12-17T13:00", 1],
        ["2020-12-17T14:00", 0],
        ["2020-12-17T15:00", 8],
        ["2020-12-17T16:00", 12],
        ["2020-12-17T17:00", 17],
        ["2020-12-17T18:00", 22],
        ["2020-12-17T19:00", 32],
        ["2020-12-17T20:00", 32],
        ["2020-12-17T21:00", 25],
        ["2020-12-17T22:00", 37],
        ["2020-12-17T23:00", 51],
        ["2020-12-18T00:00", 43],
        ["2020-12-18T01:00", 65],
        ["2020-12-18T02:00", 54],
        ["2020-12-18T03:00", 41],
        ["2020-12-18T04:00", 38],
        ["2020-12-18T05:00", 29],
        ["2020-12-18T06:00", 27],
        ["2020-12-18T07:00", 23],
        ["2020-12-18T08:00", 16]
    ];

    const series = new TimeSeries({
        name: "Users",
        columns: ["index", "precip"],
        points: data.map(([d, value]) => [
            Index.getIndexString("1h", new Date(d)),
            value
        ])
    });

    return (
        <DbContainer>
            <DbGreetings>{t('dbGreeting')} {creds.login}</DbGreetings>
            <DbPlotBg>
                <DbPlotHeader>{t('last24')}</DbPlotHeader>
                <Resizable>
                    <ChartContainer timeRange={series.range()}>
                        <ChartRow height="220">
                            <YAxis
                                id="visit"
                                label={t('visits')}
                                min={0}
                                max={70}
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
                                    minBarHeight={1}
                                />
                            </Charts>
                        </ChartRow>
                    </ChartContainer>
                </Resizable>
            </DbPlotBg>

            <DbModules>
                <DbGreetings>{t('yourModules')}</DbGreetings>
            </DbModules>
        </DbContainer>
    )
}

export default DashboardContent
