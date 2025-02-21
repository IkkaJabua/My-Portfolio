import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'I am proficient in HTML5, with a deep understanding of semantic structure and accessibility. I can create well-structured, responsive web pages with clean, maintainable markup.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'I have advanced knowledge of CSS3, including Flexbox, Grid, and animation techniques. I excel at creating visually appealing, responsive designs that work across all devices.',
    icon: faCss3
  },
  {
    name: 'JavaScript',
    des: 'I am well-versed in JavaScript, using it for dynamic and interactive web applications. I am familiar with ES6+ features, and I am skilled in working with asynchronous programming and APIs.',
    icon: faJs
  },
  {
    name: 'ReactJs',
    des: 'I specialize in React, using hooks, state management, and routing to build dynamic single-page applications. I focus on writing reusable components and enhancing user experience.',
    icon: faReact
  },
  {
    name: 'VueJs',
    des: 'I have experience working with Vue.js to build progressive web applications. I utilize its reactivity system and component-based architecture to create scalable and efficient apps.',
    icon: faVuejs
  },
  {
    name: 'Laravel',
    des: 'I am proficient in Laravel, building robust and secure backend systems. I specialize in developing RESTful APIs, authentication systems, and managing databases with Eloquent ORM.',
    icon: faLaravel
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

