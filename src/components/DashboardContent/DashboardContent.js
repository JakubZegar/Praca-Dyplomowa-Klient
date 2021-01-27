import React, {useEffect, useState} from 'react'
import { DbContainer,
        DbGreetings,
        DbPlotBg,
        DbModules,
        DbPlotHeader
    } from './DashboardElements'
import {useTranslation} from 'react-i18next'

import ApiKey from '../ApiKey/ApiKey';
import TimeLog24 from '../TimeLog/TimeLog24';
import TimeLogWeek from '../TimeLog/TimeLogWeek';
import TimeLogMonth from '../TimeLog/TimeLogMonth';
import Heatmap from '../Heatmap/Heatmap';
import TimeSpentOnSite from '../TimeLog/TimeSpentOnSite';

function DashboardContent() {
    const [properties, setProperties] = useState({});
    const [userDetails, setUserDetails] = useState({});
    const [apiKey, setApiKey] = useState("");

    const [t, i18n] = useTranslation();

    useEffect(() => {
        setProperties(() => {
            return JSON.parse(localStorage.getItem('login'));
        })
    }, [])

    useEffect(() => {
        if (properties !== {} ) {
            getUserDetails(properties.login);
        }
    }, [properties])

    useEffect(() => {
        if (userDetails.id !== undefined) {
            getApiKey(properties.token);
        }
    }, [userDetails])

    const getUserDetails = async (username) => {
        fetch('http://127.0.0.1:8080/api/auth/info/' + username, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(responseData => {
              setUserDetails(() => {
                return responseData;
            })
            })
            .catch(err => {
              console.log('error : ' + err);
            });
    }

    const getApiKey = async (token) => {
        fetch('http://127.0.0.1:8080/apiKey/get/' + userDetails.id, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token
            },
          })
            .then(response => response.json())
            .then(responseData => {
              setApiKey(() => {
                return responseData.apiKey;
            })
            })
            .catch(err => {
              console.log('error : ' + err);
            });
    }

    return (
        <DbContainer>
            <DbGreetings>{t('dbGreeting')} {properties.login}</DbGreetings>

            {
                apiKey !== "" && properties !== {} && userDetails !== {} &&
                <>
                    <ApiKey apiKey={apiKey} properties={properties} userDetails={userDetails}></ApiKey>
                    <DbGreetings>{t('visits')}</DbGreetings>
                    <TimeLog24 apiKey={apiKey} userDetails={userDetails}></TimeLog24>
                    <TimeLogWeek apiKey={apiKey} userDetails={userDetails}></TimeLogWeek>
                    <TimeLogMonth apiKey={apiKey} userDetails={userDetails}></TimeLogMonth>

                    <DbGreetings>{t('timeSpent')}</DbGreetings>
                    <TimeSpentOnSite apiKey={apiKey} userDetails={userDetails}/>

                    <DbGreetings>{t('userActivity')}</DbGreetings>
                    <Heatmap apiKey={apiKey} userDetails={userDetails}></Heatmap>
                </>
            }


        </DbContainer>
    )
}

export default DashboardContent