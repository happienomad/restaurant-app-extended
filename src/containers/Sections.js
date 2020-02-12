import React from 'react';
import { Link } from 'react-router-dom';
import GridItem from '../components/GridItem';
import useSectionsState from '../store/hooks/useSectionState';

const Sections = () => {
  const { state } = useSectionsState();

  return (
    <div className="flex flex-row justify-center">
      <div className="grid flex flex-row flex-wrap">
        {
          state.menu.length > 0 ?
            state.menu.map(section => {
              return (<Link key={section._id} className="grid-item" to={`/sections/${section._id}`}>
                <GridItem id={section._id} name={section.name.en} image={section.image.asset._ref} />
              </Link>)
            })
            : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

export default Sections;
