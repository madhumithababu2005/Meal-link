import "./VolunteerLogin.css";

const VolunteerLogin = () => {
    return (
        <div className="volunteer-container">
            <h2>Volunteer Opportunities</h2>
            <div className="cards-container">
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1372628045/photo/waitress-handling-a-food-order-to-a-delivery-person-at-a-dark-kitchen.jpg?s=612x612&w=0&k=20&c=CuR2jrliMy6X2Y55cDZVITtwvQSlnF1haKXis6o-onI=" alt="Food Pickup" />
                    <h3>Food Pickup</h3>
                    <p>Help collect surplus food from restaurants and stores.</p>
                </div>
                <div className="card">
                    <img src="https://media.istockphoto.com/id/1220577245/photo/hand-to-hand-of-delivery-food-service-sending-delicious-from-restaurant-to-customer-without.jpg?s=612x612&w=0&k=20&c=hi2V5NofkylK9IfkQe7jIc5rUAcPlmKqjr_DmbCeqDo=" alt="Food Delivery" />
                    <h3>Food Delivery</h3>
                    <p>Deliver food to shelters and food banks in need.</p>
                </div>
                <div className="card">
                    <img src="https://media.istockphoto.com/id/857146092/photo/sea-of-hands.jpg?s=612x612&w=0&k=20&c=mpZdzYstDIE_OGQ9PivyYdtA5Vq8wwbZF_uazfbfuwo=" alt="Community Support" />
                    <h3>Community Support</h3>
                    <p>Assist with organizing and distributing food supplies.</p>
                </div>
            </div>

            {/* Move Sign In Button below the cards */}
            <div className="login-container">
            <button onClick={() => window.open("/volunteer-signin", "_blank")}>
  Volunteer Sign In
</button>

            </div>
        </div>
    );
};

export default VolunteerLogin;
