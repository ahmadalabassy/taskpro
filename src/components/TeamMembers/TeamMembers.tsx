import { useEffect, useState } from "react";
import TeamMemberCard from "./../TeamMemberCard/TeamMemberCard.tsx";
import styles from "./TeamMembers.module.css";
import ReusableModal from "./../ReusableModal/ReusableModal";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import * as Yup from "yup";
import { useFormik } from "formik";

const initialTeamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Developer",
    active: true,
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
    department: "IT",
    address: "123 Main Stsdasdasdsadad",
    supervisor: "Jane Smith",
    image: "/default-profile-img.svg",
    plannedLeavesDate: "2023-12-01",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    active: false,
    email: "jane.smith@example.com",
    phone: "+1 987-654-3210",
    department: "Project Management",
    address: "456 Elm St",
    supervisor: "Jane Smith",
    image: "/default-profile-img.svg",
    plannedLeavesDate: "2023-11-15",
    joinDate: "2023-02-20",
  },
];

export default function TeamMembers() {
  const [showModal, setShowModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [imageURL, setImageURL] = useState("/default-profile-img.svg");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);
  const phoneRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const registerSchema = Yup.object({
    name: Yup.string()
      .lowercase()
      .trim()
      .min(3, "Must be 3 character of more")
      .required("Name is required")
      .max(20, "Name must be at most 20 characters"),
    role: Yup.string()
      .lowercase()
      .trim()
      .required()
      .max(20, "Role must be at most 20 characters"),
    email: Yup.string()
      .lowercase()
      .trim()
      .email()
      .required()
      .max(30, "Email must be at most 20 characters"),
    phone: Yup.string()
      .lowercase()
      .trim()
      .matches(phoneRegex, "Phone number is not valid")
      .required()
      .min(11, "Phone number must be at least 10 digits")
      .max(13, "Phone number must be at most 15 digits "),
    department: Yup.string()
      .lowercase()
      .trim()
      .required()
      .max(20, "Department must be at most 20 characters"),
    address: Yup.string()
      .lowercase()
      .trim()
      .required()
      .max(50, "Address must be at most 20 characters"),
    supervisor: Yup.string()
      .lowercase()
      .trim()
      .required()
      .max(20, "Supervisor must be at most 20 characters"),
  });
  //local storage
  useEffect(() => {
    const storedTeamMembers = localStorage.getItem("teamMembers");
    if (storedTeamMembers) {
      setTeamMembers(JSON.parse(storedTeamMembers));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result as string;

      image.onload = () => {
        // Check image dimensions
        const maxWidth = 1500; // Maximum width in pixels
        const maxHeight = 1500; // Maximum height in pixels
        if (image.width > maxWidth || image.height > maxHeight) {
          setAlertMessage(
            "Image dimensions exceed the maximum allowed size. Please choose an image with dimensions no larger than 1500x1500 pixels.",
          );
          return;
        }

        // Check image file type
        const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!allowedMimeTypes.includes(file.type)) {
          setAlertMessage(
            "Invalid image file type. Only JPEG, PNG, and GIF are allowed"
          );

          return;
        }

        // Image is valid, set the image URL
        setImageURL(reader.result as string);
      };

      image.onerror = () => {
        setAlertMessage("error on upload image !");
      };
    };

    reader.readAsDataURL(file);
  };
  const handleOnSubmit = (values) => {
    setTeamMembers([
      ...teamMembers,
      { ...values, id: teamMembers.length + 1, image: imageURL },
    ]);
    setShowModal(false);
    setAlertMessage("Team member added successfully!");
    setShowAlert(true);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      role: "",
      active: false,
      email: "",
      phone: "",
      department: "",
      address: "",
      supervisor: "",
      image: "",
      plannedLeavesDate: "",
      comments: [],
      files: [],
      joinDate: new Date()
        .toISOString()
        .split(" ")
        .map((date) => date.split("T")[0])
        .join(" "),
    },
    validationSchema: registerSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    // Add a button to open the modal to add a new team member
    <div className={styles.TeamMember}>
      {showAlert && !showModal && (
        <Alert
          key={alertMessage}
          className="d-none d-md-flex"
          variant={alertMessage.includes("success") ? "success" : "danger"}
        >
          {alertMessage}
        </Alert>
      )}
      <div className="row d-flex align-content-start gx-lg-2 gy-lg-2 g-2 container-fluid ">
        {showAlert && !showModal && (
          <Alert
            key={alertMessage}
            className="d-flex d-md-none position-absolute"
            variant={alertMessage.includes("success") ? "success" : "danger"}
          >
            {alertMessage}
          </Alert>
        )}
        <div className="col-lg-12 col-md-12 col-12 d-md-none d-flex align-items-center justify-content-between flex-row ">
          <p
            className={`fw-semibold text-secondary fs-5 text-start m-2 ${styles.TeamMemberTitle}`}
          >
            Team Members
          </p>
          <p
            className={`fw-semibold text-light fs-5 rounded-3 text-start btn btn-primary m-3 ${styles.TeamMemberTitle}`}
            onClick={() => setShowModal(true)}
          >
            +
          </p>
        </div>
        <div
          className={`col-lg-3 col-md-6 col-6 d-none d-md-flex d-lg-flex align-items-center justify-content-center flex-column border-2 rounded-3 border border-secondary-subtle btn ${styles.AddBtn}`}
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-plus fs-1 text-primary mt-3"></i>
          <p className="fw-bolder fs-5 text-primary d-inline w-lg-50">
            Add Team Member{" "}
          </p>
        </div>
        {teamMembers.map((member) => (
          <div key={member.id} className="col-lg-3 col-md-6 col-6">
            <TeamMemberCard {...member} />
          </div>
        ))}
        <ReusableModal
          onClose={() => setShowModal(false)}
          show={showModal}
          title="Add Team Member"
        >
          {showAlert && (
            <Alert
              key={alertMessage}
              variant={alertMessage.includes("success") ? "success" : "danger"}
            >
              {alertMessage}
            </Alert>
          )}
          <div className={`mb-3 ${styles.imgContainer}`}>
            <img src={imageURL} alt="Uploaded" className={styles.modalImg} />
            <span className={`btn btn-primary rounded-pill ${styles.editImg}`}>
              <i
                className="bi bi-pencil fs-6"
                onClick={() => document.getElementById("fileInput")?.click()}
              ></i>
            </span>
          </div>
          <Form className={styles.form} onSubmit={formik.handleSubmit}>
            <Form.Control
              type="file"
              id="fileInput"
              name="image"
              className="d-none"
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/gif"
            />
            <div className={`row g-1 container-fluid `}>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Name"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="fs-6 m-0 text-danger">{formik.errors.name}</p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Role"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="text"
                  name="role"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.role && formik.touched.role && (
                  <p className="fs-6 m-0 text-danger">{formik.errors.role}</p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Email"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="Email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="fs-6 m-0 text-danger">{formik.errors.email}</p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Phone"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="fs-6 m-0 text-danger">{formik.errors.phone}</p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Supervisor"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="text"
                  name="supervisor"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.supervisor && formik.touched.supervisor && (
                  <p className="fs-6 m-0 text-danger">
                    {formik.errors.supervisor}
                  </p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Department"
                className="mb-3 col-6"
              >
                <Form.Control
                  type="text"
                  name="department"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.department && formik.touched.department && (
                  <p className="fs-6 m-0 text-danger">
                    {formik.errors.department}
                  </p>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="AddTeamMember"
                label="Address"
                className="mb-3 col-12"
              >
                <Form.Control
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.address && formik.touched.address && (
                  <p className="fs-6 m-0 text-danger">
                    {formik.errors.address}
                  </p>
                )}
              </FloatingLabel>
              <Button className="w-100" variant="primary" type="submit">
                Add Member
              </Button>
            </div>
          </Form>
        </ReusableModal>
      </div>
    </div>
  );
}
