'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [project, setProject] = useState<{ title: string; description: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Fetch project data based on the id
            fetch(`/api/projects/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProject(data?.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching project data:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
                <div className="text-white text-lg sm:text-xl">Loading...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
                <div className="text-white text-lg sm:text-xl">Project not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-900 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={() => router.back()}
                    className="text-blue-500 hover:text-blue-400 mb-4 sm:mb-6 text-sm sm:text-base flex items-center gap-2"
                >
                    ← Back
                </button>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">{project.title}</h1>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                {/* Render other project details here */}
            </div>
        </div>
    );
};

export default ProjectPage;