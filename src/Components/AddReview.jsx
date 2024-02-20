import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import skeltonImg from '../assets/add-img.jpg'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { addPlaceAPI } from "../../Services/allAPI";
import { addPlaceResponseContext } from "../ContextAPI/ContextShare";

function AddReview() {
  const{addPlaceResponse,setAddPlaceResponse}=useContext(addPlaceResponseContext)
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleShow = () => setShow(true);
  const username=sessionStorage.getItem("username")
  const [placeData,setPlaceData]=useState({
    username,placeName:"",review:"",placeLocation:"",placeImage:"",placeRating:""
  })
  const [preview,setPreview]=useState("") 
  const [imgStatus,setImgstatus]=useState(false)
console.log(preview);

  useEffect(()=>{
    if(placeData.placeImage.type=="image/png" || placeData.placeImage.type=="image/jpg" || placeData.placeImage.type=="image/jpeg"){
      setImgstatus(false)
      setPreview(URL.createObjectURL(placeData.placeImage))
    }else{
      setImgstatus(true)
      setPreview("")
    }
  },[placeData.placeImage])
 
  const handleClose = () =>{
    setShow(false)
    setPlaceData({
      username,placeName:"",review:"",placeLocation:"",placeImage:"",placeRating:""
    })
    setPreview("")
  }
  const handleAdd=async()=>{
    const {username ,placeName ,review ,placeLocation ,placeImage ,placeRating}=placeData
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
      reqBody.append("placeImage",placeImage)
      reqBody.append("placeRating",placeRating)

      const token=sessionStorage.getItem("token")
      if(token){
         const reqHeader={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        try{
          const result=await addPlaceAPI(reqBody,reqHeader)
          if(result.status==200){
            setAddPlaceResponse(result.data)
            setPlaceData({
              username,placeName:"",review:"",placeLocation:"",placeImage:"",placeRating:""
            })
            setShow(false)
            setPreview("")
          }
        }catch(err){
          console.log(err);
        }
      }else{
        toast.info("please login to add review")
      }

    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn text-black rounded bg-white fw-bold'>Add Review</button>
      <Modal size="lg"
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
                <input type="file" onChange={e=>setPlaceData({...placeData,placeImage:e.target.files[0]})} style={{ display: 'none' }} />
                <img width={'100%'} src={preview?preview:skeltonImg} alt="no image" /></label>
              
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
            {/* part 2 */}
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >Place Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Taj Mahal.." onChange={e=>setPlaceData({...placeData,placeName:e.target.value})} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >Add review</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e=>setPlaceData({...placeData,review:e.target.value})}></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label" >Add Location Link</label>
                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="" onChange={e=>setPlaceData({...placeData,placeLocation:e.target.value})}/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored' />
    </>
  )
}

export default AddReview