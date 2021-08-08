import ProjectArticleCard from '../components/ProjectArticleCard';

import projects from '../assets/data/projects.json';

function Projects(){
    return (
        <div>
            <span className="text-4xl font-bold magical-underline" >Projects</span>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:col-span-1 gap-10">
                {
                    projects.map((project) => <ProjectArticleCard 
                        thumbnail={project.thumbnail}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                        tags={project.tags}
                        ongoing={project.ongoing}
                    />)
                }
            </div>
        </div>
    );
}


















export default Projects;