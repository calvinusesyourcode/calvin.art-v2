import Head from "next/head";
import React from "react";

export default function MatrixStyling() {
    return React.createElement("style", null, `
                        html {
                            background-color: black;
                            overflow: hidden;
                            height: 100%;
                        }
                        
                        body {
                            padding: 0;
                            margin: 0;
                            height: 100%;
                            width: 100%;
                        }
                    `);
}