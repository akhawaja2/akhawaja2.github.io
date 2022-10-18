import React, { Component } from 'react';

export default function Projects() {
    return  (
        <div className = "Projects">
            <h2> A few projects..</h2>
            <h2> More projects and project info can be found on my github <a href="http://github.com/akhawaja2">here</a>.</h2>
            <div>
                <h3>Halfway </h3>
                <p>
                An iOS application that allows the user to enter two locations and finds restaurants in between both locations.
                Created with Swift and Google Maps API.
                </p>
            </div>
            <div>
                <h3>Crypto Market Cap Scraper </h3>
                <p>
                A Python script that accesses CoinGecko’s API to parse through thousands of cryptocurrencies and analyze micro-cap coins that fit a criteria. 
                Created with Python and CoinGecko’s API.
                </p>
            </div>
            <div>
                <h3> The Great Adventure</h3>
                <p>
                A fantasy RPG game created using Unity and C#
                </p>
            </div>
            <div>
                <h3> Persistent and Secure Contact Form </h3>
                <p>
                A web application that gathers and lists contact information input by the user. Every time an address
                is entered it is geocoded and marked on a map. The pages are dynamically generated with EJS. 
                Created with Node.JS, HTML, CSS , MongoDB, and Google Maps’ API.
                </p>
            </div>
            <div>
                <h3> Motif Calculator </h3>
                <p>
                Program determines a motifs expected frequency. User inputs a specific motif - a sting of A, T, C, G's (program checks if string is valid). Next, it asks the user to enter the frequency at which each nucleotide exists in their hypothetical genome. 
                It then calculates the probability of appearing in a sequence size N, and plots the probability of finding at least one of these motifs in a sequences of length N to 10,000.
                </p>
            </div>
        </div>
        );
}