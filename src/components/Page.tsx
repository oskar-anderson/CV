import "paper-css/paper.min.css";
import profilePicture from "../assets/profile-25-01-2023_cropped-300-300.png";
import Markdown from 'markdown-to-jsx';

interface SectionHeading {
    Svg: string;
    Title: string;
}

export interface Props {
    Name: string;
    Title: string;
    IntroText: string;
    ProfilePictureSrc: string;
    SideInfo: {
        Svg: string;
        MarkDownContent: string;
    }[];
    CategorizedListSections: {
        Heading: SectionHeading;
        Content: {
            CategoryName: string;
            List: string[];
        }[];
    };
    WorkSection: {
        Heading: SectionHeading;
        Content: {
            Title: string;
            Company: string;
            Period: string;
            MarkDownContent: string;
        }[];
    };
    PersonalProjectsSection: {
        Heading: SectionHeading;
        Content:
        {
            MarkDownContent: string
        }[];
    };
    EducationSection: {
        Heading: SectionHeading;
        Content: {
            DateFinished: string;
            MarkDownContent: string;
        }[];
    };
}

export default function Page(model: Props) {
    return (
        <section className="sheet" style={{ display: "flex" }}>
            <div style={{ overflow: "hidden" }}>
                <div style={{ display: "flex", margin: "10mm 10mm 1.2em 10mm" }}>
                    <img
                        src={profilePicture}
                        alt="profile-pic"
                        width="120px"
                        height="120px"
                    />
                    <div style={{ marginLeft: "34px" }}>
                        <header style={{ marginBottom: "20px" }}>
                            <h1
                                style={{
                                    fontSize: "32px",
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                    fontFamily: "Merriweather",
                                }}
                            >
                                {model.Name}
                            </h1>
                            <div style={{ fontSize: "13pt" }}>{model.Title}</div>
                        </header>
                        <div style={{ textAlign: "justify" }}>{model.IntroText}</div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: "#f1f1f1",
                        justifyContent: "center",
                        padding: "0.8em 10mm",
                        lineHeight: "1.8em",
                        fontSize: "12px",
                    }}
                    className="flex-gap"
                >
                    {model.SideInfo.map((x) => {
                        return (
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginRight: "0.8em",
                                    }}
                                >
                                    <Markdown>{x.Svg}</Markdown>
                                </div>
                                <div>
                                    <Markdown>{x.MarkDownContent}</Markdown>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div style={{ margin: "8px 10mm 10mm 10mm" }}>
                    <div>
                        <h2 style={{ display: "flex", marginBottom: "0.4em" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Markdown>{model.CategorizedListSections.Heading.Svg}</Markdown>
                            </div>
                            <span style={{ marginLeft: "4px" }} className="section-heading">
                                {model.CategorizedListSections.Heading.Title}
                            </span>
                        </h2>
                        <div style={{ display: "grid", rowGap: "8px" }}>
                            {model.CategorizedListSections.Content.map((x, i) => {
                                let color = i % 2 === 0 ? "#f1f1f1" : "#ffffff";
                                return (
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(4, 1fr)",
                                            marginLeft: "20px",
                                            backgroundColor: color,
                                            borderRadius: "6px",
                                        }}>
                                        {x.List.map((xx) => {
                                            return <div className="grid-item">{xx}</div>;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        style={{
                            margin: "12px 0",
                            borderBottom: "1px solid #ccc",
                            color: "transparent",
                        }}
                    />
                    <div>
                        <h2 style={{ display: "flex", marginBottom: "0.4em" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Markdown>{model.WorkSection.Heading.Svg}</Markdown>
                            </div>
                            <span style={{ marginLeft: "4px" }} className="section-heading">
                                {model.WorkSection.Heading.Title}
                            </span>
                        </h2>
                        <div style={{ margin: "0 0 0 calc(var(--std-tab-size) * 1)" }}>
                            {
                                model.WorkSection.Content.map(x => {
                                    return (
                                        <div style={{ position: "relative" }}>
                                            <div
                                                className="o-std-margin-bottom"
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ fontWeight: "bold" }}>
                                                    {x.Company} – {x.Title}
                                                </div>
                                                <div style={{ alignItems: "center", display: "flex" }}>
                                                    {x.Period}
                                                </div>
                                            </div>
                                            <p>
                                                <Markdown>{x.MarkDownContent}</Markdown>
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div
                        style={{
                            margin: "12px 0",
                            borderBottom: "1px solid #ccc",
                            color: "transparent",
                        }}
                    />
                    <div>
                        <h2 style={{ display: "flex", marginBottom: "0.4em" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Markdown>{model.PersonalProjectsSection.Heading.Svg}</Markdown>
                            </div>
                            <span style={{ marginLeft: "4px" }} className="section-heading">
                                {model.PersonalProjectsSection.Heading.Title}
                            </span>
                        </h2>
                        <div>
                            <ul>
                                {model.PersonalProjectsSection.Content.map(x => {
                                    return (
                                        <li className="o-list-item-std-vertical-margin">
                                            <Markdown>{x.MarkDownContent}</Markdown>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            margin: "12px 0",
                            borderBottom: "1px solid #ccc",
                            color: "transparent",
                        }}
                    />
                    <div>
                        <h2 style={{ display: "flex", marginBottom: "0.4em" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Markdown>{model.EducationSection.Heading.Svg}</Markdown>
                            </div>
                            <span style={{ marginLeft: "4px" }} className="section-heading">
                                {model.EducationSection.Heading.Title}
                            </span>
                        </h2>
                        <div>
                            <ul>
                                {model.EducationSection.Content.map(x => {
                                    return (
                                        <li
                                            className="o-list-item-std-vertical-margin"
                                            style={{ position: "relative" }}
                                        >
                                            <div>
                                                <Markdown>{x.MarkDownContent}</Markdown>
                                            </div>
                                            <div style={{ position: "absolute", right: 0, top: 0 }}>
                                                {x.DateFinished}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
