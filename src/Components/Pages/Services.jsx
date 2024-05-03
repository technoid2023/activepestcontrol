import React, { useState } from 'react';
import { MDBRow, 
        MDBCol,
        MDBCard, 
        MDBCardBody, 
        MDBCardTitle, 
        MDBCardText,
        MDBBtn, 
        MDBRipple,
        MDBCardImage, 
        MDBModal, 
        MDBModalHeader, 
        MDBModalBody, 
        MDBModalFooter,
        MDBAccordion, 
        MDBAccordionItem, 
        MDBModalContent,
        MDBModalDialog, 
        MDBModalTitle, 
        MDBTabs,
        MDBTabsItem,
        MDBTabsLink,
        MDBTabsContent,
        MDBTabsPane} from 'mdb-react-ui-kit';
import Layout from '../Layout/Layout';
import banner from '../../Assests/banner.jpg';
import bug from '../../Assests/bug.webp';
import mosquito from '../../Assests/mosquito.jpg';
import termite from '../../Assests/termite.jpg';
import rat from '../../Assests/rat.jpg';
import cockroach from '../../Assests/cockroach.jpg';
import beetles from '../../Assests/beetles.jpg';
import flies from '../../Assests/flies.jpg';
import spider from '../../Assests/spider.jpg';

const Services = () => {
  const [data, setData] = useState([
    {
      slno: 1,
      service: "Bug Control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: bug
    },
    {
      slno: 2,
      service: "Mosquito control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: mosquito
    },
    {
      slno: 3,
      service: "Termite Control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: termite
    },
    {
      slno: 4,
      service: "Rat control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: rat
    },
    {
      slno: 5,
      service: "Cockroach control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: cockroach
    },
    {
      slno: 6,
      service: "Beetles control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: beetles
    },
    {
      slno: 7,
      service: "Spider control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: spider
    },
    {
      slno: 8,
      service: "Flies control",
      details: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: flies
    }
  ]);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };


  const openModal = (item) => {
    setOpen(!open)
    setModalData(item);
    setModalOpen(true);
    console.log(modalOpen);
    console.log(modalData);
   
  
  };

  return (
    <Layout>
      <div style={{ backgroundColor: 'linen', paddingBottom: '20px',paddingRight: '20px',paddingLeft: '20px' }}>
        <header style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={banner} alt="background" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <div className='mask' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='text-white  text-center'>
              <h1 className='mb-3 fs-1 fw-bolder'>ACPS</h1>
              <h4 className='mb-2 fs-2 fw-bolder'>Save your environment</h4>
              <a className='btn btn-outline-light btn-lg' href='contact-us' role='button'>
                Contact us
              </a>
            </div>
          </div>
        </header>

        <div style={{ border: '1px solid #ced4da', borderRadius: '10px', marginTop: '20px', padding: '20px' }}>
          <MDBRow>
            <h2 style={{ textAlign: "center", textDecorationLine: "underline", color: "darkgoldenrod" }}>Our Service</h2>
          </MDBRow>
          <hr className="hr hr-blurry" />
          {/* Small cards section */}
          <div>
            {[...Array(Math.ceil(data.length / 4)).keys()].map((groupIndex) => (
              <MDBRow key={groupIndex} className="mb-4 justify-content-center">
                {/* Mapping over each group of four cards */}
                {data.slice(groupIndex * 4, groupIndex * 4 + 4).map((item, index) => (
                  <MDBCol key={index} size="auto" className="d-flex align-items-stretch">
                    <MDBCard style={{ width: '18rem', border: '3px solid red', borderRadius: '8%', margin: '10px' }}>
                      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <div style={{ maxHeight: '200px', overflow: 'hidden', borderRadius: '8% 8% 0 0' }}>
                          <MDBCardImage className="card-img-top" src={item.img} alt='...' style={{ height: '150px', objectFit: 'cover' }} />
                        </div>
                        <a>
                          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody className="d-flex flex-column justify-content-between">
                        <MDBCardTitle>{item.service}</MDBCardTitle>
                        <MDBBtn onClick={() => openModal(item)}>Read more</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            ))}
          </div>
        </div>

        <MDBModal open={open} setOpen={setOpen} tabIndex={-1}>
          <MDBModalDialog size='lg'>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{modalData.service}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={() => setOpen(!open)}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                {modalData.details}
                <MDBAccordion borderless initialActive={1}>
                  <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </MDBAccordionItem>
                  <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </MDBAccordionItem>
                  <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </MDBAccordionItem>
                </MDBAccordion>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn type='button' onClick={() => setOpen(!open)}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        
        <div style={{ border: '1px solid #ced4da', borderRadius: '10px', marginTop: '20px', padding: '20px' }}>
          <MDBRow>
            <MDBCol sm='6'>
              <MDBCard style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZenRBh1eklC5G6ePj4z9BJ403giyfrGIslA&usqp=CAU')`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: '200px' }}>
                <MDBCardBody>
                  <MDBCardTitle>You May Contact</MDBCardTitle>
                  <MDBCardText>
                    Phone: +917003849728<br />
                    Email: activepestcontrol2022@gmail.com<br />
                  </MDBCardText>            
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='6'>
              <MDBCard style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneVcPT3A71s9L8j_GTl35jdD_FRepeZMe7g&usqp=CAU')`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', height: '200px' }}>
                <MDBCardBody>
                  <MDBCardTitle>Reach Out To Us</MDBCardTitle>
                  <MDBCardText>
                    For any query and information about service 
                  </MDBCardText>
                  <MDBBtn className='btn btn-success' href='contact-us'>Click Here</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>

      </div>
    </Layout>
  );
};

export default Services;
