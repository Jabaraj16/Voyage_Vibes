import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function AddReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
  <button onClick={handleShow} className='btn text-black rounded bg-white '>Add Review</button>
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
                <input type="file"  style={{display:'none'}}/>
                <img width={'100%'} src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="no image" /></label>
             
            </div>
            {/* part 2 */}
            <div className="col-lg-6">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subin" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Place Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Taj Mahal.." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Add review</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Add Location Link</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddReview