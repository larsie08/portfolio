import React from "react";

const ProjectCard = ({ project }) => {
	const { url, github, demo, stack, name } = project;

	return (
		<div className="project-card" data-aos="fade-up">
			<div
				className="project-card__img"
				style={{
					background: `#eee url(${url}) no-repeat center bottom/cover`,
				}}
			>
				<div className="project-card__stack">
					<h3 className="project-card__title">{name}</h3>
					<ul>
						{stack.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>

			<div className="project-card__refs">
				<a href={github} target="_blank" rel="noreferrer">
					GitHub
				</a>
				<a href={demo} target="_blank" rel="noreferrer">
					Demo
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
