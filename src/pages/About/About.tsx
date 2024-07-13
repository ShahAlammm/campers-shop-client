
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const About = () => {


    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 40.7128, // Replace with the latitude of your shop location
        lng: -74.0060, // Replace with the longitude of your shop location
    };
    return (
        <div>
            <div className='flex justify-center text-center items-center py-5'>
                <h1 className="text-3xl text-white font-bold my-2 border-l-8 border-l-yellow-400 px-3 py-5">
                    About Us
                </h1>
            </div>
            <div className="divider divider-warning"></div>
            <div className="about-page text-white">
                <div className="contact-information my-6">
                    <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                    <p className="text-lg"><strong>Phone:</strong> (880) 456-7890</p>
                    <p className="text-lg"><strong>Email:</strong> info@campersshop.com</p>
                    <p className="text-lg"><strong>Address:</strong> Dhaka, Bangladesh</p>
                </div>

                <div className="map-section my-6">
                    <h2 className="text-3xl font-bold mb-4">Our Location</h2>
                    <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>

                <div className="social-media-links my-6">
                    <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
                    <p className="text-lg">Stay connected with us on social media!</p>
                    <div className="social-icons flex gap-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="mission-statement my-6">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg">At Campers Shop, our mission is to provide camping enthusiasts with the best gear and accessories for their outdoor adventures. We believe in quality, reliability, and customer satisfaction. Our goal is to make your camping experience unforgettable and enjoyable.</p>
                </div>

                <div className="team-members my-6">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                    <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="team-member text-center">
                            <img src="/images/team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                            <p className="text-md">Founder & CEO</p>
                            <p className="text-sm mt-2">John is an avid camper and outdoor enthusiast with over 20 years of experience. His passion for camping inspired him to create Campers Shop.</p>
                        </div>
                        <div className="team-member text-center">
                            <img src="/images/team-member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
                            <p className="text-md">Head of Marketing</p>
                            <p className="text-sm mt-2">Jane's expertise in marketing has helped Campers Shop reach new heights. She is dedicated to spreading the word about our amazing products.</p>
                        </div>
                        <div className="team-member text-center">
                            <img src="/images/team-member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
                            <p className="text-md">Product Manager</p>
                            <p className="text-sm mt-2">Emily ensures that our product selection is top-notch and meets the needs of our customers. She loves testing new camping gear in the great outdoors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;