import { motion } from 'framer-motion';
import TeamMembersWidget from './widgets/TeamMembersWidget';
import { useEffect } from 'react';
import { baseUrl } from 'app/configs/serverConfig';
import { useState } from 'react';

function TeamTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [hotelData, setHotalData] = useState([])
  useEffect(() => {
    fetch(`${baseUrl}/hotel/listedData`)
    .then(res => res.json())
    .then(data => setHotalData(data))
    .catch(err => console.log(err))
  },[hotelData])

  return (
    <motion.div
      className="flex flex-wrap p-24"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="widget flex w-full">
        <TeamMembersWidget hotelData={hotelData}/>
      </motion.div>
    </motion.div>
  );
}

export default TeamTab;