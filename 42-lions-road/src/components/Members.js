import { officialMembers , formerMembers, teachers} from '../data/members.js'
import React, { useState , useEffect} from 'react';
import axios from 'axios';

import Title from './Title'
import OfficialMembers from './OfficialMembers'
import FormerMembers from './FormerMembers'
import Teachers from './Teachers'
const Members = () => {
  // const [officialMember, setOfficialMembers] = useState([]);

  // useEffect(() => {
  //   axios.get('http://ec2-54.95.255.71.ap-northeast-1.compute.amazonaws.com:3000/officials/member')
  //   .then((response) => {
  //     console.log('Image retrieve successfully:' , response.data.officialMembersData)
  //     setOfficialMembers(response.data.officialMembersData)
  //   })
  //   .catch(error => console.error('Error getting images:', error))
  // }, [])
  return (<>
      <section className='section' id='tours'>
      <Title title='Official' subTitle='Members' />
      <div className='section-center featured-center'>
        {officialMembers.map((member) => {
          console.log(member)
          return <OfficialMembers {...member} key={member.id} />
        })}
      </div>
      <Title title='Former' subTitle='Officials' />
      <div className='section-center featured-center'>
        {formerMembers.map((member) => {
          return <FormerMembers {...member} key={member.id} />
        })}
      </div>
      <Title title='Beloved' subTitle='Teachers' />
      <div className='section-center featured-center'>
        {teachers.map((member) => {
          return <Teachers {...member} key={member.id} />
        })}
      </div>
    </section>
  </>

    
  )
}
export default Members
