import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Server_URL } from '../../Services/ServerURL';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { editPlaceAPI } from '../../Services/allAPI';
import { addPlaceResponseContext, editPlaceContextResponse } from '../ContextAPI/ContextShare';

function EditPlace({place}) {
  const {editPlaceResponse,setEditPlaceResponse}=useContext(editPlaceContextResponse)
    const [show, setShow] = useState(false);
    const navigate=useNavigate()
    const username=sessionStorage.getItem("username")
    const [preview,setPreview]=useState("") 
    const [placeData,setPlaceData]=useState({
      id:place._id,username,placeName:place.placeName,review:place.review,placeLocation:place.placeLocation,placeImage:place.placeImage,placeRating:place.placeRating
    })
    const [imgStatus,setImgstatus]=useState(false)
    useEffect(()=>{
      if(placeData.placeImage.type=="image/png" || placeData.placeImage.type=="image/jpg" || placeData.placeImage.type=="image/jpeg" ||placeData.placeImage.type=="image/img"){
        setImgstatus(false)
        setPreview(URL.createObjectURL(placeData.placeImage))
      }else{
        setImgstatus(true)
        setPreview("")
      }
    },[placeData.placeImage])

    const handleClose = () => setShow(false);
    const handleShow = () =>{ 
      setShow(true)
      setPlaceData({
        id:place._id,username,placeName:place.placeName,review:place.review,placeLocation:place.placeLocation,placeImage:place.placeImage,placeRating:place.placeRating
      })
      setPreview("")
    
    };

    const handleUpdate=async()=>{
      const {id,username ,placeName ,review ,placeLocation ,placeImage ,placeRating}=placeData
      if(!username){
        toast.error("please login to add review ")
       setTimeout(()=>{
        navigate('/login')
       },3000)
      }
      else if (!placeName ||!review || !placeLocation || !placeImage || !placeRating){
        toast.info("please fill the form")
      }else{
        //api call
        const reqBody=new FormData()
        reqBody.append("username",username)
        reqBody.append("placeName",placeName)
        reqBody.append("review",review)
        reqBody.append("placeLocation",placeLocation)
       preview?reqBody.append("placeImage",placeImage):reqBody.append("placeImage",place.placeImage)
        reqBody.append("placeRating",placeRating)

        const token=sessionStorage.getItem("token")
      if(token){
          const reqHeader={
            "Content-Type":preview?"multipart/form-data":"application/json",
            "Authorization":`Bearer ${token}`
          }
          try{
            const result=await editPlaceAPI(id,reqBody,reqHeader)
            if(result.status==200){
              handleClose()
              setEditPlaceResponse(result.data)
            
            }else{
              toast.success(result.response.data)
            }
          } catch(err){
            console.log(err);
          }
      }  
           
        }
    }

  return (
    <>
     <button  onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
      <Modal size='lg'
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              {/* part1 */}
              <div className="col-lg-6">
                <label>
                  <input type="file"  style={{display:'none'}} onChange={e=>setPlaceData({...placeData,placeImage:e.target.files[0]})}/>
                  <img width={'100%'} src={preview?preview:`${Server_URL}/uploads/${placeData.placeImage}`} alt="no image" /></label>
                  <div className="d-flex w-100 justify-content-center align-items-center mt-5">
                  <div className=''>
                    {imgStatus&&<div className="text-center">
                    <p className="text-danger">Please upload image in given format *png *jgp *jpeg *img</p>
                  </div>}
                  <div className="d-flex w-100 justify-content-center align-items-center mt-5">
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Typography component="legend" className="text-center">Your Rating</Typography>
                      <Rating
                      className="d-flex w-100 justify-content-center align-items-center"
                        name="simple-controlled"
                        value={placeData.placeRating}
                        onChange={e=>setPlaceData({...placeData,placeRating:e.target.value})}
                      />
                      </Box>
                  </div>
                  </div>
              </div>
              </div>
              {/* part 2 */}
              <div className="col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Place Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Taj mahal" value={placeData.placeName} onChange={e=>setPlaceData({...placeData,placeName:e.target.value})}  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Add review</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  value={placeData.review} onChange={e=>setPlaceData({...placeData,review:e.target.value})}></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Add Location Link</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""  value={placeData.placeLocation} onChange={e=>setPlaceData({...placeData,placeLocation:e.target.value})}/>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>UPDATE</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer autoClose={3000} theme='colored' />
      </>
  )
}

export default EditPlace