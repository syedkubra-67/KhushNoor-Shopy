function Profile() {
  return (
    <section className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/250"
          alt="Profile"
        />

        <h2>Khush Noor</h2>

        <p>
          Email
          <span> khushnoor@gmail.com</span>
        </p>

        <p>
          Phone
          <span> +91 9876543210</span>
        </p>

        <p>
          Address
          <span> Hyderabad, Telangana</span>
        </p>

        <button>
          Edit Profile
        </button>

      </div>

    </section>
  );
}

export default Profile;