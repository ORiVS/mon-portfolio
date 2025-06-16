// pages/projects/[slug].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useTheme } from "next-themes";
import projects from "../../data/projectData";

const ProjectDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const theme = useTheme();
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    const project = projects.find((p) => p.slug === slug);
    if (!project) return <p className="text-center mt-20">Projet introuvable</p>;

    return (
        <>
            {process.env.NODE_ENV === "development" && (
                <div className="fixed bottom-6 right-6">
                    <Button onClick={() => router.push("/edit")} type={"primary"}>
                        Edit Project
                    </Button>
                </div>
            )}
            {project.showCursor && <Cursor />}
            <div className={`container mx-auto mb-10 ${project.showCursor && "cursor-none"}`}>
                <Header isBlog />
                {mount && (
                    <div className="mt-10 w-full flex flex-col items-center">
                        <div
                            className={`w-full ${
                                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                            } max-w-4xl p-10 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
                        >
                            <h1 className="text-3xl font-bold">{project.title}</h1>
                            <h2 className="text-xl mt-5">{project.description}</h2>
                            <img src={project.image} alt={project.title} className="mt-5 rounded-md" />

                            <div className="mt-10">
                                <h1 className="text-2xl font-bold">Technologies</h1>
                                <ul className="list-disc ml-5 mt-2">
                                    {project.stack.map((tech, index) => (
                                        <li key={index}>{tech}</li>
                                    ))}
                                </ul>
                            </div>

                            {project.content && (
                                <div className="mt-10">
                                    <h1 className="text-2xl font-bold">Détails</h1>
                                    <p className="mt-2 opacity-75 whitespace-pre-line">{project.content}</p>
                                </div>
                            )}

                            {project.links && project.links.length > 0 && (
                                <div className="mt-10">
                                    <h1 className="text-2xl font-bold">Liens du projet</h1>
                                    <ul className="list-disc ml-5 mt-2">
                                        {project.links.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectDetail;
