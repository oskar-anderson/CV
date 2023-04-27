import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import 'paper-css/paper.min.css'
import { Props } from './components/Page'

function App() {
    let content: Props = {
        Name: "Karl Oskar Anderson",
        Title: "IT Systems Developer",
        IntroText: `
            Determined and persistent person that strives for accuracy.
            Looking to apply skills learned during bachelor's studies in real world projects.
        `,
        ProfilePictureSrc: "string",
        SideInfo: [
            {
                Svg: "bi bi-calendar",
                MarkDownContent: "20.09.1998",
            },
            {
                Svg: "bi bi-geo-alt-fill",
                MarkDownContent: "Tallinn"
            },
            {
                Svg: "bi bi-telephone-fill",
                MarkDownContent: "5141103"
            },
            {
                Svg: "bi bi-envelope-fill",
                MarkDownContent: "andersonkarloskar@gmail.com"
            },
            {
                Svg: "bi bi-github",
                MarkDownContent: `
                    <a style="color: #000" href="https://github.com/oskar-anderson">
                        github.com/oskar-anderson
                    </a>
                `
            }

        ],
        CategorizedListSections: {
            Heading: {
                Svg: "bi bi-gem",
                Title: "Skills"
            },
            Content: [
                {
                    CategoryName: "Languages",
                    List: [".NET/C#", "PHP", "JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
                },
                {
                    CategoryName: "Frameworks",
                    List: ["ASP.NET Core", "Slim Framework", "Aurelia", "Vue", "React", "Spring Boot"]
                },
                {
                    CategoryName: "Databases",
                    List: ["PostgreSQL", "MySQL", "SQLite"]
                },
                {
                    CategoryName: "Software",
                    List: ["JetBrains IDEs", "Git", "Postman", "VirtualBox"]
                },
                {
                    CategoryName: "Other",
                    List: ["Native Estonian", "Proficent English", "Driving: B, C"]
                }
            ],
        },
        WorkSection: {
            Heading: {
                Svg: "bi bi-bookmark-star-fill",
                Title: "Work"
            },
            Content: [
                {
                    Title: "Software developer intern",
                    Company: "SIROWA TALLINN AS",
                    Period: "Mar 2021 – June 2021",
                    MarkDownContent: `
                        Developed a full stack warehouse temperature and humidity monitoring system.
                        Created a polished frontend and well structured backend with both SOAP and REST APIs.
                        Implemented binning and clustering algorithms for data visualization and alert observation. 
                        PHP, JS, Bootstrap, Google Charts, MySQL <a href="https://github.com/oskar-anderson/Tempsens">[link]</a>
                    `,
                }
            ],
        },
        PersonalProjectsSection: {
            Heading: {
                Svg: "bi bi-briefcase-fill",
                Title: "Personal Projects"
            },
            Content: [
                {
                    MarkDownContent: `
                        Database visualization tool with scripting support written in TypeScript and React
                        <a href="https://github.com/oskar-anderson/RasterModeler">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Maanteeamet driving exam automation using Python and Selenium
                        <a href="https://github.com/oskar-anderson/maanteeamet-timescanner">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Full stack app for a customized meal ordering system written in .NET and Aurelia
                        <a href="https://github.com/oskar-anderson/PitsaRiina">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        Algorithm for finding Minimum Spanning Tree written in Java
                        <a href="https://github.com/oskar-anderson/MinimumSpanningTree">
                            [link]
                        </a>
                    `
                },
                {
                    MarkDownContent: `
                        CSS font animations playground
                        <a href="https://github.com/oskar-anderson/Kapsas">
                            [link]
                        </a>
                    `
                }
            ],
        },
        EducationSection: {
            Heading: {
                Svg: "bi bi-mortarboard-fill",
                Title: "Education"
            },
            Content: [
                {
                    DateFinished: "Jan 2023",
                    MarkDownContent: "IT Systems Development Bachelor's degree - TalTech",
                },
                {
                    DateFinished: "June 2022",
                    MarkDownContent: "Estonian Cyber Command conscript - Ämari Air Base",
                },
                {
                    DateFinished: "June 2018",
                    MarkDownContent: "High School - Tallinn Lilleküla Gymnasium",
                }
            ],
        },
    }

    return (
        <div style={{ display: 'grid' }}>
            <Page {...content} />
        </div>
    );
}

export default App
