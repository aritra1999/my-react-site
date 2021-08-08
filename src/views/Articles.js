import ProjectArticleCard from '../components/ProjectArticleCard';

import articles from '../assets/data/articles.json';

function Projects(){
    return (
        <div>
            <span className="text-4xl font-bold magical-underline" >Articles</span>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:col-span-1 gap-10">
                {
                    articles.map((article, i) => <ProjectArticleCard
                        key={i}
                        thumbnail={article.thumbnail}
                        title={article.title}
                        description={article.description}
                        links={article.links}
                        tags={article.tags}
                        ongoing={article.ongoing}
                    />)
                }
            </div>
        </div>
    );
}


export default Projects;