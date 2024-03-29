import React, { Component } from 'react';

export default function Work() {
    return  (
        <div className = "h-5/5 w-4/5 lg:w-4/5 p-10 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
            <h2 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-5xl'> Work Experience </h2>
            <hr className='class="border-b border-gray-400"'></hr>

            <div>
                <h3 className='pt-5 font-bold'> Wiss - Tech Advisory</h3>
                <p>
                    <p className='italic'>
                    The Wiss Tech Advisory aided in in identifying opportunities 
                    for improvements within clients' current technology landscape,
                    as well as providing future states recommendations to get you to where they wanted to go.
                    </p>
                
                <ul className='list-disc'>
                    <li>Automated and implemented scripts involving API data retrieval and processing for hundreds of clients on various accounting software</li>
                    <li>Training accountants in RPA Software to implement automation solutions into day-to-day work.</li>
                    <li>Aiding in development of financial dashboards/reporting for WISS clients to drive business decisions.</li>
                    <li>Developing scripts to pull data from numerous APIs into different databases</li>
                    <li>Manipulating data in new and existing databases to aid Data analyst in data visualizations </li>
                </ul>
                </p>
            </div>
            <div>
                <h3 className='pt-5 font-bold'> Wiss - WEST Growth</h3>
                <p>
                <p className='italic'>
                    WEST proprietary technology scans accounting software and identifies area of opportunity and risk. It provides advanced dashboards and reporting to keep companies on
                    track with employees and investors. 
                </p>
                <ul className='list-disc'>
                    <li>The dashboard integrates with the online accounting software that the clients use (currently either QuickBooks Online (QBO) or Xero, 
                Sage Intacct integration is in progress). </li>
                    <li>Financial data is pulled on a daily basis.</li>
                    <li>Hosted on Azure SQL</li>
                    <li>Developed with C#(ASP.NET MVC, Razor, Entity Framework), jQuery, knockoutJs, HTML/CSS/Bootstrap</li>
                </ul>
                </p>
            </div>
            <div>
                <h3 className='pt-5 font-bold'> Advanced System Concepts, Inc </h3>
                <p>
                <p className='italic'>
                    Advanced Systems Concepts, Inc. provides job scheduling, scripting and command language, 
                    and data replication and recovery software. Founded in 1981 in Hoboken, the company is now based in Morristown, New Jersey
                </p>
                <ul className='list-disc'>
                    <li >Worked in a cross-functional agile team taking on stories for maintaining and existing releases of the ActiveBatch enterprise automation tool. </li>
                    <li>Implemented features of the ActiveBatch desktop application in C# WPF while following MVVM standards.</li>
                    <li>Developed test cases as part of the “Test Suite”</li>
                    <li>Wrote and modified SQL queries and modified product stored procedures to debug customer databases</li>
                    <li> Refactored legacy code for Tivoli-to-ActiveBatch Migration in order to help customers migrate to ActiveBatch product as seamlessly as possible</li>
                    <li> Used source control/Git and worked in an agile environment with daily standups, retrospectives & planning meetings</li>
                </ul>
                </p>
            </div>
            <div>
                <h3 className='pt-5 font-bold'> ACORD </h3>
                <p >
                <p className='italic'>
                    The Association for Cooperative Operations Research and Development is a non-profit organization in the insurance industry. 
                    ACORD publishes and maintains an archive of standardized forms.
                </p>
                <ul className='list-disc'>
                    <li>Assisted the software development team with the loading, testing, and extraction of Insurance forms</li>
                    <li>Created and modifying insurance forms and loading them into a MySQL database using Java and JDBC.</li>
                    <li>Researched automation process for extraction and population of form information using different technologies</li>
                    <li>Worked with the head of Information Systems to create insurance definitions following BPMN standards.</li>
                </ul>
                </p>
            </div>
        </div>
        );
}