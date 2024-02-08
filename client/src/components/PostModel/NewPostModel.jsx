import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaImages } from 'react-icons/fa6';
import { GrFormPreviousLink } from "react-icons/gr";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "35%",
  height: "68vh",
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

export default function NewPostModel({modelOpne,setModelOpen}) {
  const handleClose = () => setModelOpen(false);
  const imgref = useRef()
  const handleImage = ()=>{

  }
  const handleback = () => {
  
}

  return (
    <div>
      <Modal
        open={modelOpne}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
                    <div className='flex flex-col text-blue-900 b justify-between h-full'>
                        <div className={` flex  justify-center  items-center p-1`}>
                            {/* <GrFormPreviousLink size={30} onClick={handleback} /> */}
                            <span className='font-bold text-xl'>New Post</span>
                        </div>
                        <hr color='black' className='mb-2' />
    
                        <div className='flex flex-col justify-center items-center  h-64' onClick={() => imgref.current.click()}>
                            <div >
                                <FaImages size={70} />
                            </div>

                            <input type="file" ref={imgref} onChange={handleImage} style={{ display: "none" }} />
                            <div>
                                <button className='bg-blue-400 px-6 py-2 rounded text-white'>Upload</button>
                            </div>
                        </div>
                        {/* } */}
                        <div className='flex justify-center items-center mt-2' >
                            <button className='w-3/4  bg-blue-600 text-white rounded p-2'>Upload</button>
                        </div>
                    </div>

                    <img src={""} alt="" />
                   

                </Box>
      </Modal>
    </div>
  );
}