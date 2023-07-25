import SideBar from "../components/SideBar";
import "./css/AdminCreateProperties.css";
import { useState } from "react";

function AdminCreatePropertiesIMG() {
  const [propertyId, setPropertyId] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [formData, setFormData] = useState({});
  const [err, setErr] = useState(false);

  const handleCreateProperty = (e) => {
    e.preventDefault();
    if (propertyId === "" || !image1 || !image2 || !image3) {
      setErr(true);
      return;
    }
    else {
      setFormData({
        "image1": image1,
        "image2": image2,
        "image3": image3

      })
      console.log(formData)
    }

    let url = `http://property.reworkstaging.name.ng/v1/properties/${propertyId}/resource`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        'authorization': 'Bearer ' + sessionStorage.getItem("admin-token")
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("image posted");
      });

    // console.log("AgentToken " + agentToken)

    const token = sessionStorage.getItem("admin-token");
    console.log(token);
  };

  return (
    <div className="ala">
      <SideBar />
      <div className="pl-64 form-cointerner">
        <form className="form-container" onSubmit={handleCreateProperty}>
          <h1 className="form-title">Create Property Image</h1>
          <div className="form-flex">
            <div className="form-flex1">
              <div className="form-input-group">
                <label className="form_label">Property Id</label><br />
                <input
                  type="text"
                  className="form_input"
                  placeholder="Agent Id"
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                /><br />
                {err === true && propertyId === "" ? <span className="createAccSpan">Property ID Required</span> : null}
              </div>

              <div className="form-input-group">
                <label className="form_label">Image1</label><br />
                <input
                  type="file"
                  className="form_input"
                  required
                  accept="image/*" // Add the accept attribute for image files
                  onChange={(e) => setImage1(e.target.files[0])}
                /><br />
                {err === true && !image1 ? <span className="createAccSpan">Image1 Required</span> : null}
              </div>
            </div>

            <div>
              <div className="form-input-group">
                <label className="form_label">Image2</label><br />
                <input
                  type="file"
                  className="form_input"
                  required
                  accept="image/*" // Add the accept attribute for image files
                  onChange={(e) => setImage2(e.target.files[0])}
                /><br />
                {err === true && !image2 ? <span className="createAccSpan">Image2 Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Image3</label><br />
                <input
                  type="file"
                  className="form_input"
                  required
                  accept="image/*" // Add the accept attribute for image files
                  onChange={(e) => setImage3(e.target.files[0])}
                /><br />
                {err === true && !image3 ? <span className="createAccSpan">Image3 Required</span> : null}
              </div>
            </div>
          </div>
          <button type="submit" className="form_button">Create</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCreatePropertiesIMG;
