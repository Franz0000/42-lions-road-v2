// import { officialMembers , formerMembers, teachers} from '../data/members.js'
import React, { useState , useEffect} from 'react';
import axios from 'axios';

import Title from './Title'
import OfficialMembers from './OfficialMembers'
import FormerMembers from './FormerMembers'
import Teachers from './Teachers'
const Members = () => {
  const [officialMember, setOfficialMembers] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-13-231-242-0.ap-northeast-1.compute.amazonaws.com:3001/officials/member')
    .then((response) => {
      console.log('Image retrieve successfully:' , response.data.officialMembersData)
      setOfficialMembers(response.data.officialMembersData)
    })
    .catch(error => console.error('Error getting images:', error))
  }, [])
  return (<>
      <section className='section' id='tours'>
      <Title title='Official' subTitle='Members' />
      {/* <div className='section-center featured-center'>
        {officialMembers.map((member) => {
          console.log(member)
          return <OfficialMembers {...member} key={member.id} />
        })}
      </div> */}
      <div className='section-center featured-center'>
        {officialMember.map((member) => {
          return <OfficialMembers {...member} key={member._id} />
        })}
      </div>
      {/* <Title title='Former' subTitle='Officials' />
      <div className='section-center featured-center'>
        {formerMembers.map((formerMember) => {
          return <FormerMembers {...formerMember} key={formerMember.id} />
        })}
      </div>
      <Title title='Beloved' subTitle='Teachers' />
      <div className='section-center featured-center'>
        {teachers.map((teacher) => {
          return <Teachers {...teacher} key={teacher.id} />
        })}
      </div> */}
    </section>
  </>

    
  )
}
export default Members
