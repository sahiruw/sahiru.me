'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [project, setProject] = useState<{ title: string; description: string } | null>(null);

    useEffect(() => {
        if (id) {
            // Fetch project data based on the id
            fetch(`/api/projects/${id}`)
                .then(response => response.json())
                .then(data => setProject(data?.data))
                .catch(error => console.error('Error fetching project data:', error));
        }
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{JSON.stringify(project)}</h1>
            <p>{project.description}</p>
            {/* Render other project details here */}
        </div>
    );
};

export default ProjectPage;