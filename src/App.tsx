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
                Svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
</svg>
                `,
                MarkDownContent: "20.09.1998",
            },
            {
                Svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
</svg>
                `,
                MarkDownContent: "Tallinn"
            },
            {
                Svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
</svg>
                `,
                MarkDownContent: "5141103"
            },
            {
                Svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
</svg>
                `,
                MarkDownContent: "andersonkarloskar@gmail.com"
            },
            {
                Svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
</svg>
                `,
                MarkDownContent: `
<a style="color: #000" href="https://github.com/oskar-anderson">
    github.com/oskar-anderson
</a>
                `
            }

        ],
        CategorizedListSections: {
            Heading: {
                Svg: `
<svg version="1.1" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 430.844 430.844" xmlSpace="preserve">
    <path d="M426.275,147.754l-98.2-114.787c-3.613-4.225-8.895-6.656-14.452-6.656H117.22c-5.559,0-10.839,2.432-14.452,6.656 L4.567,147.756c-6.132,7.167-6.084,17.746,0.113,24.858l196.402,225.395c3.612,4.145,8.841,6.523,14.34,6.523 c5.498,0,10.728-2.379,14.339-6.523l196.403-225.395C432.361,165.502,432.409,154.923,426.275,147.754z M197.904,64.351h35.035 l28.479,76.75h-91.992L197.904,64.351z M125.979,64.351h31.353l-28.479,76.75H60.32L125.979,64.351z M60.818,179.139h67.426 l35.751,118.405L60.818,179.139z M215.422,336.263L167.98,179.139h94.885L215.422,336.263z M266.848,297.544l35.751-118.405h67.426 L266.848,297.544z M301.991,141.101l-28.479-76.75h31.353l65.658,76.75H301.991z" />
</svg>
                `,
                Title: "Skills"
            },
            Content: [
                {
                    CategoryName: "Languages",
                    List: [".NET/C#", "PHP", "JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
                },
                {
                    CategoryName: "Frameworks",
                    List: ["ASP.NET Core", "Slim Framework", "Aurelia", "Vue", "Spring Boot"]
                },
                {
                    CategoryName: "Databases",
                    List: ["PostgreSQL", "MySQL", "SQLite"]
                },
                {
                    CategoryName: "Software",
                    List: ["JetBrains IDEs", "Git", "Postman", "VirtualBox", "AutoHotkey"]
                },
                {
                    CategoryName: "Other",
                    List: ["Native Estonian", "Proficent English", "Driving: B, C"]
                }
            ],
        },
        WorkSection: {
            Heading: {
                Svg: `
<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
</svg>
                `,
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
                Svg: `
<svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>
                `,
                Title: "Personal Projects"
            },
            Content: [
                {
                    MarkDownContent: `
Database visualization tool with scripting support written in TypeScript
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
                Svg: `
<svg version="1.1" width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 188" xml:space="preserve">
    <path d="M134.3,109.2L202,83.8V146c0,13.4-32.2,24.3-72,24.3S58,159.4,58,146V83.8l67.9,25.4l4.2,1.6L134.3,109.2z M130.1,98L258,50 L130.1,2L2,50l20,7.5v81.8c-4.7,2.2-8,7.1-8,12.7v34h28v-34c0-5.7-3.3-10.6-8.1-12.8V61.9L130.1,98z"/>
</svg>
                `,
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
