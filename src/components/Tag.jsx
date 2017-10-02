const Tag = ({ tag, allTags }) => {

		return (
			<span className={tag[1] == 'on' ? 'tag-on' : 'tag-off'}
            onClick={() => {

      store.dispatch(
        tagToggle(tag, allTags)
      );

      }}>

      {tag[0]}

      </span>
		)
}
