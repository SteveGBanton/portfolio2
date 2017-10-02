const Project = ({ project }) => {

const cssStyle = () => {
  return {background: 'url('+ project.image +') no-repeat ',
          backgroundSize: '100%',
          backgroundPosition: 'center center'
          }
}
		return (
			<div className='project' style={cssStyle()}>

        <div className='shadow'>
            <div className='project-title'>{project['title']}</div>
            <div>{project['description']}</div>
            <div>Libraries: {project['tags'].map((item) => {
              return item + " "
            })}</div>
            <div><a href={project.link} target='_blank'><u>Click here to view project.</u></a>
            {(project['github']) ? <a href={project['github']} target='_blank'>
            <i className='fa fa-github github-link' aria-hidden='true'></i></a>:null}</div>
        </div>


      </div>
		)
}
